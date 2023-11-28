import Header from "../../layout/Header/index";
import Footer from "../../layout/Footer/index";
import { Link } from "react-router-dom";

function Erreur () {
    return (
        <div className="erreur">
            <Header />
            <main>
                <div className="erreur__block">
                    <h1 className="erreur__titre">404</h1> 
                    <h2 className="erreur__text">Oups! La page que vous demandez n'existe pas.</h2>
                    <Link className="erreur__lien" to="/">Retourner sur la page d'accueil</Link>                    
                </div>                
            </main>
            <Footer />
        </div>        
    )
}

export default Erreur;