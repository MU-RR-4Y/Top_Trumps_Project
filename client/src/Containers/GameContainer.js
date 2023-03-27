import React, {useState, useEffect} from "react";
import PlayerCard from "../Components/PlayerCard";
import ComputerCard from "../Components/ComputerCard";
import { getDinosaurs } from "../Services/GameService";
import "./GameContainer.css";
import "./AudioControl.css";


const GameContainer = () => {
    
    const [player,SetPlayer] = useState([]);
    const [cpu,SetCPU] = useState([]);
    const [middle,SetMiddle] = useState([]);
    
    
    
    const shuffle = (cards) => {
        for (let i = cards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    };
    
    useEffect(() => {
        getDinosaurs()
        .then((data) => {
            const playerHand = data
            shuffle(playerHand)
            const cpuHand = playerHand.splice(0,15)
            SetPlayer(playerHand)
            SetCPU(cpuHand)
        })
        
    },[]);
    
    if (!player.length || !cpu.length) return null;



    return (
        <>
            <audio id="theme-audio"  controls controlsList="nodownload noplaybackrate">
                <source src={require("../Audio/Jurassic_Park_Theme_Song.mp3")} type="audio/mpeg"></source>
            </audio>

            
            
            <div className="cards-display">
                <PlayerCard player={player}/>
                <ComputerCard cpu={cpu}/>
            </div>
        </>
    );
     
};


export default GameContainer; 