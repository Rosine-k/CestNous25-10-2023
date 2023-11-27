import Header from "../../layout/Header/index";
import Footer from "../../layout/Footer/index";

function Benevoles() {
  return (
    <div>
      <Header />

      <main>
        <div className="benevoles">
            <div className="benevoles__blocka">
                <h1 className="benevoles__titre">Devenir bénévole</h1>

                <p className="benevoles__text">
              Nous recherchons des bénévoles pour : Lorem ipsum dolor sit amet.
              Vel iusto possimus sed vero placeat ut temporibus obcaecati hic
              aliquid repellendus et Quis voluptatem non dolorem nulla eos
              perferendis dolor. Et nihil nemo 33 aspernatur quia eum quisquam
              accusamus sed temporibus commodi nam tempora aspernatur qui
              exercitationem assumenda.
              <br />
              Est mollitia possimus vel illo laboriosam aut accusantium atque
              quo consequatur magni est natus fugiat sed odio numquam qui
              voluptatem soluta? Aut explicabo laboriosam ab ullam facilis aut
              sunt rerum. Est mollitia possimus vel illo laboriosam aut accusantium atque
              quo consequatur magni est natus fugiat sed odio numquam qui
              voluptatem soluta? Aut explicabo laboriosam ab ullam facilis aut
              sunt rerum. Est mollitia possimus vel illo laboriosam aut accusantium atque
              quo consequatur magni est natus fugiat sed odio numquam qui
              voluptatem soluta? Aut explicabo laboriosam ab ullam facilis aut
              sunt rerum. Est mollitia possimus vel illo laboriosam aut accusantium atque
              quo consequatur magni est natus fugiat sed odio numquam qui
              voluptatem soluta? Aut explicabo laboriosam ab ullam facilis aut
              sunt rerum.
              <br />
              <br />
              Pour devenir bénévole, il vous suffit de compléter le formulaire
              ci-dessous. Un membre de notre équipe vous recontactera suite à
              sa réception. Vous pouvez également nous contacter directement
              pour obtenir plus d’informations.
               </p>
            </div>

          <div className="benevoles__blockb">
            <form  className="form" action="/submit_form" method="post">
              <label htmlFor="nom">Nom :</label>
              <input type="text" id="nomb" name="nom" required />

              <label htmlFor="prenom">Prénom :</label>
              <input type="text" id="prenomb" name="prenom" required />

              <label htmlFor="adresse">Adresse :</label>
              <input type="text" id="adresse" name="adresse" required />

              <label htmlFor="codePostal">Code Postal :</label>
              <input type="text" id="codePostal" name="codePostal" required />

              <label htmlFor="telMobile">Téléphone Mobile :</label>
              <input type="tel" id="telMobile" name="telMobile" required />

              <label htmlFor="telDomicile">Téléphone Domicile :</label>
              <input type="tel" id="telDomicile" name="telDomicile" required />

              <label htmlFor="age">Âge :</label>
              <input type="number" id="age" name="age" required />

              <label htmlFor="email">Email :</label>
              <input type="email" id="emailb" name="email" required />

              <label htmlFor="situation">Situation :</label>
              <input type="checkbox" id="etudiant" name="situation" value="etudiant" />
              <label htmlFor="etudiant">Étudiant(e)</label>

              <input type="checkbox" id="travail" name="situation" value="travail" />
              <label htmlFor="travail">Au travail</label>

              <input type="checkbox" id="rechercheEmploi" name="situation" value="rechercheEmploi" />
              <label htmlFor="rechercheEmploi">En recherche d’emploi</label>

              <input type="checkbox" id="retraite" name="situation" value="retraite" />
              <label htmlFor="retraite">À la retraite</label>

              <input type="checkbox" id="autre" name="situation" value="autre" />
              <label htmlFor="autre">Autre</label>
              <input type="text" id="autreSituation" name="autreSituation" />

              <label htmlFor="motivation">Votre motivation :</label>
              <textarea id="motivation" name="motivation" rows="4" required></textarea>

              <button className="buttonb" type="submit">Envoyer</button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Benevoles;
