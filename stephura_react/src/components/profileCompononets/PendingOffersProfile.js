import React, { useEffect, useState } from "react";
import Product from "../productsComponents/Product";

export default function PurchasesProfile() {
    const[userOffers, setUserOffers] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/offer/getBuyerPendingOffers/${user.id}`)
            .then(res => res.json())
            .then(data => {
                setUserOffers(data)
            })
    }, [])

    const offers = userOffers.map(offer => (
        <Product 
            id = {offer.id}
            key = {offer.id}
            userId = {offer.customerId}
            name = {offer.name}
            imgURL = {offer.image} 
            location = {offer.location}
            price = {offer.price}
            login = {offer.customer.login}
            offerDate = {offer.offerDate}
            idPending = {offer.isPending}
        />
    ))

    const loggedUser = localStorage.getItem("loggedUser")
    const user = JSON.parse(loggedUser)
    return (
        <div className="purchases-profile">
            <h2 className="purchases-profile__title">Oferty oczekujące</h2>
            {offers}        
        </div>
    )
}