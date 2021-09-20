import React from "react";
import Link from 'next/link'
const Projects = ({ project }) => {
  const { name, description, image ,knowMore,bgColor} = project;
  return (
    <div className="col-md-4 p-2">
      <div className="card h-100 component-bg">
        <div className={"overflow"} style={{backgroundColor:bgColor}}>
          
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="imagen" className="card-img-top" />
        </div>
        <div className="card-body">
          <h3>{name}</h3>
          <p>{description}</p>
          <Link href={knowMore}>
          <a  className="btn btn-secondary">Know More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
