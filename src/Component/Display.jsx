import React from "react";

export default function Display(props) {
  return (
    <div className="display">
      <h2> You have {props.number} people's birthday </h2>
    </div>
  );
}
