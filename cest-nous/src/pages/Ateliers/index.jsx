import Header from "../../layout/Header/index";
import Footer from "../../layout/Footer/index";
import Imgateliers from "../../assets/ateliersimg.jpg";
import Video from "../../assets/videoateliers.png";
import { Link } from "react-router-dom";


function Ateliers () {
    return (
        <div className="ateliers">

           <Header/>
           <main>

            <div className="ateliers__block">

               <h1 className="ateliers__titre">Les ateliers</h1>

                <div className="ateliers__back">

                    <img className="ateliers__vignette" alt="vignette contact" src={Imgateliers}></img>

                        <p className="ateliers__text">Lorem ipsum dolor sit amet. Vel iusto possimus sed vero placeat ut temporibus obcaecati hic aliquid repellendus et Quis voluptatem non dolorem nulla eos perferendis dolor. Et nihil nemo 33 aspernatur quia eum quisquam accusamus sed temporibus commodi nam tempora aspernatur qui exercitationem assumenda. Est mollitia possimus vel illo laboriosam aut accusantium atque quo consequatur magni est natus fugiat sed odio numquam qui voluptatem soluta? Aut explicabo laboriosam ab ullam facilis aut sunt rerum.
                        At dolor optio est quia ullam sit iure reiciendis sed eligendi numquam ea dolore dolores qui facilis itaque. Qui enim earum ut commodi voluptas aut minima quia id numquam optio ut earum voluptatum aut illum dignissimos est provident dolores.
                        Et magni deleniti in nihil odio eos nihil veniam? Ut enim galisum qui facilis ipsum qui nihil rerum nam cumque dolor sed consequatur nihil rem accusamus accusamus. Et fugiat obcaecati et vitae magni qui sapiente nihil. Et delectus iste non natus soluta At voluptatem iste 33 molestiae laboriosam?<br></br>
                        Lorem ipsum dolor sit amet. Vel iusto possimus sed vero placeat ut temporibus obcaecati hic aliquid repellendus et Quis voluptatem non dolorem nulla eos perferendis dolor. Et nihil nemo 33 aspernatur quia eum quisquam accusamus sed temporibus commodi nam tempora aspernatur qui exercitationem assumenda. Est mollitia possimus vel illo laboriosam aut accusantium atque quo consequatur magni est natus fugiat sed odio numquam qui voluptatem soluta? Aut explicabo laboriosam ab ullam facilis aut sunt rerum.
                        At dolor optio est quia ullam sit iure reiciendis sed eligendi numquam ea dolore dolores qui facilis itaque. Qui enim earum ut commodi voluptas aut minima quia id numquam optio ut earum voluptatum aut illum dignissimos est provident dolores.
                        Et magni deleniti in nihil odio eos nihil veniam? Ut enim galisum qui facilis ipsum qui nihil rerum nam cumque dolor sed consequatur nihil rem accusamus accusamus. Et fugiat obcaecati et vitae magni qui sapiente nihil. Et delectus iste non natus soluta At voluptatem iste 33 molestiae laboriosam? Lorem ipsum dolor sit amet. Vel iusto possimus sed vero placeat ut temporibus obcaecati hic aliquid repellendus et Quis voluptatem non dolorem nulla eos perferendis dolor. Et nihil nemo 33 aspernatur quia eum quisquam accusamus sed temporibus commodi nam tempora aspernatur qui exercitationem assumenda. Est mollitia possimus vel illo laboriosam aut accusantium atque quo consequatur magni est natus fugiat sed odio numquam qui voluptatem soluta? Aut explicabo laboriosam ab ullam facilis aut sunt rerum.
                        At dolor optio est quia ullam sit iure reiciendis sed eligendi numquam ea dolore dolores qui facilis itaque. Qui enim earum ut commodi voluptas aut minima quia id numquam optio ut earum voluptatum aut illum dignissimos est provident dolores.<br></br>
                        Et magni deleniti in nihil odio eos nihil veniam? Ut enim galisum qui facilis ipsum qui nihil rerum nam cumque dolor sed consequatur nihil rem accusamus accusamus. Et fugiat obcaecati et vitae magni qui sapiente nihil. Et delectus iste non natus soluta At voluptatem iste 33 molestiae laboriosam?Lorem ipsum dolor sit amet. Vel iusto possimus sed vero placeat ut temporibus obcaecati hic aliquid repellendus et Quis voluptatem non dolorem nulla eos perferendis dolor. Et nihil nemo 33 aspernatur quia eum quisquam accusamus sed temporibus commodi nam tempora aspernatur qui exercitationem assumenda. Est mollitia possimus vel illo laboriosam aut accusantium atque quo consequatur magni est natus fugiat sed odio numquam qui voluptatem soluta? Aut explicabo laboriosam ab ullam facilis aut sunt rerum.
                        At dolor optio est quia ullam sit iure reiciendis sed eligendi numquam ea dolore dolores qui facilis itaque. Qui enim earum ut commodi voluptas aut minima quia id numquam optio ut earum voluptatum aut illum dignissimos est provident dolores.
                        Et magni deleniti in nihil odio eos nihil veniam? Ut enim galisum qui facilis ipsum qui nihil rerum nam cumque dolor sed consequatur nihil rem accusamus accusamus. Et fugiat obcaecati et vitae magni qui sapiente nihil. Et delectus iste non natus soluta At voluptatem iste 33 molestiae laboriosam?Lorem ipsum dolor sit amet. Vel iusto possimus sed vero placeat ut temporibus obcaecati hic aliquid repellendus et Quis voluptatem non dolorem nulla eos perferendis dolor. Et nihil nemo 33 aspernatur quia eum quisquam accusamus sed temporibus commodi nam tempora aspernatur qui exercitationem assumenda. Est mollitia possimus vel illo laboriosam aut accusantium atque quo consequatur magni est natus fugiat sed odio numquam qui voluptatem soluta? Aut explicabo laboriosam ab ullam facilis aut sunt rerum.
                        At dolor optio est quia ullam sit iure reiciendis sed eligendi numquam ea dolore dolores qui facilis itaque. Qui enim earum ut commodi voluptas aut minima quia id numquam optio ut earum voluptatum aut illum dignissimos est provident dolores.<br></br>
                        Et magni deleniti in nihil odio eos nihil veniam? Ut enim galisum qui facilis ipsum qui nihil rerum nam cumque dolor sed consequatur nihil rem accusamus accusamus. Et fugiat obcaecati et vitae magni qui sapiente nihil. Et delectus iste non natus soluta At voluptatem iste 33 molestiae laboriosam?</p>

                </div>

                <div className="ateliers__blockb">

                    <h2 className="ateliers__titreb">Dévouvrez des extraits de notre dernière pièce</h2>

                    <h3 className="ateliers__titrec">"Moi, je peux dire non encore..."</h3>

                    <img className="ateliers__video" alt="video ateliers" src={Video}></img>

                    <h4 className="ateliers__titred">Pour participer aux ateliers</h4>

                    <Link to="/contact" className="linkp"><button className="ateliers__button">Contactez nous</button></Link>

                </div>

            </div>

           </main>


           <Footer />

        </div>
    )
}

export default Ateliers