import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate load event
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 500); // delay for smooth fade-out
    };

    // If document is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loading) return null; // unmount completely

  return (
    <div id="preloader" className="fade-out">
      <div className="spinner"></div>
    </div>
  );
};

export default Preloader;
