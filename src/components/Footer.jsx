
import React from "react";

const Footer = () => {
    return (
        <footer class="bg-black text-light py-3">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item">
                    <a href="/" class="nav-link px-2 text-light">Accueil</a></li>
                <li class="nav-item">
                    <a href="/about" class="nav-link px-2 text-light">A propos</a>
                </li>
                <li class="nav-item">
                    <a href="/portfolio" class="nav-link px-2 text-light">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a href="/contact" class="nav-link px-2 text-light">Contact</a>
                </li>
            </ul>
            <p class="text-center text-light">© 2025 ROGEZ TRISTAN.</p>
        </footer>
    );
};



export default Footer;