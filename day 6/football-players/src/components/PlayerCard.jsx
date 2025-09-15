import React from "react";
const PlayerCard = ({player})=>{
    const {image ,name, age, nationality, currentClub,position} = player;
    return(
        <div className ="player-card">
            <img src={image} alt="{name}" height="200px" width="200px"/>
            <h3>Name:{name}</h3> 
            <div className="info-row">
                <span className="label">Age:</span>
                <span>{age}</span>
            </div>
            <div className="info-row">
                <span className="label">Nationality:</span>
                <span>{nationality}</span>
            </div>
            <div className="info-row">
                <span className="label">Position:</span>
                <span>{position}</span>
            </div>
            <div className="info-row">
                <span className="label">Current Club:</span>
                <span>{currentClub}</span>
            </div>
        </div>
    )
}
export default PlayerCard;