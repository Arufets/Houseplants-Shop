import React, { useEffect } from "react";
import ProfileHeader from "../components/profileCompononets/ProfileHeader";
import AboutInfo from "../components/AboutInfo.js"

export default function Profile(){
    useEffect(() => {
        window.scroll(0,0)
    }, [])
    return (
        <div>
            <div className="profile--wrapper">
                <div className="profile">
                    <ProfileHeader />           
                </div>                 
            </div>
            <AboutInfo />
        </div>
        
    )
}