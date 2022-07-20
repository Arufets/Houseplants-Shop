import React, { useState } from "react";
import Select from "react-select";

const optionsCat = [
    {value: '1', label: 'Rośliny'},
    {value: '2', label: 'Doniczki'},
    {value: '3', label: 'Różne'}
]

export default function AddOffert(){
    const loggedUser = localStorage.getItem("loggedUser")
    const user = JSON.parse(loggedUser)

    const [selectedOptionCat, setSelectedOptionCat] = useState(optionsCat[0])

    const current = new Date();
    const offerDate = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate() + 1).padStart(2, '0')}`;
    const customerId = user.id;
    const categoryId = selectedOptionCat

    const initialValues= {
        name: "", 
        desc: "",
        price: "",
        location: "",
        image: ""
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value })
    }

    const handleErrors = () => {
        setFormErrors(validate(formValues));
    }

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Pole wymagane!";
        }
        if (!values.desc) {
            errors.desc = "Pole wymagane!";
        }
        if (!values.price) {
            errors.price = "Pole wymagane!";
        }
        if (!values.location) {
            errors.location = "Pole wymagane!";
        }
        if (!values.image) {
            errors.image = "Pole wymagane!";
        }
        return errors;
    }

    let offer = {
        "name": formValues.name,
        "desc": formValues.desc,
        "price": formValues.price,
        "location": formValues.location,
        "image": formValues.image,
        "offerDate": offerDate,
        "purchaseDate": null,
        "isPending": 0,
        "isAccepted": 0,
        "category": {
            "id": +categoryId.value
        },
        "customer": {
            "id": customerId
        },
        "buyer": null
    }

    console.log(offer)

    const handleSubmit = (event) => {
        event.preventDefault();        
        setIsSubmit(true);

        if(Object.keys(formErrors).length === 0){
            fetch("http://localhost:8080/offer/addOffer",
        {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(offer)
        }).then(() => {
            console.log("New offer is added")
            window.location.reload()        
        })} else {
            alert("Wprowadzone dane są nieprawidłowe!")
        }      
    }

    return (
        <div className="add-offert">
            <h2 className="add-offert__title">Nowa oferta</h2>
            <form className="add-offert__form" onSubmit={handleSubmit}>
                <label className="add-offert__label" htmlFor="offertTitle">Nazwa produktu:</label>
                <input 
                    className="add-offert__input"
                    id="offertTitle"
                    type="text" 
                    onChange={handleChange}
                    onMouseOut={handleErrors}
                    value={formValues.name}
                    name="name"
                    placeholder="Np. najładniejszy kwaitek"
                />
                <p className="register-form__error">{formErrors.name}</p> 

                <label className="add-offert__label" htmlFor="descriptionOffert">Opis produktu:</label>
                <textarea   
                    className="add-offert__textarea"
                    id="descriptionOffert" 
                    onChange={handleChange}
                    onMouseOut={handleErrors}
                    value={formValues.desc}
                    name="desc"
                    placeholder="Np. Najładniejszy kwiatek na sprzedaż"
                />
                <p className="register-form__error">{formErrors.desc}</p> 

                <label className="add-offert__label" htmlFor="offertPrize">Cena produktu:</label>
                <input 
                    className="add-offert__input"   
                    id="offertPrize" 
                    type="text"
                    onChange={handleChange}
                    onMouseOut={handleErrors}
                    value={formValues.price}
                    name="price"
                    placeholder="Np. 22.99"
                />
                <p className="register-form__error">{formErrors.price}</p> 

                <label className="add-offert__label" htmlFor="offertLocation">Lokalizacja produktu:</label>
                <input 
                    className="add-offert__input"  
                    id="offertLocation" 
                    type="text"
                    onChange={handleChange}
                    onMouseOut={handleErrors}
                    value={formValues.location}
                    name="location"
                    placeholder="Np. Legnica"
                />
                <p className="register-form__error">{formErrors.location}</p> 

                <label className="add-offert__label" htmlFor="offertImage">Zdjęcie produktu:</label>
                <input 
                    className="add-offert__input"  
                    id="offertImage" 
                    type="text"
                    onChange={handleChange}
                    onMouseOut={handleErrors}
                    value={formValues.image}
                    name="image"
                    placeholder="Podaj adres url do zdjęcia np. z hostingu"
                />
                <p className="register-form__error">{formErrors.image}</p> 

                <label className="add-offert__label" htmlFor="selectCat">
                    Wybierz kategorię:        
                </label>
                <Select
                        if="selectCat"
                        className="add-offert__select"
                        value={selectedOptionCat}
                        onChange={setSelectedOptionCat}
                        options={optionsCat}
                />       
                <button className="profile__button" id="editProfileBtn">Dodaj</button>              
            </form>
        </div>     
    )
}