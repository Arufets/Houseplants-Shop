import React from "react";
import Select from "react-select";

const optionsCat = [
    {value: '1', label: 'Rośliny'},
    {value: '2', label: 'Doniczki'},
    {value: '3', label: 'Różne'}
]

export default function Filterbar({cat, setCat}){

    return (
        <label className="toolbar__tools">
            Kategorie          
            <Select 
                className="toolbar__select"
                value={cat}
                onChange={(value) => setCat(value)}
                options={optionsCat}
                placeholder="Wybierz..."
            />
        </label>
        
    )
}
