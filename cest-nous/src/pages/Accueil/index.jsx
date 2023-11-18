import Header from "../../layout/Header/index";
import Footer from "../../layout/Footer/index";
import bannerHome from "../../assets/banner.png";
import Mission from "../../assets/mission.jpg";
import Video from "../../assets/portrait.png";
import Ateliers from "../../assets/ateliers.png";
import Partenaires from "../../assets/partenaires.png";
import Actualites from "../../assets/actualites.png";
import { Link } from "react-router-dom";


function Accueil() {
    return (
        
        <div className="home">
            <Header />
            <main>
            <div className="banner">
                <img className="banner__logo" alt="banner" src={bannerHome}></img>
            
                <h1 className="banner__text">Ateliers théâtre destiné aux femmes</h1>
           
            </div> 

            <article className="mission missionb"> 
               <img className="mission__img" alt="représentation" src={Mission}></img>
               <div className="mission__block" >
                  <h2 className="mission__titre" >Notre mission</h2>
                  <h3 className="mission__text">Offrir aux femmes un espace de liberté, d'expression et de découverte de soi à travers des ateliers théâtre. Les séances sont animées par des professionnels du théâtre, permettant aux participantes de cultiver leur confiance en elles, d'améliorer leurs compétences en communication et de créer des liens durables avec d'autres femmes.
                  L'association donne aux femmes l'occasion de partager leurs histoires, leurs perspectives et leurs talents, en abordant des thèmes pertinents et en suscitant des conversations significatives.
                  C'est Nous s'engage résolument à élargir les horizons des participantes en créant un environnement inclusif où chaque femme peut s'épanouir et se sentir valorisée.</h3>

                </div>
               
            </article>

            <article className="temoignages"> 
                <div className="temoignages__block" >
                  <h2 className="temoignages__titre" >Témoignages <br /> <br /></h2>
                  <h3 className="temoignages__text">“ Depuis que je fais du théâtre avec C’est Nous, j’ai beaucoup plus confiance en moi et j’ai adoré rencontré d’autres femmes
                                                   d’horizons différentes. Cette expérience a été hyper enrichissante...  ” <br /> <br /> </h3>
                  <h4 className="temoignages__nom">Sarah, 19 ans</h4>
                </div>
                
                <img className="temoignages__video" alt="video" src={Video}></img>                               
                              
            </article>

            <div className="choix">

                <Link to="/ateliers" className="atelier__block">
                    <img className="atelier__vignette" alt="vignette ateliers" src={Ateliers}></img>

                    <h5 className="atelier__titre">Les ateliers</h5>
                </Link>

                

                <Link to="/partenaires" className="partenaires__block">

                    <img className="partenaires__vignette" alt="vignette partenaires" src={Partenaires}></img>

                    <h5 className="partenaires__titre">Devenir partenaires</h5>
                </Link>

                <Link to="/actualites" className="actualites__block">

                    <img className="actualites__vignette" alt="vignette actualites" src={Actualites}></img>

                    <h5 className="actualites__titre">Actualités</h5>
                </Link>

            </div>


            </main>
            <Footer />
        </div>
    );
}
  
export default Accueil;