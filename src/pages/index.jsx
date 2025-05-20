import React from "react";
import 'bs5-lightbox';
const Home = () => {
    return (
        <main>
            <section id="section_hero" class="p-5 container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100 bg-black text-white">
            <h1 class="fw-bold text-uppercase">Bienvenue sur mon Portfolio</h1>
            <h2>Découvrez mes réalisations web.</h2>
            <div class="d-flex gap-5">
                <a class="btn btn-outline-light mt-4" href="/about">Mon Parcours</a>
                <a class="btn btn-outline-light mt-4" href="/portfolio">Mon Portfolio</a>
            </div>
            </section>
        </main>
    );
};

import Lightbox from 'bs5-lightbox';

const options = {
	keyboard: true,
	size: 'fullscreen'
};

document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
	e.preventDefault();
	const lightbox = new Lightbox(el, options);
	lightbox.show();
}));

export default Home;