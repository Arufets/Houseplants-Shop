import React, { useState } from "react";
import ProductsContainer from "../components/productsComponents/ProductsContainer";
import Toolbar from "../components/Toolbar";

export default function Products({productId, setProductId}){

    const[searchText, setSearchText] = useState("")
    const[cat, setCat] = useState("")
    const[sort, setSort] = useState("")

    return (
        <>
            <Toolbar
                searchText={searchText}
                setSearchText={setSearchText}
                cat={cat}
                setCat={setCat}
                sort={sort}
                setSort={setSort}
            />

            <ProductsContainer
                productId={productId}
                setProductId={setProductId}
            />
        </>     
    )
}