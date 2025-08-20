import React from "react";
import "../styles/Core.css";
import "../styles/Landing.css";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <motion.div
      id="Landing"
      className="card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="card-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.div
          id="titleName"
          className="card-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Bhavya Lamba
        </motion.div>

        <motion.div
          id="summary"
          className="card-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span>
            <strong>Software Developer</strong> and recent graduate from the
            <em> University of Waterloo</em>, with a passion for learning
            and solving complex challenges.
          </span>
        </motion.div>
        <motion.div
          className="card-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="/resume.pdf"
            download
            className="p-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
          <motion.a
            href="https://github.com/bhavya-l"
            target="_blank"
            rel="noopener noreferrer"
            className="s-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Github
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/bhavyalamba"
            target="_blank"
            rel="noopener noreferrer"
            className="s-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Linkedin
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
