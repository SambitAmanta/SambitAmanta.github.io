import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello! I am a passionate and driven full stack web developer with experience 
            in building MERN stack applications and proficiency in other web development tools. 
            My interest in web development 
            sparked in 2020 when I started learning coding from freeCodeCamp Youtube channel.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing and developing
            high-quality solutions. I am constantly seeking to learn and grow in this ever-evolving 
            field and look forward to leveraging my technical expertise to the world.
          </p>

          <p className="about-grid-info-text">
          I am persuing a degree in Computer Applications and have completed several projects that showcase 
          my skills in front-end and back-end development. 
          I am excited about the opportunity to contribute to innovative and impactful projects in a dynamic team.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I have been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Socket.io</li>
            <li className="about-grid-info-list-item">Passport.js</li>
            <li className="about-grid-info-list-item">Tailwind CSS</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="https://i.imgur.com/kYJx0OU.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
