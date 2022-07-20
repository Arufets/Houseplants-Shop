import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";

export default function LoginForm() {

    let navigate = useNavigate();
    
    const routeChange = () => {
        let path = `/login`;
        navigate(path)
    }

    const initialValues= {
        name: "", 
        surname: "",
        login: "",
        password: "",
        pswConfirm: "",
        email: "",
        phone: "",
        userDesc: "",
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    //const [isSubmit, setIsSubmit] = useState(false);
    const bcrypt = require('bcryptjs');
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(formValues.password, salt)

    let user = {
        "name": formValues.name,
        "surname": formValues.surname,
        "login": formValues.login,
        "email": formValues.email,
        "password": hash,
        "phone": formValues.phone,
        "userDesc": formValues.userDesc,
        "role": "ROLE_USER"
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value })
    }

    const handleErrors = () => {
        setFormErrors(validate(formValues));
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexp = /^[0-9\b]+$/
        if (!values.name) {
            errors.name = "Pole wymagane!";
        }
        if (!values.surname) {
            errors.surname = "Pole wymagane!";
        }
        if (!values.login) {
            errors.login = "Pole wymagane!";
        }
        if (!values.email) {
            errors.email = "Pole wymagane!";
        } else if (!regex.test(values.email)) {
            errors.email = "Zły format!";
        }
        if (!values.phone) {
            errors.phone = "Pole wymagane!";
        } else if (!regexp.test(values.phone)) {
            errors.phone = "Zły format!";
        }
        if (!values.password) {
            errors.password = "Pole wymagane!";
        } else if (values.password.length < 4) {
            errors.password = "Hasło musi zawierać więcej niż 4 znaki";
        }
        if(values.password != values.pswConfirm){
            errors.pswConfirm = "Hasła różnią się!";
        } 
        return errors;
    }

    const handleSubmit = (event) => {
        event.preventDefault();        
        //setIsSubmit(true);

        if(Object.keys(formErrors).length === 0){
            if(formValues.password && formValues.password === formValues.pswConfirm){
                fetch("http://localhost:8080/user/register",
                {
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(user)
                }).then(() => {
                    console.log("New user is added")
                    routeChange()
                })
            } else {
                alert("Wprowadzone dane są nieprawidłowe!")
            }  
        }      
    }

    return (
        <div className="register-form--wrapper">
            <form className="register-form" onSubmit={handleSubmit}>
                <label className="register-form__title" htmlFor="firstName">Imię</label>
                <input 
                    className="register-form__input" 
                    value={formValues.name} 
                    onChange={handleChange}
                    onMouseOut={handleErrors}
                    id="firstName" 
                    type="text" 
                    name="name" 
                />
                <p className="register-form__error">{formErrors.name}</p>              

                <label className="register-form__title" htmlFor="lastName">Nazwisko</label>
                <input
                    className="register-form__input" 
                    value={formValues.surname} 
                    onChange={handleChange}
                    onMouseOut={handleErrors}
                    id="lastName" 
                    type="text" 
                    name="surname" 
                />
                <p className="register-form__error">{formErrors.surname}</p> 

                <label className="register-form__title" htmlFor="login">Login</label>
                <input
                    className="register-form__input" 
                    value={formValues.login} 
                    onChange={handleChange}
                    onMouseOut={handleErrors}
                    id="login" 
                    type="text" 
                    name="login" 
                />   
                <p className="register-form__error">{formErrors.login}</p> 

                <label className="register-form__title" htmlFor="email">Email</label>
                <input 
                    className="register-form__input" 
                    value={formValues.email} 
                    onChange={handleChange}
                    onMouseOut={handleErrors}
                    id="email" 
                    type="email" 
                    name="email" 
                />
                <p className="register-form__error">{formErrors.email}</p> 

                <label className="register-form__title" htmlFor="number">Numer</label>
                <input 
                    className="register-form__input" 
                    value={formValues.phone} 
                    onChange={handleChange}
                    onMouseOut={handleErrors}
                    id="number" 
                    ype="text" 
                    maxLength="12" 
                    name="phone" 
                />
                <p className="register-form__error">{formErrors.phone}</p> 

                <label className="register-form__title" htmlFor="password">Hasło</label>
                <input 
                    className="register-form__input" 
                    value={formValues.password} 
                    onChange={handleChange}
                    onMouseOut={handleErrors}
                    id="password" 
                    type="password" 
                    name="password" 
                />
                <div className="register-form__error">{formErrors.password}</div>

                <label className="register-form__title" htmlFor="passwordConfirm">Potwierdź hasło</label>
                <input
                    className="register-form__input" 
                    value={formValues.pswConfirm} 
                    onChange={handleChange}
                    onMouseOut={handleErrors}
                    id="passwordConfirm" 
                    type="password" 
                    name="pswConfirm" 
                />
                <p className="register-form__error">{formErrors.pswConfirm}</p> 

                <label className="register-form__title" htmlFor="description">Opis</label>
                <textarea 
                    className="register-form__textarea" 
                    value={formValues.userDesc} 
                    onChange={handleChange}
                    id="description"
                    name="userDesc"
                />       

                <button className="register-form__btn">Utwórz konto</button>                      
            </form>                    
        </div>
    )
}