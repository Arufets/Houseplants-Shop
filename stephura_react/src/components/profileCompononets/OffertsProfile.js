import React, { useEffect, useState } from "react";
import ProductOrder from "../productsComponents/ProductOrder";
import { Link, Outlet } from "react-router-dom";

export default function OffertsProfile() {

    const linkStyle = {
        textDecoration: "none",
        color: "inherit",
    };

    const loggedUser = localStorage.getItem("loggedUser")
    const user = JSON.parse(loggedUser)

    const[userOffers, setUserOffers] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/offer/getUserOffers/${user.id}`)
            .then(res => res.json())
            .then(data => {
                setUserOffers(data)
            })
    }, [])

    const offers = userOffers.map(offer => (
        <ProductOrder 
            id = {offer.id}
            key = {offer.id}
            userId = {offer.customer.id}
            name = {offer.name}
            imgURL = {offer.image} 
            location = {offer.location}
            price = {offer.price}
            login = {offer.customer.login}
            offerDate = {offer.offerDate}
            isPending = {offer.isPending}
            isAccepted ={offer.isAccepted}
        />
    ))

    return (
        <div className="offerts-profile">        
            <h2 className="offerts-profile__title">Moje oferty</h2>
            <div className="offerts-profile__sidebar">
                <button type="button" className="profile__button">
                    <Link style={linkStyle} to="addoffert">Dodaj ofertę</Link>
                </button>
            </div>
            <div className="offerts-profile__offerts">
                {offers}
            </div>  
            <div className="add-offert--wrapper">
                <Outlet />
            </div>                                    
        </div>
    )
}