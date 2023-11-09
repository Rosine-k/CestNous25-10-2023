import Header from "../../layout/Header/index";
import Footer from "../../layout/Footer/index";

function Accueil() {
    return (
        
        <div className="home">
            <Header />
            <main>
            {/* <Banner
                class="banner"
                image={bannerHome} 
                alt="image atelier"
            >
                <h1 className="banner__text">Ateliers théâtre destiné aux femmes</h1>
            </Banner> */}
             
            </main>
            <Footer />
        </div>
    );
}
  
export default Accueil;