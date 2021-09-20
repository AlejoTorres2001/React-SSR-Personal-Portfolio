import React from "react";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import { projectsExtended } from "../profile";
const Portfolio = () => {
  return (
    <Layout isHome={true}>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">
                  View all of my Projects
                </h1>
              </div>
              {projectsExtended.map((project, id) => (
                <Projects project={project} key={id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
