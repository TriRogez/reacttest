import React from "react";

const Contact = () => {
  return (
    <main>
      <section id="section_hero" class="p-5 container-fluid d-flex flex-column align-items-center justify-content-evenly min-vh-100 bg-black text-white">
        <h1 class="fw-bold text-uppercase">Contacter Tristan Rogez.</h1>


        <form class="w-50">
          <div class="mb-3">
            <label for="nom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nom" placeholder="Votre nom..." required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Votre e-mail..." required/>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="3" placeholder="Votre message..." required></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary">Envoyer</button>
          </div>
        </form>


      </section>
    </main>
  );
};

export default Contact;