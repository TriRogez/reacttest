import React from "react";

const Home = () => {
    return (
        <main>
            <div id="particles-js"></div>
            <section id="section_hero" class="p-5 container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100 bg-black text-white">
            <h1 class="fw-bold text-uppercase">Bienvenue sur mon Portfolio !</h1>
            <h2>Découvrez mon parcours et mes réalisations.</h2>
            <div class="d-flex gap-5">
                <a class="btn btn-outline-light mt-4" href="/about">Mon Parcours</a>
                <a class="btn btn-outline-light mt-4" href="/portfolio">Mon Portfolio</a>
            </div>
            </section>
            
        </main>
     
        
    );
};

export default Home;