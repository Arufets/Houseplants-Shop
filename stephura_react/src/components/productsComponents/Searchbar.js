import React from "react";

export default function Searchbar({searchText, setSearchText}){

    return (
        <div className="searchbar">
            <input 
                className="searchbar__input"
                type="search"
                placeholder="Szukaj w ogłoszeniach..."
                value={searchText}
                onChange={ (e) => (setSearchText(e.target.value)) }
            >
            </input>
        </div>  
    )
}