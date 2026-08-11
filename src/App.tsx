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
  const cursorBlobRef = useRef<HTMLDivElement>(null);
  const cursorCoreRef = useRef<HTMLDivElement>(null);

  // ── Liquid Orb / Fluid Glow Cursor ─────────────────────────────────
  useEffect(() => {
    const blob = cursorBlobRef.current;
    const core = cursorCoreRef.current;
    if (!blob || !core) return;

    let targetX = 0, targetY = 0;
    let blobX = 0, blobY = 0;
    let velocityX = 0, velocityY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      core.style.left = targetX + 'px';
      core.style.top = targetY + 'px';
    };

    // High-motion fluid physics with trailing liquid inertia
    const animate = () => {
      const prevX = blobX;
      const prevY = blobY;

      // Trailing inertia lerp (0.09 for organic liquid delay)
      blobX += (targetX - blobX) * 0.09;
      blobY += (targetY - blobY) * 0.09;

      velocityX = blobX - prevX;
      velocityY = blobY - prevY;

      const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
      const angle = Math.atan2(velocityY, velocityX) * (180 / Math.PI);
      // Dynamic high-motion liquid stretch (up to 0.75x stretch)
      const stretch = Math.min(speed * 0.055, 0.75);

      blob.style.left = blobX + 'px';
      blob.style.top = blobY + 'px';
      blob.style.transform = `translate(-50%, -50%) rotate(${angle}deg) scale(${1 + stretch * 1.2}, ${Math.max(0.4, 1 - stretch * 0.6)})`;

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const addHover = () => { blob.classList.add('hover'); core.classList.add('hover'); };
    const rmHover = () => { blob.classList.remove('hover'); core.classList.remove('hover'); };
    const addClick = () => { blob.classList.add('clicking'); };
    const rmClick = () => { blob.classList.remove('clicking'); };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', addClick);
    window.addEventListener('mouseup', rmClick);

    const updateHoverListeners = () => {
      document.querySelectorAll('a, button, [role=button], input, textarea').forEach(el => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', rmHover);
      });
    };
    updateHoverListeners();

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', addClick);
      window.removeEventListener('mouseup', rmClick);
      cancelAnimationFrame(raf);
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
      {/* Fluid Liquid Orb Cursor */}
      <div id="cursor-blob" ref={cursorBlobRef} />
      <div id="cursor-core" ref={cursorCoreRef} />

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
