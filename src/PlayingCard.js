import React, { useState } from "react";
import backOfCard from "./back.png";
import useToggleState from './hooks/useFlip'
import "./PlayingCard.css"

/* Renders a single playing card. */
// function PlayingCard({ front, back = backOfCard }) {
//   const [isFacingUp, setIsFacingUp] = useState(true);
//   const flipCard = () => {
//     setIsFacingUp(isUp => !isUp);
//   };
const PlayingCard = ({front, back = backOfCard}) => {
  const [isFlip, toggleIsFlip] = useToggleState()
  return (
    <img
      src={isFlip ? front : backOfCard}
      alt="playing card"
      onClick={toggleIsFlip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
