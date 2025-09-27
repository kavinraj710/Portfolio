import React, { useState, useEffect } from "react";
import {
  FaDocker,
  FaAws,
  FaReact,
  FaUnity,
  FaLeaf,
} from "react-icons/fa";
import { SiMongodb, SiGrafana, SiBlazor, SiFastapi } from "react-icons/si";


import weather1 from "../img/weather1.png";

import todo from "../img/todo.png";
import blog from "../img/blog.png";
import classic from "../img/class.png";
import herbal from "../img/herbal.png";
import smart from "../img/smart.png";
const projects = [
  {
    id: 1,
    title: "To-Do Web Application",
    tech: [<FaAws />, <FaDocker />, <SiBlazor />, <SiGrafana />, <SiMongodb />],
    description:
      "Task manager with CI/CD pipelines, Docker deployment, and monitoring tools for high performance.",
    img: todo,
    link: "https://github.com/kavinraj710/ToDo",
  },
  {
    id: 2,
    title: "Smart ID Checker",
    tech: [<SiFastapi />, <FaReact />, <FaAws />],
    description:
      "Verifies uploaded IDs using blur, brightness, and glare checks. Deployed on AWS ECS for scalability.",
    img: smart,
    link: "https://github.com/kavinraj710/Smart-Id-Validator",
  },
  {
    id: 3,
    title: "My Blog",
    tech: [<SiMongodb />, <SiBlazor />],
    description:
      "Social blogging platform with media uploads, real-time updates, and follower system.",
    img: blog,
    link: "https://github.com/kavinraj710/My-Blog",
  },
  {
    id: 4,
    title: "Virtual Classroom",
    tech: [<FaUnity />],
    description:
      "Interactive classroom with GPT-4 chatbot, PDF viewer, and collaborative whiteboard.",
    img: classic,
    link: "https://github.com/kavinraj710/Virtual-Classroom",
  },
  {
    id: 5,
    title: "Weather Forecast App",
    tech: [<SiBlazor />, <SiMongodb />],
    description:
      "Accurate 14-day forecast with login, location-based updates, and responsive design.",
    img: weather1,
    link: "https://github.com/kavinraj710/Weather-MongoAuth",
  },
  {
    id: 6,
    title: "Virtual Herbal Garden",
    tech: [<FaUnity />, <FaLeaf />],
    description:
      "Simulation app for learning medicinal plants with interactive modules.",
    img: herbal,
    link: "https://github.com/kavinraj710/Virtual-Herbal",
  },
];

const PortfolioCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerSlide >= projects.length ? 0 : prevIndex + itemsPerSlide
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerSlide);

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <h3 className="title-a text-center mb-3">🚀 Portfolio</h3>
        <p className="subtitle-a text-center mb-4">
          A selection of my recent projects
        </p>
        <div className="row">
          {visibleProjects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 mb-4 d-flex">
              <div className="project-card-modern">
                {/* Image with overlay */}
                <div className="project-img">
                  <img src={project.img} alt={project.title} />
                  <div className="overlay">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-light btn-sm"
                    >
                      View Project
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="project-content">
                  <h5>{project.title}</h5>
                  <div className="tech-icons">
                    {project.tech.map((icon, i) => (
                      <span key={i}>{icon}</span>
                    ))}
                  </div>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
  .project-card-modern {
    border-radius: 15px;
    overflow: hidden;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(255,255,255,0.2);
    box-shadow: 0 6px 25px rgba(0,0,0,0.25);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 420px;   /* 🔹 Increased card height */
  }
  .project-card-modern:hover {
    transform: translateY(-10px);
    box-shadow: 0 14px 35px rgba(0,0,0,0.4);
  }

  .project-img {
    position: relative;
    height: 230px;   /* 🔹 Bigger image */
    overflow: hidden;
  }
  .project-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  .project-card-modern:hover img {
    transform: scale(1.15);
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.55);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.4s ease;
  }
  .project-card-modern:hover .overlay {
    opacity: 1;
  }

  .project-content {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .project-content h5 {
    font-weight: 700;
    margin-bottom: 12px;
    font-size: 1.25rem;   /* 🔹 Bigger title */
    color: #222;
  }
  .project-content p {
    font-size: 1rem;      /* 🔹 Larger text */
    color: #444;       /* 🔹 Brighter text */
    line-height: 1.6;
    flex-grow: 1;
  }

  .tech-icons {
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
    font-size: 1.4rem;    /* 🔹 Larger icons */
    color: #ffd700;
  }

  .btn-light {
    background: #ffd700;
    color: #111;
    font-weight: 600;
    padding: 8px 18px;
    border-radius: 25px;
    transition: all 0.3s ease;
  }
  .btn-light:hover {
    background: #fff;
    color: #000;
    box-shadow: 0 0 15px rgba(255,215,0,0.6);
  }
`}</style>

    </section>
  );
};

export default PortfolioCarousel;
