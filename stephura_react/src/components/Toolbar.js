import React, { useContext } from "react";
import Filterbar from "./productsComponents/Filterbar";
import Searchbar from "./productsComponents/Searchbar";
import Sortbar from "./productsComponents/Sortbar";
import { FaSearch, FaRedo} from "react-icons/fa"
import OfferContext from "./context/OfferContext";

export default function Toolbar({searchText, cat, sort, setSearchText, setCat, setSort}){
    const offerAPI = useContext(OfferContext)

    const handleResetBtn = (event) => {
        event.preventDefault();
        setSearchText("")
        setCat("")
        setSort("")
        offerAPI.setOfferCat(offerAPI.tempOffer)
    }

    function sortBy(){
        let category = cat.value

        if(category != undefined){         
            offerAPI.setOfferCat(() => {
                let offers =  offerAPI.tempOffer.filter(offer => offer.category.id == cat.value)
                return sortByCriterium(sortByText(offers))
            })
        } else {
            offerAPI.setOfferCat(() => {
                let offers = offerAPI.tempOffer.map(offer => offer)
                return sortByCriterium(sortByText(offers))
            })
        }
    }

    function sortByCriterium(data){
        switch(sort.value){
            case "najnowsze":
                return data.sort((a,b) =>
                (a.offerDate.toLowerCase() < b.offerDate.toLowerCase()) ? 1 :
                ((a.offerDate.toLowerCase() > b.offerDate.toLowerCase()) ? -1 : 0))
            case "najstarsze":
                return data.sort((a,b) =>
                (a.offerDate.toLowerCase() > b.offerDate.toLowerCase()) ? 1 :
                ((a.offerDate.toLowerCase() < b.offerDate.toLowerCase()) ? -1 : 0))
            case "najdrozsze":
                return data.sort((a,b) =>
                (a.price < b.price) ? 1 :
                ((a.price > b.price) ? -1 : 0))
            case "najtansze":
                return data.sort((a,b) =>
                (a.price > b.price) ? 1 :
                ((a.price < b.price) ? -1 : 0))
            case undefined:
                return data              
        }
    }

    function sortByText(data){
        if(searchText != undefined){
            return data.filter(offer => offer.name.toLowerCase().includes(searchText))
        }   
    }

    const HandleSearchBtn = () => {
        sortBy();
    }         

    return (
        <div className="toolbar--wrapper">
            <div className="toolbar">
                <Searchbar setSearchText={setSearchText} searchText={searchText}/>
                <Filterbar cat={cat} setCat={setCat}/>
                <Sortbar sort={sort} setSort={setSort}/>
            </div>
            <div className="toolbar-buttons">
                <button 
                    className="toolbar__btn" 
                    onClick={HandleSearchBtn}
                >
                    Szukaj <FaSearch />
                </button>

                <button 
                    className="toolbar__btn" 
                    onClick={handleResetBtn}
                >
                    Resetuj <FaRedo />
                </button> 
            </div>           
        </div>
    )
}