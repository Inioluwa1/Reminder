import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Input from "./Input";
import Card from "./Card";
import Display from "./Display";

export default function App() {
  const [note, setNote] = useState([]);

  function onAdd(note) {
    setNote((prevValue) => {
      return [...prevValue, note];
    });
  }

  function Delete(id) {
    setNote((prevValue) => {
      return prevValue.filter((person, index) => {
        return index != id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Input onAdd={onAdd} />
      <Display number={note.length} />
      {note.map((person, index) => {
        return (
          <Card
            key={index}
            id={index}
            name={person.name}
            date={person.date}
            img={person.img}
            Delete={Delete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

/* i want to create an app that when i input the name
a friend and their birthday date, it is shown in a
card form

i need the input page
the header component
the footer component
the card page also*/
