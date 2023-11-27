import Header from "../../layout/Header/index";
import Footer from "../../layout/Footer/index";
import Lmp from "../../assets/logoLMP1.png";
import Mairie from "../../assets/Logo_Mairie_18.png";
import { Link } from "react-router-dom";

function Partenaires() {
  return (
    <div className="partenaires">
      <Header />

      <main>
        <div className="partenaires__b">
            
            <h1 className="partenaires__t">Partenaires</h1>

            <p className="partenaires__text"> Les partenaires publics et privés contribuent au développement de l’association. <br></br>
                    Lorem ipsum dolor sit amet. Vel iusto possimus sed vero placeat ut temporibus obcaecati hic aliquid repellendus et Quis voluptatem non dolorem 
                    nulla eos perferendis dolor. Et nihil nemo 33 aspernatur quia eum quisquam accusamus sed temporibus commodi nam tempora aspernatur qui exercitationem 
                    assumenda. Est mollitia possimus vel illo laboriosam aut accusantium atque quo consequatur magni est natus fugiat sed odio numquam qui voluptatem soluta? 
                    Aut explicabo laboriosam ab ullam facilis aut sunt rerum. <br></br> Est mollitia possimus vel illo laboriosam aut accusantium atque quo consequatur magni est natus fugiat sed odio numquam qui voluptatem soluta? 
                    Aut explicabo laboriosam ab ullam facilis aut sunt rerum.
            </p>

            <img className="partenaires__vig" alt="lmp logo" src={Lmp}></img>

            <img className="partenaires__vign" alt="mairie 18 logo" src={Mairie}></img>

            <h2 className="partenaires__titreb">Vous souhaitez devenir notre partenaire ?</h2>

            

            <Link to="/contact" className="linkp"><button className="partenaires__button">Contactez nous</button></Link>
                
          
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Partenaires;
