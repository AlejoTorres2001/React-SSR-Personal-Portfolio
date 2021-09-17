// TODO 
//         1) take pictures of each proyect
//         2) fix skill bars
//         3) add Experiences
//         4) fix Github Description
//         5) rethink colors
//         6) add blog Entries 
//         7) design the blog posts
//         8) connect to mongoDB
//         9) read posts from there
 



{
  /* Next */
}
import Link from "next/link";

{
  /* Components */
}
import Layout from "../components/Layout";
import Skill from "../components/Skill";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

{
  /* data */
}
import skills, { experiences, projects } from "../profile";
export default function Home() {
  return (
    <Layout isHome={true}>
      {/* Header Card */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
            <div className="row">
              <div className="col-md-4">
                <img src="/profile_pic.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1>Alejo Torres</h1>
                <h3>FullStack Developer</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae atque ullam perferendis harum, nisi porro voluptate,
                  iste consequuntur enim reprehenderit architecto consectetur
                  cum? Totam ad molestias natus illum illo officia.
                </p>
                <Link href="/hireme">
                  <a className="btn btn-outline-light">Hire Me</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Second Section */}
      <section className="row py-2">
        {/* Skills */}
        <div className="col-md-4 py-2">
          <div className="card bg-light animate__animated animate__fadeInLeft">
            <div className="card-body">
              <h1>Skills</h1>
              {skills.map((skill, id) => (
                <Skill skill={skill} key={id} />
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-8 py-2">
          {/* Experience */}
          <div className="card bg-light animate__animated animate__fadeInRight">
            <div className="card-body">
              <h1>Experience</h1>

              <ul>
                {experiences.map((job, id) => (
                  <Experience job={job} key={id} />
                ))}
              </ul>
              <Link href="/hireme">
                <a className="btn btn-light">Know More</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio*/}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">Porfolio</h1>
              </div>
              {projects.map((project, id) => (
                <Projects project={project} key={id} />
              ))}
            </div>
            {/* Button */}
            <div className="text-center mt-4">
              <Link href="/portfolio">
                <a className="btn btn-outline-light">More Proyects</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
