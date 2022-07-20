import React from "react";
import Select from "react-select";

const optionsSort = [
    {value: 'najnowsze', label: 'Najnowsze'},
    {value: 'najtansze', label: 'Najtańsze'},
    {value: 'najdrozsze', label: 'Najdroższe'},
    {value: 'najstarsze', label: 'Najstarsze'}
]

export default function Sortbar({sort, setSort}){

    return (
        <label className="toolbar__tools">
            Sortowanie
            <Select 
                className="toolbar__select"
                value={sort}
                onChange={(value) => setSort(value)}
                options={optionsSort}
                placeholder="Wybierz..."
            />
        </label>      
    )
}