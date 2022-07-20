import React from "react";
import Starter from "./mainComponents/Starter.js";
import NewProducts from "./mainComponents/NewProducts.js"
import AboutInfo from "./AboutInfo.js";

export default function Main(){
    return (
        <div className="content">
            <Starter />
            <NewProducts />
            <AboutInfo />
        </div>
    )
}