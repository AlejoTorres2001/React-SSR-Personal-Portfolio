import React from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
const EmailForm = () => {
  const cardsVariants = {
    hidden: {
      y: "-100vw",
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        duratin: 1,
        bounce: 0.3,
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const cardElementsVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <motion.form
      variants={cardsVariants}
      initial="hidden"
      animate="visible"
      className="container-form my-2 mb-5 "
      onSubmit={sendEmail}
    >
      <div className="contact-box">
        <div className="left-form"></div>
        <div className="right-form">
          <motion.h2 variants={cardElementsVariant} className="header-form">
            Contact Me
          </motion.h2>
          <motion.input
            variants={cardElementsVariant}
            type="text"
            className="field"
            name="name"
            placeholder="Name"
          />
          <motion.input
            variants={cardElementsVariant}
            type="text"
            className="field"
            name="email"
            placeholder="Email"
          />
          <motion.input
            variants={cardElementsVariant}
            type="text"
            className="field"
            name="subject"
            placeholder="Subject"
          />
          <motion.textarea
            variants={cardElementsVariant}
            placeholder="Message"
            name="message"
            className="field text-area-form"
          ></motion.textarea>
          <motion.input
            variants={cardElementsVariant}
            type="submit"
            value="Send"
            className="btn-form"
          />
        </div>
      </div>
    </motion.form>
  );
};

export default EmailForm;
