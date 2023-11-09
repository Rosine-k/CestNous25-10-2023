import React from "react";

function Footer() {
    return (
      <footer className="footer">
        {/* <img className="footer__logo" src="{logo_footer}" alt="logo footer" /> */}
        <a className="footer__contact" href="./contact">Contact</a>
        <a className="footer__mentions" href="./mentions">Mentions légales</a>
        <p className="footer__text">© 2023 C'est Nous. All rights reserved</p>
      </footer>
      
    );
  }
  
  export default Footer;