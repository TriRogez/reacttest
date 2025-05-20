import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
          <Footer />
    </Router>
  );
}

export default App;