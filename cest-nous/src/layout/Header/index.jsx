import React from "react";
import { Link } from "react-router-dom";
import logoHeader from "../../assets/logo.png";

function Header() {
  return (
    <header>

      <Link to="/">
        <img className="navigation__logo" src={logoHeader} alt="logo C'est nous" />
      </Link>
        
      <nav className="navigation__liens">

        <Link to="/" className="navigation__accueil">
          Accueil
        </Link>

        <Link to="/apropos"className="navigation__apropos">
          Qui sommes nous ?
        </Link>

        <Link to="/ateliers"className="navigation__ateliers">
          Les ateliers
        </Link>

        <Link to="/benevoles"className="navigation__benevoles">
          Devenir bénévoles
        </Link>

        <Link to="/partenaires"className="navigation__partenaires">
          Partenaires
        </Link>

        <Link to="/agenda"className="navigation__agenda">
          Agenda
        </Link>

        <Link to="/contact"className="navigation__contact">
          Contact
        </Link>

       </nav>
      
    </header>
  );
}

export default Header;