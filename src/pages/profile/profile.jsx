import React from "react";
import "../profile/profile.css";
import { ProfileContext, useLocalStorage } from "../../context/ProfileContext";
import Modal from "../Modal/modal";
import { useContext } from "react";


export default function Profile() {
  const { value } = useLocalStorage("values", []);
  const { visible, handleOpen } = useContext(ProfileContext)

 
  return (
    <div className="welcome">
      {visible && <Modal />}
      <div className="welcome1">
        <h3>Welcome to your dashboard {value.firstName}!</h3>
        <div className="infos">
            <img src={value.image} alt="" /> 
          </div>
        <div className="info">
          <div className="infos">
            <h2>FirstName</h2>
           <label>{value.firstName}</label>
          </div>
          <div className="infos">
            <h2>LastName</h2>
           <label>{value.lastName}</label>
          </div>
          <div className="infos">
            <h2>Email</h2>
           <label>{value.email}</label>
          </div>
          
        </div>
      
          <button className="btn" onClick={handleOpen}>Edit Info</button>
 
      </div>
    </div>
  );
}
