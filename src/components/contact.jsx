import React from "react";
import imageOverlay from "../img/earth.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: `url(${imageOverlay})` }}
      >
        {/* <div className="overlay-mf"></div> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    {/* Contact Form */}
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send a Message</h5>
                      </div>
                      <form
                        action="https://formspree.io/f/xldwazrq" // update your form ID
                        method="POST"
                        className="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Your Name"
                              required
                            />
                          </div>
                          <div className="col-md-12 mb-3">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Your Email"
                              required
                            />
                          </div>
                          <div className="col-md-12 mb-3">
                            <input
                              type="text"
                              name="subject"
                              className="form-control"
                              placeholder="Subject"
                              required
                            />
                          </div>
                          <div className="col-md-12 mb-3">
                            <textarea
                              name="message"
                              className="form-control"
                              rows="5"
                              placeholder="Your Message"
                              required
                            ></textarea>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rounded"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    {/* Get in Touch */}
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Whether you want to collaborate on a project, discuss
                          opportunities, or just say hi, I'd love to connect
                          with you.
                        </p>
                        <ul className="list-ico">
                          <li>
                            <FaEnvelope /> kavin13102005@gmail.com
                          </li>
                          <li>
                            📞 7826022406
                          </li>
                          <li>
                            📍 Coimbatore, Tamil Nadu, India
                          </li>
                        </ul>
                      </div>

                      {/* Social Links */}
                      <div className="socials mt-3">
                        <ul>
                          <li>
                            <a
                              href="https://github.com/kavinraj710"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <FaGithub />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/kavinrajsk"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <FaLinkedin />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="mailto:kavinraj.22cs@kct.ac.in"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <FaEnvelope />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer>
          <div className="container text-center py-3">
            <p className="mb-0 text-white">
              © {new Date().getFullYear()} Prince | All Rights Reserved
            </p>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
