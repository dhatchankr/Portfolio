import { useState, useEffect, useRef } from "react";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIBuild from "./components/WhatIBuild";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import GitHub from "./components/GitHub";
import CurrentLearning from "./components/CurrentLearning";
import WhyHireMe from "./components/WhyHireMe";
import FutureVision from "./components/FutureVision";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null);

  // ── Custom cursor ──────────────────────────────────────────────────────────
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
    const onEnter = () => cursor.classList.add("hover");
    const onLeave = () => cursor.classList.remove("hover");

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [role=button]").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  // ── Scroll reveal ──────────────────────────────────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".gsap-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--font-main)', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Custom cursor */}
      <div id="cursor" ref={cursorRef} />

      {/* Particle background */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <WhatIBuild />
        <Skills />
        <Projects />
        <Timeline />
        <GitHub />
        <CurrentLearning />
        <WhyHireMe />
        <FutureVision />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
