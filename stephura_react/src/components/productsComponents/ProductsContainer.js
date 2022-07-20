import React, { useContext } from "react";
import OfferContext from "../context/OfferContext";
import Product from "./Product";

export default function ProductsContainer({productId, setProductId}) {

    const offerAPI = useContext(OfferContext)

    let offerItem = offerAPI.offerCat.map(offer => (
        <Product
            id = {offer.id}
            key = {offer.id}
            userId = {offer.customer.id}
            name = {offer.name}
            imgURL = {offer.image} 
            location = {offer.location}
            price = {offer.price}
            login = {offer.customer.login}
            offerDate = {offer.offerDate}
            productId={productId}
            setProductId={setProductId}
        />
    )) 
    
    return (
        <div className="products--wrapper">
            <div className="products">
               {offerItem}
            </div> 
        </div>
    )
}