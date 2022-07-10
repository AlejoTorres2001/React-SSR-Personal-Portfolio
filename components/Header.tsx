import React from 'react'
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-parent">
        <div className="header-hamburger">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="svg-inline--fa fa-bars fa-w-14 header-hamburger-bars"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </div>
        <div className="header-logo">
          <span>Alejo Torres</span>
        </div>
        <div className="header-options">
          <div className="header-option header-option-seperator ">
            <span>Home</span>
          </div>
          <div className="header-option header-option-seperator selected-header-option ">
            <span>AboutMe</span>
          </div>
          <div className="header-option header-option-seperator ">
            <span>Resume</span>
          </div>
          <div className="header-option header-option-seperator ">
            <span>Testimonial</span>
          </div>
          <div className="header-option ">
            <span>ContactMe</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
