import React from "react";

export default function Card(props) {
  function handleDelete() {
    props.Delete(props.id);
  }

  return (
    <div className="card">
      <h1> {props.name} </h1>
      <h3> {props.date} </h3>
      <button className="button" onClick={handleDelete}>
        {" "}
        Delete{" "}
      </button>
    </div>
  );
}
