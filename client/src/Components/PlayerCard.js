import React from "react";
import "./Cards.css";

const PlayerCard = ({ player }) => {

    const selectedCard = player[0];
    const length = player.length;

    const handleClick = () => {
        alert("!");
    };

    console.log(player[0]);

    return (
        <>
            {length > 1 ?
                <div className="card-border">
                    <div className="card-front">
                        <div className="card-image">
                            <img src={require("../images/" + selectedCard.image)} alt=""
                                height="175" width="225" style={{ objectFit: "contain" }} />
                        </div>
                        <p className="dino-name">
                            {selectedCard.name}{selectedCard.diet == "Herbivore" ? " 🥬" : " 🥩"}
                        </p>
                        <p className="dino-info">{selectedCard.description}</p>
                        <p className="dino-weight" onClick={handleClick}>Weight:  {selectedCard.weight} lbs</p>
                        <p className="dino-age" onClick={handleClick}>Age:  {selectedCard.age} million years</p>
                        <p className="dino-danger" onClick={handleClick}>Danger rating:  {selectedCard.danger_rating}</p>
                    </div>
                </div>
                :
                <>
                    null
                </>
            }
        </>
    );
};

export default PlayerCard;
