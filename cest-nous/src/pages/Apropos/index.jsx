import Header from "../../layout/Header/index";
import Footer from "../../layout/Footer/index";
import Quisommesnous from "../../assets/apropos.jpg";

function Apropos () {
    return (

        <div className="apropos">
            <Header/>
            
            <main>
                <div className="apropos__block">
                    <h1 className="apropos__titre">Qui sommes nous ?</h1>
                       
                    <img className="apropos__banner" alt="vignette contact" src={Quisommesnous}></img>

                    <p className="apropos__text">Lorem ipsum dolor sit amet. Vel iusto possimus sed vero placeat ut temporibus obcaecati hic aliquid repellendus et Quis voluptatem non dolorem nulla eos perferendis dolor. Et nihil nemo 33 aspernatur quia eum quisquam accusamus sed temporibus commodi nam tempora aspernatur qui exercitationem assumenda. Est mollitia possimus vel illo laboriosam aut accusantium atque quo consequatur magni est natus fugiat sed odio numquam qui voluptatem soluta? Aut explicabo laboriosam ab ullam facilis aut sunt rerum.
                        At dolor optio est quia ullam sit iure reiciendis sed eligendi numquam ea dolore dolores qui facilis itaque. Qui enim earum ut commodi voluptas aut minima quia id numquam optio ut earum voluptatum aut illum dignissimos est provident dolores.
                        Et magni deleniti in nihil odio eos nihil veniam? Ut enim galisum qui facilis ipsum qui nihil rerum nam cumque dolor sed consequatur nihil rem accusamus accusamus. Et fugiat obcaecati et vitae magni qui sapiente nihil. Et delectus iste non natus soluta At voluptatem iste 33 molestiae laboriosam?
                        Lorem ipsum dolor sit amet. Vel iusto possimus sed vero placeat ut temporibus obcaecati hic aliquid repellendus et Quis voluptatem non dolorem nulla eos perferendis dolor. Et nihil nemo 33 aspernatur quia eum quisquam accusamus sed temporibus commodi nam tempora aspernatur qui exercitationem assumenda. Est mollitia possimus vel illo laboriosam aut accusantium atque quo consequatur magni est natus fugiat sed odio numquam qui voluptatem soluta? Aut explicabo laboriosam ab ullam facilis aut sunt rerum.
                        At dolor optio est quia ullam sit iure reiciendis sed eligendi numquam ea dolore dolores qui facilis itaque. Qui enim earum ut commodi voluptas aut minima quia id numquam optio ut earum voluptatum aut illum dignissimos est provident dolores.
                        Et magni deleniti in nihil odio eos nihil veniam? Ut enim galisum qui facilis ipsum qui nihil rerum nam cumque dolor sed consequatur nihil rem accusamus accusamus. Et fugiat obcaecati et vitae magni qui sapiente nihil. Et delectus iste non natus soluta At voluptatem iste 33 molestiae laboriosam?</p>
                </div>

            </main>


            <Footer />
        </div>

    )
}

export default Apropos;