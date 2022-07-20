import React, { useContext } from "react";
import OfferContext from "../context/OfferContext";
import NewProductItem from "./NewProductItem";

export default function NewProducts(){
    const offerAPI = useContext(OfferContext)

    let sortedOffer = offerAPI.offerCat.sort((a,b) =>
        (a.offerDate.toLowerCase() < b.offerDate.toLowerCase()) ? 1 :
        ((a.offerDate.toLowerCase() > b.offerDate.toLowerCase()) ? -1 : 0)
    )

    let offerItem = sortedOffer.slice(0,3).map(offer => (
        <NewProductItem 
            id = {offer.id}
            key = {offer.id}
            userId = {offer.customer.id}
            name = {offer.name}
            imgURL = {offer.image} 
            location = {offer.location}
            price = {offer.price}
            login = {offer.customer.login}
            offerDate = {offer.offerDate}
        />
    ))

    return (
        <div className="new-products--wrapper">
            <h1>Najnowsze oferty</h1>
            <h3>Sprawdź najnowsze oferty, nie przegap okazji!</h3>
            <div className="new-products">
                {offerItem}
            </div>
        </div>
    )
}