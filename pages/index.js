/* eslint-disable @next/next/no-img-element */
// TODO
//         1) take pictures of each proyect //DONE
//         2) Work in /porfolio add more projects //DONE
//         3) fix skill bars //DONE
//         4) add Experiences //DONE
//         5) fix Github Description //DONE
//         6) rethink colors //DONE
//         7) fix footer in blogs //DONE
//         8) add blog Entries
//         9) design the blog posts
//         10) connect to mongoDB
//         11) read posts from there
//         12) Mailing System //DONE
//         13) Downloadable files //DONE
//         14) use animation framework

{
  /* Next */
}
import Link from "next/link";
import { motion } from "framer-motion";
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
  const buttonTap={
    scale:1.1
  }
  const cardsVariants={
    hidden:{
      y:'-100vw'
    },
    visible:{
      y:0,
      transition:{
        delay: 0.5,
        when:"beforeChildren",
        staggerChildren:0.2
      }
    }
  
  }
  const cardElementsVariant={
    hidden:{
      x:-10,
      opacity:0
    },
    visible:{
      x:"0",
      opacity:1,
      
    }
  }
  const skillsVariants={
    hidden:{
      x:'-100vw'
    },
    visible:{
      x:0,
      transition:{
        delay: 0.5,
        when:"beforeChildren",
        staggerChildren:0.2
      }
    }
  }
  const experienceVariants={
    hidden:{
      x:'100vw'
    },
    visible:{
      x:0,
      transition:{
        delay: 0.5,
        when:"beforeChildren",
        staggerChildren:0.2
      }
    },
    buttonTap:{
      scale:1.1
    }
  }

  return (
    <Layout isHome={true}>
      {/* Header Card */}
      <header className="row">
        <motion.div
          variants={cardsVariants}
          initial="hidden"
          animate="visible"
          className="col-md-12"
        >
          <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
            <div className="row">
              <div className="col-md-4">
                <motion.img variants={cardElementsVariant} src="/profile_pic.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1>Alejo Torres</h1>
                <h3>FullStack Developer</h3>
                <p>
                  Hi there! <br />
                  my Name is Alejo,I was born and raised in Argentina.
                  <br />
                  {
                    "Currently I'm 3 years into my Bachelor of Science in Computer Engineering"
                  }
                  <br />
                  {
                    "I'm constantly perfecting my programming skills learning and researching about new technologies"
                  }
                </p>
                <Link href="/ContactMe">
                  <motion.a
                    whileTap={buttonTap}
                    className="btn btn-outline-light fs-5 mx-2 my-1 w-30"
                    id="contactMe"
                  >
                    Contact
                  </motion.a>
                </Link>

                <motion.a
                  className="btn btn-outline-light fs-5 mx-2 my-1 w-30"
                  download
                  whileTap={buttonTap}
                  href="AlejoTorres.pdf"
                  id="contactMe"
                >
                  CV
                </motion.a>
                <motion.a
                  className="btn btn-outline-light fs-5 mx-2 my-1 w-30"
                  download
                  whileTap={buttonTap}
                  href="Abstract_Alejo_Torres.pdf"
                  id="contactMe"
                >
                  Abstract
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Second Section */}
      <section
        
      className="row py-2">
        {/* Skills */}
        <div className="col-md-4 py-2">
          <motion.div 
           variants={skillsVariants}
           initial="hidden" 
           animate="visible"
          className="card bg-light animate__animated animate__fadeInLeft component-bg">
            <div className="card-body">
              <h1>Skills</h1>
              {skills.map((skill, id) => (
                <Skill skill={skill} key={id} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
        variants={experienceVariants}
          initial="hidden"
          animate="visible"
        className="col-md-8 py-2">
          {/* Experience */}
          <div className="card bg-light animate__animated animate__fadeInRight component-bg">
            <div
            className="card-body">
              <h1>Experience</h1>

              <ul>
                {experiences.map((job, id) => (
                  <Experience job={job} key={id} />
                ))}
              </ul>
              <Link href="/hireme">
                <motion.a className="btn btn-secondary" variants={experienceVariants} whileTap="buttonTap">Know More</motion.a>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Portfolio*/}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">Projects Portfolio</h1>
              </div>
              {projects.map((project, id) => (
                <Projects project={project} key={id} />
              ))}
            </div>
            {/* Button */}
            <div className="text-center mt-4">
              <Link href="/Portfolio">
                <motion.a whileTap={buttonTap} className="btn btn-outline-light">More Projects</motion.a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
