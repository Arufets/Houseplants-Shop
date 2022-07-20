import React, { useContext } from "react";
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import OfferContext from "../context/OfferContext";

export default function HeaderSearchbar({search, setSearch}){
    const offerAPI = useContext(OfferContext)

    function sortByText(){
        if(search != undefined || search != ''){
            offerAPI.setOfferCat(
                offerAPI.offerCat.filter(offer => offer.name.toLowerCase().includes(search))
            )
        }
    }

    let navigate = useNavigate();

    const routeChange = () => {
        let path = `/products`;
        navigate(path)
    }

    const handleSearch = () => {
        sortByText()
        setSearch('')   
        routeChange() 
    }

    return (
        <div className="searchbar">
            <input 
                type="search" 
                placeholder="Szukaj w ogłoszeniach..."
                className="searchbar__input"
                onChange={ (e) => (setSearch(e.target.value)) }
                value={search}
            >
            </input>
            <button className="searchbar__button" onClick={handleSearch}>
                <FaSearch className="searchbar__icon"/>
            </button>
        </div>      
    )
}