import React, { useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadEmittersPlugin } from "tsparticles-plugin-emitters";
import Typed from "react-typed";
import earthImage from "../img/earth.jpg";

const Intro = () => {
  // refs
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const particlesWrapperRef = useRef(null);
  const contentRef = useRef(null);

  // parallax refs
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const MAX_OFFSET = 40;
  const BG_FACTOR = 0.65;
  const PARTICLES_FACTOR = 0.35;
  const CONTENT_FACTOR = 0.12;
  const EASE = 0.09;

  const handlePointer = (clientX, clientY) => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    const nx = (clientX / w - 0.5) * 2;
    const ny = (clientY / h - 0.5) * 2;

    target.current.x = nx * MAX_OFFSET * -1;
    target.current.y = ny * MAX_OFFSET * -1;
  };

  const onMouseMove = (e) => handlePointer(e.clientX, e.clientY);
  const onTouchMove = (e) => {
    if (e.touches && e.touches[0]) handlePointer(e.touches[0].clientX, e.touches[0].clientY);
  };
  const onLeave = () => {
    target.current.x = 0;
    target.current.y = 0;
  };

  const animate = () => {
    current.current.x += (target.current.x - current.current.x) * EASE;
    current.current.y += (target.current.y - current.current.y) * EASE;

    if (bgRef.current)
      bgRef.current.style.transform = `translate3d(${current.current.x * BG_FACTOR}px, ${current.current.y * BG_FACTOR}px, 0) scale(1.03)`;
    if (particlesWrapperRef.current)
      particlesWrapperRef.current.style.transform = `translate3d(${current.current.x * PARTICLES_FACTOR}px, ${current.current.y * PARTICLES_FACTOR}px, 0)`;
    if (contentRef.current)
      contentRef.current.style.transform = `translate3d(${current.current.x * CONTENT_FACTOR}px, ${current.current.y * CONTENT_FACTOR}px, 0)`;

    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);

    const c = containerRef.current;
    if (c) {
      c.addEventListener("mousemove", onMouseMove, { passive: true });
      c.addEventListener("touchmove", onTouchMove, { passive: true });
      c.addEventListener("mouseleave", onLeave, { passive: true });
      c.addEventListener("touchend", onLeave, { passive: true });
    }

    return () => {
      if (c) {
        c.removeEventListener("mousemove", onMouseMove);
        c.removeEventListener("touchmove", onTouchMove);
        c.removeEventListener("mouseleave", onLeave);
        c.removeEventListener("touchend", onLeave);
      }
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const particlesInit = async (engine) => {
    await loadFull(engine);
    await loadEmittersPlugin(engine);
  };

  return (
    <div
      ref={containerRef}
      id="home"
      className="intro route bg-image background"
      style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="parallax-bg"
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "120%",
          height: "120%",
          backgroundImage: `url(${earthImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
          filter: "brightness(0.7)",
        }}
      />

      {/* Particles */}
      <div
        ref={particlesWrapperRef}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", willChange: "transform" }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 150, density: { enable: true, area: 1000 } },
              color: { value: ["#ffd700", "#fffacd", "#ffe4b5", "#ffffff"] },
              shape: { type: "circle" },
              size: { value: { min: 2, max: 6 }, random: true },
              opacity: {
                value: 1,
                random: { enable: true, minimumValue: 0.3 },
                animation: { enable: true, speed: 1, minimumValue: 0.3, sync: false },
              },
              move: {
                enable: true,
                speed: { min: 1, max: 5 },
                direction: "none", // move in all directions
                straight: false,
                outModes: { default: "out" },
                attract: { enable: false },
              },
            },
            interactivity: {
       events: {
        onHover: { enable: false },
        onClick: { enable: false }, // <-- DISABLED
        resize: true,
              },
              modes: { remove: { quantity: 9999 } },
            },
            detectRetina: true,
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="intro-content display-table"
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "auto",
          willChange: "transform",
        }}
      >
        <div className="table-cell">
          <div className="container text-center text-white">
            <h1 className="intro-title mb-4">Hello, I am Kavinraj S.K</h1>
            <p className="intro-subtitle">
              <strong className="text-slider">
                <Typed
  strings={[
    "Full Stack Developer",
    "Cloud &amp; DevOps Enthusiast", // use HTML entity
    "Software Engineer Trainee @ Wise Work",
    "AWS | Docker | Kubernetes | React.js | Blazor",
  ]}
  typeSpeed={60}
  backSpeed={40}
  backDelay={800}
  startDelay={300}
  smartBackspace={true}
  loop
/>

              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
