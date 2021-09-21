import React from "react";
import Link from "next/link";
import {useInView} from 'react-intersection-observer'
import {useAnimation} from "framer-motion"
import {useEffect} from "react";
import { motion } from "framer-motion";
const Projects = ({ project }) => {
  const {ref,inView} = useInView();
  const animation = useAnimation();
  const animationChildren = useAnimation();
  useEffect(() =>
  {
    console.log("Us effect in view=",inView)},[inView])
    if(inView){
      animation.start({
        x:0,
        transition:{
          type:"spring",duration:1,bounce:0.4
        }
      })
      animationChildren.start({
        x:0,
        opacity:1,
        transition:{
          type:"spring",
          duration:1,
          bounce:0.3,
          delay: 0.5,
      }
    })


    }
    if(!inView){
      animation.start({x:'-100vw'})
      animationChildren.start({ x:'-100vw',
        opacity:0})
    }

  const { name, description, image, knowMore, bgColor } = project;
  return (
    <div ref={ref} className="col-md-4 p-2">
      <motion.div className="card h-100 component-bg" animate={animation}>
        <div className={"overflow"} style={{ backgroundColor: bgColor }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="imagen" className="card-img-top" />
        </div>
        <motion.div className="card-body" animate={animationChildren}>
          <h3>{name}</h3>
          <p>{description}</p>
          <Link href={knowMore}>
            <a className="btn btn-secondary">Know More</a>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
