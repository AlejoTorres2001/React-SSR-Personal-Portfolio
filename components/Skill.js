import React from "react";
import { motion } from "framer-motion";
const Skill = ({ skill }) => {
  const { name, percentage } = skill;
  const skillVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
    },
  };
  return (
    <motion.div variants={skillVariant} className="py-3">
      <h5>{name}</h5>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${percentage}%`, backgroundColor: "#688F98" }}
        ></div>
      </div>
    </motion.div>
  );
};

export default Skill;
