import React from "react";
import Slider from "react-slick";
import {
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiTerraform,
  SiGrafana,
  SiMongodb,
  SiCplusplus,
  SiBlazor,
  SiJenkins,
  SiReact,
  SiUnity,
  SiKubernetes,
  SiDjango,
} from "react-icons/si";

import { TbBrandSupabase } from "react-icons/tb";
import { MdOutlineScience } from "react-icons/md";
import { ReactComponent as PlaywrightIcon } from "../img/playwright.svg";
import { ReactComponent as RaygunIcon } from "../img/raygun.svg";
import myImage from "../img/Myimage.jpg";
import { ReactComponent as CSharpIcon } from "../img/C#.svg";
import { ReactComponent as CIcon } from "../img/C.svg";
import { ReactComponent as AWSIcon } from "../img/aws.svg";
import { ReactComponent as BlenderIcon } from "../img/blender-3d.svg";
import { ReactComponent as GitIcon } from "../img/git.svg";
import { ReactComponent as GithubIcon } from "../img/github.svg";
import { ReactComponent as NetIcon } from "../img/.net-framework.svg";
import { ReactComponent as PromethusIcon } from "../img/prometheus.svg";
import "./About.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class About extends React.Component {
  constructor() {
    super();
    this.sliderRef = React.createRef();
    this.state = {
      skills: [
        { name: "C", icon: <CIcon style={{ width: 70, height: 70 }} />, bg: "linear-gradient(135deg,#e0f7fa,#00599C)" },
        { name: "C++", icon: <SiCplusplus color="#004482" size={70} />, bg: "linear-gradient(135deg,#fff,#004482)" },
       { name: "C#", icon: <CSharpIcon style={{ width: 70, height: 70 }} />, bg: "linear-gradient(135deg,#e8f5e9,#239120)" },
        { name: "Python", icon: <FaPython color="#3776AB" size={70} />, bg: "linear-gradient(135deg,#ffe873,#3776ab)" },
        { name: "AWS", icon: <AWSIcon style={{ width: 70, height: 70 }} />, bg: "linear-gradient(135deg,#232f3e,#ff9900)" },
{ 
  name: "Git", 
  icon: <GitIcon style={{ width: 70, height: 70, color: "#f05032" }} />, 
  bg: "linear-gradient(135deg, #333333, #f16242)" 
},

        { name: "GitHub", icon: <GithubIcon style={{ width: 70, height: 70 }} />, bg: "linear-gradient(135deg,#232F3E,#4078c0)" },
        { name: "Jenkins", icon: <SiJenkins color="#d24939" size={70} />, bg: "linear-gradient(135deg,#000,#d24939)" },
        { name: "Terraform", icon: <SiTerraform color="#623CE4" size={70} />, bg: "linear-gradient(135deg,#000,#623ce4)" },
        { name: "Docker", icon: <FaDocker color="#2496ED" size={70} />, bg: "linear-gradient(135deg,#0db7ed,#fff)" },
        { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" size={70} />, bg: "linear-gradient(135deg,#172b4d,#326CE5)" },
        { name: "Grafana", icon: <SiGrafana color="#F46800" size={70} />, bg: "linear-gradient(135deg,#1a1a1a,#f46800)" },
        { name: "Prometheus", icon: <PromethusIcon style={{ width: 70, height: 70 }} />, bg: "linear-gradient(135deg,#1a1a1a,#e6522c)" },
        { name: "Raygun", icon: <RaygunIcon style={{ width: 70, height: 70 }} />, bg: "linear-gradient(135deg,#1e1e1e,#00c7b7)" },
        { name: "Django", icon: <SiDjango color="#092E20" size={70} />, bg: "linear-gradient(135deg,#fff,#092E20)" },
        { name: ".NET Framework", icon: <NetIcon style={{ width: 70, height: 70 }} />, bg: "linear-gradient(135deg,#ede7f6,#512bd4)" },
        { name: "Blazor", icon: <SiBlazor color="#512BD4" size={70} />, bg: "linear-gradient(135deg,#ede7f6,#512bd4)" },
        { name: "MudBlazor", icon: <SiBlazor color="#6a1b9a" size={70} />, bg: "linear-gradient(135deg,#f3e5f5,#6a1b9a)" },
        { name: "React.js", icon: <SiReact color="#61DAFB" size={70} />, bg: "linear-gradient(135deg,#20232a,#61dafb)" },
        { name: "Streamlit", icon: <MdOutlineScience color="#FF4B4B" size={70} />, bg: "linear-gradient(135deg,#fff,#ff4b4b)" },
        { name: "Supabase", icon: <TbBrandSupabase color="#3ecf8e" size={70} />, bg: "linear-gradient(135deg,#000,#3ecf8e)" },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" size={70} />, bg: "linear-gradient(135deg,#fff,#47a248)" },
        { name: "Unity Engine", icon: <SiUnity color="#000" size={70} />, bg: "linear-gradient(135deg,#fff,#000)" },
        { name: "Blender", icon: <BlenderIcon style={{ width: 70, height: 70 }} />, bg: "linear-gradient(135deg,#000,#e87d0d)" },
        {name: "Playwright",icon:<PlaywrightIcon style={{ width: 70, height: 70 }} />, bg: "linear-gradient(135deg,#000,#2ead33)"}

      ],
      flipping: false
    };
  }

  handleFlipStart = () => {
    this.setState({ flipping: true }, () => {
      this.sliderRef.current.slickPause();
    });
  };

  handleFlipEnd = () => {
    this.setState({ flipping: false }, () => {
      this.sliderRef.current.slickPlay();
    });
  };

  render() {
    const settings = {
      infinite: true,
      autoplay: false,       // toggle autoplay here
      autoplaySpeed: 2000,   // optional
      speed: 600,
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: false,
      pauseOnHover: true,
      draggable: true,
      swipeToSlide: true,
      touchThreshold: 10,
      responsive: [
        { breakpoint: 1400, settings: { slidesToShow: 6 } },
        { breakpoint: 1200, settings: { slidesToShow: 5 } },
        { breakpoint: 992, settings: { slidesToShow: 4 } },
        { breakpoint: 768, settings: { slidesToShow: 3 } },
        { breakpoint: 576, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
      ],
    };

    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container-fluid px-5">
          {/* Top Row: Profile + About */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-4 col-md-5 d-flex justify-content-center">
              <img
                src={myImage}
                alt="Profile"
                className="img-fluid rounded-circle shadow-lg"
                style={{ width: "400px", height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="about-me">
                <div className="title-box-2 mb-3">
                  <h3 className="title-left" style={{ fontSize: "2.2rem" }}>About Me</h3>
                </div>
                <p className="lead text-muted" style={{ fontSize: "1.3rem", lineHeight: "2.1" }}>
                  I’m <strong>Kavinraj S.K</strong>, a Computer Science undergraduate at <em>Kumaraguru College of Technology</em>, passionate about <strong>Cloud, DevOps, and Full Stack Development</strong>. 
                  Beyond technical expertise, I am <strong>curious, disciplined, and proactive</strong>, always eager to explore new technologies and tackle challenging problems. 
                  I thrive in collaborative environments, am highly adaptable, and continuously strive for self-improvement. 
                  Peers describe me as <strong>innovative, detail-oriented, and dependable</strong>, with a natural drive to find creative solutions and contribute meaningfully to every project I engage with.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Slider */}
          <div className="row">
            <div className="col-12">
              <center><h5 className="title-s mb-3" style={{ fontSize: "1.6rem" }}>Skills & Tools</h5></center>
              <Slider ref={this.sliderRef} {...settings} className="skills-slider mb-4">
                {this.state.skills.map((skill, idx) => (
                  <div key={idx} className="skill-slide d-flex justify-content-center">
                    <div
                      className="skill-flip d-flex align-items-center justify-content-center"
                      style={{
                        background: skill.bg,
                        width: "130px",
                        height: "130px",
                        fontSize: "1.5rem",
                        borderRadius: "15px",
                      }}
                      onMouseEnter={this.handleFlipStart}
                      onMouseLeave={this.handleFlipEnd}
                    >
                      <div className="skill-front">{skill.icon}</div>
                      <div className="skill-back" style={{ fontSize: "1.35rem" }}>
                        {skill.name}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
