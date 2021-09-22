import React from "react";
import Layout from "../components/Layout";
import EmailForm from "../components/EmailForm";
const ContactMe = () => {
  return (
 
    <Layout isHome={true}>
      <EmailForm></EmailForm>
      <div className="container d-flex align-items-center justify-content-center  w-50  my-5">
      <i className="fas fa-envelope-open-text email-icon"></i>
      </div>
    </Layout>
   
  );
};

export default ContactMe;
