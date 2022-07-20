import React, { useState } from "react";
import Header from "./components/Header.js"
import Home from "./Pages/Home.js";
import About from "./Pages/About.js"
import Contact from "./Pages/Contact.js";
import Products from "./Pages/Products.js";
import Profile from "./Pages/Profile.js";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import ViewProfile from "./components/profileCompononets/ViewProfile.js";
import EditProfile from "./components/profileCompononets/EditProfile.js";
import PurchasesProfile from "./components/profileCompononets/PurchasesProfile.js";
import PendingOffersProfile from "./components/profileCompononets/PendingOffersProfile.js";
import OffertsProfile from "./components/profileCompononets/OffertsProfile.js";
import Login from "./Pages/Login.js";
import Register from "./Pages/Register.js";
import ProductOffert from "./Pages/ProductOffert.js";
import AddOffert from "./components/profileCompononets/AddOffert.js";
import Footer from "./components/Footer.js";
import User from "./Pages/User.js";
import { OfferProvider } from "./components/context/OfferContext.js";
import NotFound from "./Pages/NotFound.js";

export default function App(){
  const[productId, setProductId]=useState("")
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem("isLogged")) || false
  );

  const toggleLogin = () => {
    setLogin(!login)
  }

  const passLogin = login

  return (
      <div className="App">
        <OfferProvider>
          <BrowserRouter>
            <Header login={passLogin} setLogin={toggleLogin}/>

            <Routes>
              <Route path="*" element={<NotFound />} /> 
              <Route path="/" element={<Home login={passLogin} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products productId={productId} setProductId={setProductId}/>} />
              <Route path="/profile/" element = { login ? (<Profile />) : (<Navigate replace to="/" />)}>
                <Route path=":id/viewprofile" element={<ViewProfile />}/>
                <Route path=":id/editprofile" element={<EditProfile />}/>
                <Route path=":id/purchasesprofile" element={<PurchasesProfile />}/>
                <Route path=":id/pendingoffers" element={<PendingOffersProfile />}/>
                <Route path=":id/offertsprofile" element={<OffertsProfile />}>
                  <Route path="addoffert" element={ <AddOffert />} /> 
                </Route>
              </Route>
              <Route path="/login" element={<Login toggleLogin={toggleLogin} login={passLogin} />} />
              <Route path="/register" element={<Register />} />  
              <Route path="/productoffert/:id" element={<ProductOffert productId={productId} setProductId={setProductId} login={passLogin}/>}/>
              <Route path="/user/:id" element={<User />}/>   
            </Routes>
            
            <Footer login={passLogin} />
          </BrowserRouter>
        </OfferProvider>
      </div>
  )
}
