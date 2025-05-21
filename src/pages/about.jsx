import React from "react";

const About = () => {
    return (
        <main>
            <section id="section_hero" class="p-5 container-fluid d-flex flex-column align-items-center justify-content-evenly min-vh-100 bg-black text-white">
               
                <div class="container row align-items-center">
                    <div class="col text-center">
                        <img src="./moi.webp" class="img-fluid rounded-circle"style={{maxWidth: "300px"}} />
                    </div>
                    <div class="col">
                         <h1 class="fw-bold text-uppercase">A propos de moi.</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum deserunt possimus, sint velit aperiam illo sapiente ea cumque quas asperiores esse harum ipsa, fugit rem obcaecati reprehenderit consequuntur? Iste, aliquam?
                        </p>
                        <a class="btn btn-outline-light mt-4" href="/portfolio">Mon Portfolio</a>
                    </div>
                </div>
                
            </section>
        </main>
    );
};

export default About;