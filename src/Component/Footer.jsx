import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <h4> Copyright @ {year} </h4>
    </footer>
  );
}
