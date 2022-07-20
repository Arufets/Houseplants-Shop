import React, { useEffect, useState } from "react";
import NewProducts from "../components/mainComponents/NewProducts";
import ProductInfo from "../components/ProductInfo";
import { useParams } from "react-router-dom";

export default function ProductOffert({productId, login}){
    useEffect(() => {
        window.scroll(0,0)
    }, [])

    const[offer, setOffer] = useState([])
    let {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/offer/getOffer/${id}`)
            .then(res => res.json())
            .then(data => {
                setOffer(data)
            })
    }, [id])

    let offerInfo = offer.map(offer => (
        <ProductInfo 
            key = {offer.id}
            userId = {offer.customer.id}
            name = {offer.name}
            imgURL = {offer.image} 
            location = {offer.location}
            price = {offer.price}
            login = {offer.customer.login}
            offerDate = {offer.offerDate}
            productId={productId}
            customerId={offer.customer.id}
            desc={offer.desc}
            userLogged={login}
        />
    ))


    return (
        <div className="product-offer">
            {offerInfo}
            <NewProducts />
        </div>
    )
}