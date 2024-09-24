import React from "react";
import "./Header.scss"

function Header() {
  return (
    <div className="header">
      <h1>¡Bienvenidos a mi portfolio!</h1>
      <div className="header-text">
        <h2>About me</h2>
        <p>Soy Ona, Full Stack Developer. <br/> Tengo 24 años y me apasiona programar y aprender.
          Tras un tiempo tratando de encontrar mi pasión encontré la programación, mi motivación para seguir aprendiendo y mejorando constantemente.
        </p>
      </div>
    </div>
  );
}

export default Header;
