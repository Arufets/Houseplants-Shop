import React from "react";

export default function Viewrofile() {
    const loggedUser = localStorage.getItem("loggedUser")
    const user = JSON.parse(loggedUser)

    return (
        <div className="view-profile">
            <h2 className="view-profile__title">Szczegóły konta</h2>
            <div className="view-profile__info">
                <label className="view-profile__label" htmlFor="firstName">Imię</label>
                <input className="view-profile__input" value={user.name} id="firstName" type="text" readOnly/>

                <label className="view-profile__label" htmlFor="lastName">Nazwisko</label>
                <input className="view-profile__input" value={user.surname} id="lastName" type="text" readOnly />

                <label className="view-profile__label" htmlFor="email">Email</label>
                <input className="view-profile__input" value={user.email} id="email" type="email" readOnly />

                <label className="view-profile__label" htmlFor="numer">Numer</label>
                <input className="view-profile__input" value={user.phone} id="numer" type="text" readOnly />

                <label className="view-profile__label" htmlFor="description">Opis</label>
                <textarea className="view-profile__textarea" value={user.userDesc} id="description" readOnly/>
            </div>
        </div>       
    )
}