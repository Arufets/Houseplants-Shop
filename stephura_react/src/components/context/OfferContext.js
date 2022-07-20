import React, { createContext, useState, useEffect } from "react";

const OfferContext = createContext();

export function OfferProvider({children}) {
    const[offerCat, setOfferCat] = useState([])
    const[tempOffer, setTempOffer] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/offer/getOffers")
            .then(res => res.json())
            .then(data => {
                setOfferCat(data)
                setTempOffer(data)
            })
    }, [])
    
    return (
        <OfferContext.Provider value={{offerCat, setOfferCat, tempOffer, setTempOffer}}>
            {children}
        </OfferContext.Provider>
    )
}

export default OfferContext;