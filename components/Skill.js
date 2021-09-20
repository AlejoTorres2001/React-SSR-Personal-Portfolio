import React from "react";

const Skill = ({ skill }) => {
  const { name, percentage } = skill;
  return (
    <div className="py-3">
      <h5>{name}</h5>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${percentage}%`, backgroundColor: "#688F98" }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
