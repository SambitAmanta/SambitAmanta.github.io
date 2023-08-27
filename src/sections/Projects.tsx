import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "https://i.imgur.com/Bg12x0Y.jpg",
      projectName: "Netflix App",
      projectLink: "https://netlify.com",
      projectDescription:
        "A full-stack web application that replicates the core features of Netflix, including user authentication, movie/show browsing, genre-based categorization, and personalized content management.",
      projectTech: [
        "React",
        "Node.js",
        "Firebase",
        "MongoDB",
        "Express",
        "Redux Toolkit",
      ],
      projectExternalLinks: {
        github: "https://github.com/SambitAmanta/netflix-clone",
        externalLink: "https://netflix-clone-sambit.netlify.app",
      },
    },
    {
      image: "https://i.imgur.com/zS3f1j9.jpg",
      projectName: "Portfolio",
      projectLink: "https://netlify.com",
      projectDescription:
        "Developed a responsive and interactive portfolio website using React, Next.js, and Framer Motion to showcase my work and skills. Utilized Framer Motion library to implement smooth and engaging animations, enhancing user experience and visual appeal.",
      projectTech: [
        "React",
        "Nextjs",
        "SCSS",
        "Framer Motion",
        "Typescript",
      ],
      projectExternalLinks: {
        github: "https://github.com/SambitAmanta/portfolio",
        externalLink: "https://sambitamanta.me",
      },
    },
    {
      image: "https://i.imgur.com/ODIHbGM.jpg",
      projectName: "Collab Text Editor",
      projectLink: "https://netlify.com",
      projectDescription:
        "Developed a collaborative document editing web application inspired by Google Docs allowing multiple users to edit the same document simultaneously with instant updates using Socket.io ",
      projectTech: [
        "React",
        "Socket.io",
        "Node.js",
        "MongoDB",
        "Material UI",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        target="_blank"
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        target="_blank"
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
