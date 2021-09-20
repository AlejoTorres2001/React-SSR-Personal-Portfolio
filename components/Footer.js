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
        <h4 className="text-center fs-4">Follow me on my social medias</h4>
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
          <ul className="list-unstyled">
            <li className="mt-1">
            <h1 className="text-center fs-5"> &copy; Alejo Torres</h1>
            </li>
            <li>
        <h2 className="text-center fs-6 ">2020-2021</h2>
            </li>
          </ul>
      </div>
    </footer>
  );
};

export default Footer;
