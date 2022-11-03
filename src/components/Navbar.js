import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/rechercher">Rechercher</NavLink>
      <NavLink to="/carte">Carte</NavLink>
    </nav>
  );
}
