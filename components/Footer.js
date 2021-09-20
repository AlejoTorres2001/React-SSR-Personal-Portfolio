import React from "react";
const Footer = ({ isHome }) => {
  const styles = {
    position: "fixed",
    top: "auto",
    bottom: "0",
    width: "100%",
    display: "inline-block",
  };
  return (
    <footer
      className="bg-dark text-light text-center footer"
      style={!isHome ? styles : {}}
    >
      <div className="container p-4">
       
        <div className="social-icons">
     <a href="" className="social-icon linkedin">
         <span className="icon__inner">
             <i className="fab fa-linkedin">

             </i>
         </span>
     </a>
     <a href="" className="social-icon twitter">
         <span className="icon__inner">
             <i className="fab fa-twitter">

             </i>
         </span>
     </a>
     <a href="" className="social-icon github">
         <span className="icon__inner">
             <i className="fab fa-github">

             </i>
         </span>
     </a>
     <a href="" className="social-icon gmail">
         <span className="icon__inner">
             <i className="fas fa-envelope">
             </i>
         </span>
     </a>
 </div>
      </div>
      
    </footer>
  );
};

export default Footer;
