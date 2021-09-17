import React from "react";

const Projects = ({ project }) => {
  const { name, description, image } = project;
  return (
    <div className="col-md-4 p-2">
      <div className="card h-100">
        <div className="overflow">
          <img src={image} alt="imagen" className="card-img-top" />
        </div>
        <div className="card-body">
          <h3>{name}</h3>
          <p>{description}</p>
          <a href="#!">Know More</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
