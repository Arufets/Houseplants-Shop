import React from "react";
import { FaUserAlt } from "react-icons/fa"
import { Link, useParams } from "react-router-dom";

export default function ProductInfo({desc, imgURL, name, login, location, offerDate, price,customerId, userLogged, userId}) {

    const linkStyle = {
        textDecoration: "none",
        color: "inherit",
    };

    const userNotLoggedInfo = {
        paddingTop: "10px"
    }

    const userLoggedInfo ={
        display: "none"
    }

    const loggedUser = localStorage.getItem("loggedUser")
    const user = JSON.parse(loggedUser)
    

    const current = new Date();
    const purchaseDate = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()).padStart(2, '0')}`;

    let {id} = useParams();

    let buyerId= ""
    if(user !== null){
        buyerId = user.id;
    }
   

    const order = {
        "purchaseDate": purchaseDate,
        "isPending": true,
        "buyer": {
            "id": buyerId
        }
    }

    console.log(order)
    
    const handleOrder = (e) => {
        e.preventDefault();
        
        if(user !== null){
            if(customerId !== user.id){
                fetch(`http://localhost:8080/offer/orderOffer/${id}`,
                {
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(order)
                }).then(() => {
                    console.log("New product is ordered")
                    alert("Produkt zamówiony, oczekuj na potwierdzenie!")
                    window.location.reload()
                })
            } else {
                alert("Nie możesz zamówić swojego produktu!")
                window.location.reload()
            }
        } 
    }
    
    return (
        <div className="product-offert__info">
            <div className="product-offer__info--left">
                <div>
                    <img className="product-offer__image" src={imgURL} alt="name"/>
                </div>
                <div className="product-offer__desc">
                    <h2 className="product-offer__title">{name}</h2>
                    <h3 className="product-offer__title">OPIS</h3>
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
            <div className="product-offer__info--right">
                <div>
                    <h3 className="product-offer__title">CENA</h3>
                    <p className="product-offer__prize">{price} zł</p>
                </div>
                <div>
                    <h3 className="product-offer__title">UŻYTKOWNIK</h3>
                    <p className="product-offer__user"><FaUserAlt /><Link style={linkStyle} to={"/user/" + customerId }>{" " + login}</Link></p>
                    <p className="product-offer__location">{location} • {offerDate}</p> 
                </div>
                <div className="product-offer__buy">
                        <input className="profile__button" type="button" value="Zamów" id="bookProducyBtn" onClick={handleOrder}/>
                        {
                            userLogged ? 
                            (<div style={userLoggedInfo}>Zaloguj się, aby zamówić</div>) : 
                            (<div style={userNotLoggedInfo}>Zaloguj się, aby zamówić</div>) 
                        }                
                </div>
            </div>
        </div>
    )
}