import React, { useState } from "react"
// import { Link, Navigate } from "react-router-dom"
// import TimePicker from 'react-time-picker';
// import "react-datepicker/dist/react-datepicker.css";
import './reserve.css'
export const Reserve = (props) => {
    const [startTime, setStartTime] = useState('00:00');
    const [endTime, setEndTime] = useState('01:00');

    const handleStartTimeChange = (e) => {
        setStartTime(e.target.value);
    };

    const handleEndTimeChange = (e) => {
        setEndTime(e.target.value);
    };

    return (
        <div>
            {/* <h2>Reserver la salle</h2> */}
            <form className="form">
                <label htmlfor="nom">Nom </label>
                <input type="nom" placeholder="nom"
                id="nom" name="nom" required />
                
                <label htmlfor="password">Prenom </label>
                <input type="prenom" placeholder="prenom"
                id="prenom" name="prenom" required />
                
                <label htmlfor="mail">Mail </label>
                <input type="mail" placeholder="youremail@epitech.eu :"
                id="mail" name="mail" required />
                
                <label htmlfor="usage">Usage </label>
                <input type="usage" placeholder="le motif"
                id="usage" name="usage" required />
                
                <label htmlfor="date">Date </label>
                <input type="date" placeholder="date"
                id="date" name="date" required />
                
            <div >
             <label> Duree  </label>
             <p> <input  type="time" value={startTime} onChange={handleStartTimeChange}/>
                <input type="time" value={endTime} onChange={handleEndTimeChange} /> </p> 
            </div>
            <div >
                <label >Nombre de personne  </label>
                <input  type="number" id = "nbr" placeholder="0" />
            </div>
            <div className="valider">
                <button className="submit-form" type="submit"> Valider </button>
            </div>
            </form>
        </div>
    )
}

export default Reserve;