import React from "react";
import Gal from "../components/Gal";
import Cards from "../components/Cards";
import Images from "../components/Images.jsx";


const Portfolio = () => {
    return (
        <main>
    <section id="section_hero" class="p-5 container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100 bg-black text-white">
      <h1 class="fw-bold text-uppercase">Mon Portfolio</h1>
      <div class="container p-5">     <Images/></div>
 
       <a class="btn btn-outline-light mt-4" href="/contact">Contactez-moi</a>
    </section>
  </main>
    );
};

export default Portfolio;