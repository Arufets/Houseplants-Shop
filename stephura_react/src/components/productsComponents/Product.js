import React from "react";
import { FaUserAlt } from "react-icons/fa"
import { Link } from "react-router-dom";

export default function Product({id, imgURL, name, login, location, offerDate, price, setProductId, userId}){

    const linkStyle = {
        textDecoration: "none",
        color: "inherit",
    };

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
        </div>
    )
}