import React from "react";
import "./App.css"; // tem que importar esses componentes para aplicar o CSS e o React

function Header() {
  return (
    <div>
      <header className="container">
        <h1>willian</h1>
        <ul className="menu">
          <li>Sobre</li>
          <li>contato</li>
          <li>Local</li>
        </ul>
      </header>
    </div>
  );
}

export default Header

// Exportar um componente , cruiamos esse componente Header  exportamos eles para o app.js
