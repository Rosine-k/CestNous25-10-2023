import Header from "../../layout/Header/index";
import Footer from "../../layout/Footer/index";
import Act from "../../assets/apropos.jpg";
import Affiche from "../../assets/affiche.jpg";
import VideoM from "../../assets/videoMaroc.png";
import Date from "../../assets/localisateur.png";
import Agenda from "../../assets/ecrire.png";

function Actualites() {
  return (
    <div className="actualites">
      <Header />

      <main>
        <div className="actualites__a">
            
          <h1 className="actualites__h1">Actualités</h1>

            
          <div className="actualites__b">    

            <img className="actualites__vig" alt="vignette actu" src={Act}></img> 

            <div className="actualites__right">
              <h2 className="actualites__h2">Représentation</h2>

              <h3 className="actualites__h3">Moi, je peux dire non...encore</h3>

              <div className="actualites__blocDate">
                <img className="actualites__vigDate" alt="vignette actu" src={Date}></img>
                  <h4 class="actualites__h4">11 juin 2023 à 17h</h4>
              </div>

              <div className="actualites__blocLieu">
                <img className="actualites__vigLieu" alt="vignette actu" src={Agenda}></img>
                <h5 class="actualites__h5">Lavoir Moderne Parisien</h5>
              </div>

              <p className="actualites__text"> Et nihil nemo 33 aspernatur quia eum quisquam accusamus sed temporibus commodi nam tempora aspernatur qui exercitationem 
                assumenda. Est mollitia possimus vel illo laboriosam aut accusantium atque quo consequatur magni est natus fugiat sed odio numquam qui voluptatem soluta? 
                Aut explicabo laboriosam ab ullam facilis aut sunt rerum</p>

            </div>      
                
          </div>

          <div className="actualites__b">    

            <img className="actualites__vig" alt="vignette actu" src={Affiche}></img> 

            <div className="actualites__right">
              <h2 className="actualites__h2b">Chantier solidarité</h2>

              <h3 className="actualites__h3">Te raconter ma place</h3>

              <p className="actualites__text"> Et nihil nemo 33 aspernatur quia eum quisquam accusamus sed temporibus commodi nam tempora aspernatur qui exercitationem 
                assumenda. Est mollitia possimus vel illo laboriosam aut accusantium atque quo consequatur magni est natus fugiat sed odio numquam qui voluptatem soluta? 
                Aut explicabo laboriosam ab ullam facilis aut sunt rerum
              </p>

              <img className="actualites__vig" alt="vignette actu" src={VideoM}></img> 

            </div>      
                
          </div>

                
          
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Actualites;
