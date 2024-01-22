import React, { useState, useEffect } from "react";
import useAxios from "./hooks/useAxios"
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import axios from "axios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
const PlayingCardList = () => {
  let initialState =[]
  const [cards, setCards] = useState(initialState);


let url =  "https://deckofcardsapi.com/api/deck/new/draw/" 
     let ans = useAxios(url);
useEffect(()=>{
  if (ans['response'] && ans['response']['data'] && ans['response']['data']['cards']
  && ans['response']['data']['cards']['0'] && ans['response']['data']['cards']['0']['image']){

  setCards(ans['response']['data']['cards']['0']['image'])
  
   }}, [ans['response']['data']])
   
  console.log(cards)
  console.log(ans)

  
  return (
  
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={setCards}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        
 <PlayingCard front={cards}/>
    
      </div>
    </div>
  
  );
}

// CardTable.defaultProps = {};

export default PlayingCardList;
