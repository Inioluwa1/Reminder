import React, { useState } from "react";

export default function Input(props) {
  const [data, setData] = useState({
    name: "",
    date: ""
  });

  function handleData(event) {
    const { name, value } = event.target;

    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.onAdd(data);
    setData({
      name: "",
      date: ""
    });
    event.preventDefault();
  }

  return (
    <form>
      <input
        name="name"
        placeholder="e.g Jane Doe"
        value={data.name}
        onChange={handleData}
      />
      <input
        name="date"
        placeholder="e.g 25th December"
        value={data.date}
        onChange={handleData}
      />
      <button onClick={handleClick}> Add </button>
    </form>
  );
}
