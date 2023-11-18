import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/index";
import Erreur from "./pages/Erreur/index";
import Contact from "./pages/Contact/index";
import Actualités from "./pages/Actualités/index";
import Apropos from "./pages/Apropos/index";
import Benevoles from "./pages/Benevoles/index";
import Partenaires from "./pages/Partenaires/index";
import Atelier from "./pages/Ateliers/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/actualites" element={<Actualités />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/ateliers" element={<Atelier />} />
        <Route path="/benevoles" element={<Benevoles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="*" element={<Erreur />} />       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
