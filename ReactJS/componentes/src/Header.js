import React from "react"
import './App.css'

function Header(props) {
  return (
    <header className="container">
      <h1>{props.name}</h1>
      <ul className="menu">
        <li>{props.list[0]}</li>
        <li>{props.list[1]}</li>
        <li>{props.list[2]}</li>
      </ul>
    </header>
  );
}

export default Header // exportando

// criando o componente para utilizar no App.js
