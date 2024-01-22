import React, { useState } from "react";
import useAxios from "./hooks/useAxios"
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
const PlayingCardList = () => {
  const [cards, setCards] = useState();
  
let url =  "https://deckofcardsapi.com/api/deck/new/draw/" 
    const ans = useAxios(url);
    
  console.log(ans)
  console.log(ans)

  setCards(ans['response']['data']['cards']['0']['image'])
  
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
