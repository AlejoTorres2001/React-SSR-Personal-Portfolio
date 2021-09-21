import React from "react";
import Link from "next/link";
import {useInView} from 'react-intersection-observer'
import {useAnimation} from "framer-motion"
import {useEffect} from "react";
import { motion } from "framer-motion";

const PostCards = ({ post }) => {
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
  return (
    <div ref={ref} className="col-md-4">
      <motion.div  animate={animation}  className="card component-bg">
        <div   className="overflow">
          <img src={post.image} alt="imagen" className="card-img-top" />
        </div>
        <div className="card-body">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <Link href={`/Post?title=${post.title}`}>
            <button className="btn btn-dark">Read More</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default PostCards;
