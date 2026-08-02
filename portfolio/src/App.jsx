import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CareerJourney from "./components/CareerJourney/CareerJourney";
import About from "./components/About/About";
import Toolbox from "./components/Toolbox/Toolbox";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CareerJourney />
        <About />
        <Toolbox />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
