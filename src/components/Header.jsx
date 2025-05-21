
import React from "react";

const Header = () => {
    return (
             <header>
                <nav class="navbar navbar-dark bg-black navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Portfolio de Tristan Rogez.</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="/">Accueil</a>
                            <a class="nav-link" href="/about">A propos</a>
                            <a class="nav-link" href="/portfolio">Portfolio</a>
                            <a class="nav-link" href="/contact">Contact</a>
                        </div>
                        </div>
                    </div>
                </nav>
            </header>
    );
};



export default Header;