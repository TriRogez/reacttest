import React from "react";
import Gal from "../components/Gal";
const Portfolio = () => {
    return (
        <main>
    <section id="section_hero" class="p-5 container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100 bg-black text-white">
      <h1 class="fw-bold text-uppercase">Mes réalisations web</h1>
      <div class="continer p-5"><Gal/></div>
       <a class="btn btn-outline-light mt-4" href="/contact">Contactez-moi</a>
    </section>
  </main>
    );
};

export default Portfolio;