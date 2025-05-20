import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTitle from "./components/PageTitle";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";



function App() {
  return (
    <Router>
      
        <Header />
            <Routes>
                <Route exact path="/" element={<> <PageTitle title="Portfolio de Tritan Rogez" /> <Home /></>} />
                <Route path="/about" element={<> <PageTitle title="Parcours de Tristan Rogez" /><About /></>} />
                <Route path="/portfolio" element={<> <PageTitle title="Réalisations de Tristan Rogez" /><Portfolio /></>} />
                <Route path="/contact" element={<> <PageTitle title="Contacter Tristan Rogez" /><Contact /></>} />
            </Routes>
          <Footer />
    </Router>
  );
}

export default App;