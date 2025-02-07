import { useEffect } from "react";
import gsap from "gsap";
import "./App.scss";
import About from "./section/About";
import Contact from "./section/Contact";
import Experience from "./section/Experience";
import HeroSection from "./section/HeroSection";
import Navbar from "./section/Navbar";
import SkillsSection from "./section/SkillsSection";

function App() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    if (!cursor) return;

    // Instantly position the cursor at the mouse position
    const updateCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        scale: 1, // Make cursor visible
        duration: 0,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", updateCursor);

    // Cursor hover effects
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 2, background: "#ff0000" });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          scale: 1,
          background: "linear-gradient(45deg, #ffea00, #d4ff00)",
        });
      });
    });

    return () => {
      document.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  return (
    <main className="app">
      <div className="custom-cursor"></div>
      <Navbar />
      <HeroSection />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Mridul Pramod. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
