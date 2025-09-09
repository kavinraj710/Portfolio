import React from "react";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image2.jpg";
import stock3 from "../img/image3.jpg";
import stock4 from "../img/image4.jpg";
import stock5 from "../img/image5.jpg";
import stock6 from "../img/image6.jpg";

const projects = [
  {
    id: 1,
    title: "To-Do Web Application",
    tech: "Blazor | MongoDB | GitHub Actions | Docker | Prometheus | Grafana",
    description:
      "A modern task management application where users can create, update, and track tasks. Integrated with CI/CD pipelines, Docker deployment, and monitoring tools (Prometheus & Grafana) to ensure reliability and high performance. Features task prioritization, completion tracking, and automated notifications.",
    img: stock1,
    link: "#",
  },
  {
    id: 2,
    title: "Smart ID Checker",
    tech: "FastAPI | React | OpenCV | AWS ECS",
    description:
      "Full-stack application to verify uploaded ID documents. Checks image quality parameters like blur, brightness, contrast, and glare to ensure documents are suitable for automated identity verification systems. Deployed on AWS ECS for scalability.",
    img: stock2,
    link: "#",
  },
  {
    id: 3,
    title: "My Blog",
    tech: "MongoDB | Blazor | MudBlazor | C#",
    description:
      "A social blogging platform allowing users to post blogs, follow others, comment, and engage in discussions. Supports media uploads, real-time updates, and a follower/following system to increase engagement and content interaction.",
    img: stock3,
    link: "#",
  },
  {
    id: 4,
    title: "Virtual Classroom",
    tech: "Unity | GPT-4 | Plugins",
    description:
      "An interactive virtual classroom platform featuring a GPT-4 powered chatbot for instant doubt clearance, a PDF viewer for reference materials, and a collaborative digital whiteboard. Designed to enhance remote learning experiences.",
    img: stock4,
    link: "#",
  },
  {
    id: 5,
    title: "Weather Forecast Application",
    tech: "Blazor | Weather API | MongoDB",
    description:
      "Provides accurate 14-day weather forecasts with user authentication. Features location-based updates and a clean, responsive interface for smooth navigation. Ensures users get timely weather information with easy-to-read visuals.",
    img: stock5,
    link: "#",
  },
  {
    id: 6,
    title: "Virtual Herbal Garden",
    tech: "Unity | Assets | Plugins",
    description:
      "A simulation app for learning about medicinal plants. Users can plant seeds, monitor growth, and learn herbal medicine preparation. Includes interactive educational modules for engaging, hands-on learning experiences.",
    img: stock6,
    link: "#",
  },
];

const PortfolioCarousel = () => {
  const duplicatedProjects = [...projects, ...projects]; // duplicate for smooth scroll

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container text-center">
        <h3 className="title-a">Portfolio</h3>
        <p className="subtitle-a">A selection of my recent projects</p>
        <div className="line-mf mb-4"></div>

        <div style={{ overflow: "hidden", width: "100%" }}>
          <div
            className="slider"
            style={{ display: "flex", width: "max-content", animation: "slide 18s linear infinite" }}
          >
            {duplicatedProjects.map((project, index) => (
              <div
                key={index}
                style={{
                  flex: "0 0 280px",
                  margin: "0 15px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  background: "#fff",
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s",
                }}
                className="project-card"
              >
                <div className="img-container" style={{ overflow: "hidden", borderRadius: "8px" }}>
                  <img
                    src={project.img}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "160px",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    className="project-image"
                  />
                </div>
                <div>
                  <h5>{project.title}</h5>
                  <p style={{ fontSize: "0.85rem", color: "#555" }}>{project.tech}</p>
                  <p style={{ fontSize: "0.8rem", color: "#777" }}>{project.description}</p>
                </div>
                <a
                  href={project.link}
                  className="btn btn-sm btn-primary mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .project-card:hover .project-image {
            transform: scale(1.1); /* zoom image on hover */
          }

          .project-card:hover {
            transform: scale(1.03);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </section>
  );
};

export default PortfolioCarousel;
