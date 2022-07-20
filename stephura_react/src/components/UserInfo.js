import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserInfo(){

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    const[user, setUser] = useState([])
    let {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/user/userById/${id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }, [id])

    return (
        <div className="view-profile--wrapper">
            <div className="view-profile">
            <h2 className="view-profile__title">Dane użytkownika</h2>
            <div className="view-profile__info">
                <label className="view-profile__label" htmlFor="firstName">Imię</label>
                <input className="view-profile__input" id="firstName" type="text" defaultValue={user.name} readOnly/>

                <label className="view-profile__label" htmlFor="lastName">Nazwisko</label>
                <input className="view-profile__input" id="lastName" type="text" defaultValue={user.surname} readOnly />

                <label className="view-profile__label" htmlFor="email">Email</label>
                <input className="view-profile__input" id="email" type="email" defaultValue={user.email} readOnly />

                <label className="view-profile__label" htmlFor="email">Telefon</label>
                <input className="view-profile__input" id="email" type="email" defaultValue={user.phone} readOnly />

                <label className="view-profile__label" htmlFor="description">Opis</label>
                <textarea className="view-profile__textarea" id="description" defaultValue={user.userDesc} readOnly/>
            </div>
        </div>
        </div>         
    )
}