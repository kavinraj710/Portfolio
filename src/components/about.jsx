import React from "react";
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaGitAlt,
  FaJenkins,
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaWordpress,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiGrafana,
  SiPrometheus,
  SiCsharp,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiBlazor,
  SiDjango,
  SiDotnet,
} from "react-icons/si";

import myImage from "../img/myImage.png";
import "./About.css";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "aws", name: "AWS (EC2, S3, Lambda, RDS, VPC, ECR)", icon: <FaAws color="#FF9900" /> },
        { id: "devops", name: "DevOps Tools (Git, GitHub, Jenkins, GitHub Actions)", icon: <FaGitAlt color="#F05032" /> },
        { id: "docker", name: "Docker & Kubernetes", icon: <FaDocker color="#2496ED" /> },
        { id: "monitoring", name: "Monitoring (Grafana, Prometheus, Raygun, SonarCloud)", icon: <SiGrafana color="#F46800" /> },
        { id: "iac", name: "Infrastructure as Code: Terraform", icon: <SiTerraform color="#7B42BC" /> },
        { id: "languages", name: "Programming: Java, C, C++, C#, Python, PHP", icon: <FaJava color="#007396" /> },
        { id: "web", name: "Frameworks: Django, React.js, Blazor, .NET, MudBlazor", icon: <SiBlazor color="#512BD4" /> },
        { id: "db", name: "Databases: MySQL, MongoDB, Supabase", icon: <SiMongodb color="#47A248" /> },
        { id: "cms", name: "WordPress Development", icon: <FaWordpress color="#21759B" /> },
      ],
      about_me: [
        {
          id: "intro",
          content:
            "I’m Kavinraj S.K, a Computer Science undergraduate at Kumaraguru College of Technology with a strong foundation in Cloud, DevOps, and Full Stack Development."
        },
        {
          id: "work",
          content:
            "Currently working as a Software Engineer Trainee at Wise Work, where I build responsive full stack applications using Blazor, MudBlazor, and C#."
        },
        {
          id: "vision",
          content:
            "I’m passionate about creating scalable applications, automating workflows, and leveraging cloud-native tools to solve real-world problems."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full modern-card">
                <div className="row">
                  {/* Profile Column */}
                  <div className="col-md-5 text-center">
                    <div className="about-img mb-4">
                      <img
                        src={myImage}
                        alt="Profile"
                        className="img-fluid rounded-circle shadow-lg profile-img"
                      />
                    </div>
                  </div>

                  {/* About Me + Skills */}
                  <div className="col-md-7">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2 mb-4">
                        <h3 className="title-left">About Me</h3>
                      </div>
                      {this.state.about_me.map((content) => (
                        <p className="lead text-muted" key={content.id}>
                          {content.content}
                        </p>
                      ))}
                    </div>

                    {/* Skills Showcase */}
                    <div className="skills-showcase mt-4">
                      <h5 className="title-s mb-3">Skills & Tools</h5>
                      <div className="skills-grid">
                        {this.state.skills.map((skill) => (
                          <div className="skill-card" key={skill.id}>
                            <span className="skill-icon">{skill.icon}</span>
                            <p>{skill.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
