import React from "react";
import { LuLink2 } from "react-icons/lu";
import TrackVisibility from "react-on-screen";

// Import certificate images
import internshipCert from "../assets/intern-cert.jpg";
import metaBackendCert from "../assets/meta-cert.jpg";
import mernCert from "../assets/fsd-mern-cert.jpg";
import javaNptelCert from "../assets/java-cert.jpg";
import algoNptelCert from "../assets/algo-cert.jpg";


const Certifications = () => {
  const certifications = [
  {
    image: internshipCert,
    title: "Internship Certificate",
    description: "Full Stack Development internship at SmartWeb Technologies.",
    link: "https://drive.google.com/file/d/1ofNaXZTSWBGH4dkEMpolBtebumGaPqPp/view",
  },
  {
    image: metaBackendCert,
    title: "Introduction to Backend",
    description: "Explored web servers, networking, and full-stack fundamentals.",
    link: "https://coursera.org/verify/K3KCTN3YP8WV",
  },
  {
    image: mernCert,
    title: "MERN Stack Course",
    description: "Hands-on training in MongoDB, Express, React, and Node.js.",
    link: "https://drive.google.com/file/d/1KRQxjBEK-4UDiW2n-EQlu9I8n8UMNsyP/view",
  },
  {
    image: javaNptelCert,
    title: "Programming in Java",
    description: "Java fundamentals, OOP concepts, and problem-solving.",
    link: "https://drive.google.com/file/d/1FG33UPBjogopZWR17gxh6PDPX9HIa-BY/view",
  },
  {
    image: algoNptelCert,
    title: "Fundamental Algorithms",
    description: "Core algorithms, complexity analysis, and logic building.",
    link: "https://drive.google.com/file/d/1FCDEITrOV3ZBB5k0ZYvKxmdwSLm7wjd5/view",
  },
];


  return (
    <TrackVisibility partialVisibility>
      {({ isVisible }) => (
        <div className="container" id="certs">
          {/* Section title */}
          <p
            className={`text-secondary ${
              isVisible ? "animate__animated animate__fadeInDown" : ""
            }`}
          >
            CREDENTIALS
          </p>

          <h1
            className={`fw-bold ${
              isVisible ? "animate__animated animate__fadeInLeft" : ""
            }`}
            style={{ color: "aqua" }}
          >
            Certifications.
          </h1>

          <p
            className={`${
              isVisible ? "animate__animated animate__fadeInUp" : ""
            }`}
          >
            Professional certifications that strengthen my technical knowledge
            and real-world development skills.
          </p>

          {/* Certification cards */}
          <div className="container py-4 mb-4">
            <div className="row">
              {certifications.map((cert, index) => (
                <div
                  className="col-12 col-md-6 mb-4 mx-auto"
                  key={index}
                  style={{ width: "100%", maxWidth: "330px" }}
                >
                  <div
                    className={`card project-card ${
                      isVisible ? "animate__animated animate__fadeInLeft" : ""
                    }`}
                  >
                    {/* Certificate image */}
                    <div className="card-img-wrapper">
                      <img
                        src={cert.image}
                        className="card-img-top"
                        alt={cert.title}
                      />
                    </div>

                    {/* Certificate content */}
                    <div className="card-body bg-dark">
                      <h5 className="card-title text-white">{cert.title}</h5>
                      <p className="card-text">{cert.description}</p>

                      {/* View certificate link */}
                      <div className="project-links">
                        <a
                          href={cert.link}
                          className="text-white"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LuLink2 size={19} className="rotated-icon" />
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </TrackVisibility>
  );
};

export default Certifications;
