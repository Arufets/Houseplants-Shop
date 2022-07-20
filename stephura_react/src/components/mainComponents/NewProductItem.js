import React from "react";
import {FaUserAlt} from 'react-icons/fa'
import { Link} from "react-router-dom";

export default function NewProductItem(props) {

    const linkStyle = {
        textDecoration: "none",
        color: "inherit",
    };
    
    let handleRefresh = () => {
        this.setState({})
    }
    
    return (
        <div className="new-products__item" id={props.id}>
            <h3 className="new-products__title">
                <Link 
                    style={linkStyle} 
                    to={"/productoffert/" + props.id}
                    onClick={handleRefresh}
                >
                    {props.name}
                </Link>
            </h3>
            <div className="new-products__img" style={{backgroundImage: `url(${props.imgURL})`}}/>     
            <div className="new-products__info">
                <div>
                    <p className="new-products__user"><FaUserAlt />
                        <Link 
                            style={linkStyle} 
                            to={"/user/" + props.userId}
                            onClick={handleRefresh}
                        >
                            {" " + props.login}
                        </Link>
                    </p>
                    <p className="new-products__location">{props.location} • {props.offerDate}</p>
                </div>
                <p className="new-products__price">{props.price + "zł"}</p>
            </div>
                         
        </div>
    )
}