import Header from "../../layout/Header/index";
import Footer from "../../layout/Footer/index";
import Vignette from "../../assets/contact.png";
import Appel from "../../assets/appel.png";
import Mail from "../../assets/e-mail.png";

function Contact () {
    return (
        <div className="contact">
            <Header />
            <main>
                <div className="titre">
                    <h1 className="titre__contact">Nous contacter :</h1>
                    
                </div>

                <div className="infos__contact">
                    <img className="vignette__contact" alt="vignette contact" src={Vignette}></img>

                    <div className="carre">

                        <div className="carre__mail">
                            <img className="vignette__mail" alt="vignette mail" src={Mail}></img>
                            <h2 className="titre__mail">E-mail</h2>
                            <h3 className="text__mail" >contact.cestnous@gmail.com</h3>
                        </div>

                        <div className="carre__telephone">
                            <img className="vignette__telephone" alt="vignette telephone" src={Appel}></img>
                            <h2 className="titre__telephone">Téléphone</h2>
                            <h3 className="text__telephone">01 01 01 01 01</h3>
                        </div>
                        
                    </div>

                </div>

                <div className="formulaire__contact">

                    <form action="#" method="post">
                     <label htmlFor="nom">Nom :</label>
                     <input type="text" id="nom" name="nom" required />

                     <label htmlFor="prenom">Prénom :</label>
                     <input type="text" id="prenom" name="prenom" required />

                     <label htmlFor="email">Adresse E-mail :</label>
                     <input type="email" id="email" name="email" required />

                     <label htmlFor="objet">Objet :</label>
                     <input type="text" id="objet" name="objet" required />

                     <label htmlFor="message">Message :</label>
                     <textarea id="message" name="message" rows="4" required></textarea>

                     <input id="envoyer" type="submit" value="Envoyer" />
                    </form>

                </div>
            </main>



            <Footer />
        </div>
    )
}

export default Contact;