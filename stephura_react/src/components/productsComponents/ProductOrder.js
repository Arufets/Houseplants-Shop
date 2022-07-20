import React from "react";
import { FaUserAlt, FaCheckCircle, FaMinusCircle } from "react-icons/fa"
import { Link } from "react-router-dom";

export default function ProductOrder({id, imgURL, name, login, location, offerDate, price, setProductId, isPending, isAccepted, userId}){

    const linkStyle = {
        textDecoration: "none",
        color: "inherit",
    };

    const handleAcceptOffer = (e) => {
        e.preventDefault();

        const accept = {
            "isAccepted": true
        }

        fetch(`http://localhost:8080/offer/acceptOffer/${id}`,
            {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(accept)
            }).then(() => {
                console.log("Offer is accpeted")
                window.location.reload()
            })
    }

    const handleRejectOffer = (e) => {
        e.preventDefault();

        const reject = {
            "isAccepted": false,
            "isPending": false
        }

        fetch(`http://localhost:8080/offer/rejectOffer/${id}`,
            {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(reject)
            }).then(() => {
                console.log("Offer is rejected")
                window.location.reload()
            })
    }

    const handleDeleteOffer = () => {
        fetch(`http://localhost:8080/offer/deleteOffer/${id}`,
            {
                method: "POST",
                headers: {"Content-Type":"application/json"}
            }).then(() => {
                console.log("Offer has been deleted")
                window.location.reload()
            })
    }

    return (
        <div className="product">
            <div className="product__image" style={{backgroundImage: `url(${imgURL})`}}/> 
            <div className="product__info--wrapper">
                <h3 className="product__title">
                    <Link 
                        style={linkStyle} 
                        to={"/productoffert/" + id}
                        id={id} 
                        onClick={(e) => (setProductId(e.target.id))}
                    >
                        {name}
                    </Link>
                </h3>                                  
                <div className="product__info">
                    <div>
                        <p className="product__user"><FaUserAlt />
                            <Link style={linkStyle} to={"/user/" + userId}> {login}</Link>
                        </p>
                        <p className="product__location">{location} • {offerDate}</p>  
                    </div>
                    <p className="product__price">
                        {price + " zł"}
                    </p>       
                </div>
            </div>
            <div className="product__order--wrapper">             
                <div className="product__order">
                    {(
                        (isPending && !isAccepted) &&
                        (<>
                                <div className="product__order-btn" onClick={handleAcceptOffer}>
                                    Zaakceptuj: <FaCheckCircle />
                                </div>
                                <div className="product__order-btn" onClick={handleRejectOffer}>
                                    Odrzuć: <FaMinusCircle />
                                </div>
                                <div className="product__order-btn" onClick={handleDeleteOffer}>
                                    Usuń: <FaMinusCircle />
                                </div>
                        </>)
                    )}
                </div>               
            </div>                                    
        </div>
    )
}