import React from "react";
import "./styles/HangmanDrawingStyle.css";

const HEAD = <div className="drawing-head" />;
const BODY = <div className="drawing-body" />;
const RIGHTARM = <div className="drawing-right-arm" />;
const LEFTARM = <div className="drawing-left-arm" />;
const RIGHTLEG = <div className="drawing-right-leg" />;
const LEFTLEG = <div className="drawing-left-leg" />;

const BODY_PARTS = [HEAD, BODY, RIGHTARM, LEFTARM, RIGHTLEG, LEFTLEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="drawing-wrapper">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="drawing-rope" />
      <div className="drawing-side-pole" />
      <div className="drawing-pole" />
      <div className="drawing-base" />

      <div />
    </div>
  );
}

export default HangmanDrawing;
