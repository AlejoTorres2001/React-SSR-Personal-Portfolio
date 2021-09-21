import React from "react";
import { motion } from "framer-motion";
const Experience = ({ job }) => {
  const { name, from, to, where, description, bps } = job;
  const experienceVariant = {
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
    <motion.li variants={experienceVariant}>
      <h3 className="my-2">
        {name}
        <span className="fs-5">{where}</span>
      </h3>

      <h5>
        {from}-{to}
      </h5>
      <p className=" my-2 mt-auto">{description}</p>
      <ul>
        {bps.map((bp, id) => (
          <li key={id} className="my-1 fs-6">
            {bp}
          </li>
        ))}
      </ul>
    </motion.li>
  );
};

export default Experience;
