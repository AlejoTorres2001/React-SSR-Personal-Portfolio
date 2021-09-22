import React from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";
const Footer = ({ isHome }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animationChildren = useAnimation();
  const homeStyles = {
    position: "fixed",
    top: "auto",
    bottom: "0",
    width: "100%",
    display: "inline-block",
  };
  useEffect(() => {}, [inView]);
  if (inView) {
    animation.start({
      x: 0,
      transition: {
        type: "spring",
        duratin: 1,
        bounce: 0.3,
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    });
    animationChildren.start({y: "0",
    opacity: 1,});
  }
  if (!inView) {
    animation.start({ x: "-100vw" });
    animationChildren.start( {
      y: "100vh",
      opacity: 0,
    });
  }



  return (
    <footer
      className="bg-dark text-light text-center footer "
      style={!isHome ? homeStyles : {}}
    >
      <div className="container p-4">
        <h4   ref={ref} className="text-center fs-4">Follow me on my social medias</h4>
        <motion.div
          animate={animation}
        className="social-icons">
          <motion.a
            animate={animationChildren}
            href="https://www.linkedin.com/in/alejo-torres-919b9921b/"
            className="social-icon linkedin"
          >
            <span className="icon__inner">
              <i className="fab fa-linkedin"></i>
            </span>
          </motion.a>
          <motion.a href="" className="social-icon twitter"
          animation={animationChildren}>
            <span className="icon__inner">
              <i className="fab fa-twitter"></i>
            </span>
          </motion.a>
          <motion.a
          animation={animationChildren}
            href="https://github.com/AlejoTorres2001"
            className="social-icon github"
          >
            <span className="icon__inner">
              <i className="fab fa-github"></i>
            </span>
          </motion.a>
          <motion.a
          animation={animationChildren}
            href="mailto:torres.alejo2001@gmail.com"
            className="social-icon gmail"
          >
            <span className="icon__inner">
              <i className="fas fa-envelope"></i>
            </span>
          </motion.a>
        </motion.div>
        <ul className="list-unstyled">
          <li className="mt-1">
            <h1 className="text-center fs-5"> &copy; Alejo Torres</h1>
          </li>
          <li>
            <h2 className="text-center fs-6 ">2020-2021</h2>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
