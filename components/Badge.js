/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
const Badge = ({ title, date, verify, img }) => {
  const childrenVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
    },
  };

  return (
    <motion.blockquote
      variants={childrenVariant}
      className="badgr-badge component-bg text-center  border border-secondary w-100 my-1 "
      style={{ fontFamily: "Helvetica, Roboto, Calibri, sans-serif" }}
    >
      <a href="https://api.badgr.io/public/assertions/9LCsS9AVSiaZOtCu-yNf9w">
        <img width="120px" height="120px" src={img} />
      </a>
      <p className="badgr-badge-name badge-text fs-4">
        {title} <br />
      </p>
      <p className="badgr-badge-date badge-date">
        <strong className="badge-strong">Awarded:</strong>
        {date}
      </p>
      <p className="badgr-badge-recipient badge-recipient">
        <strong className="badge-recipient-strong">Awarded To:</strong>
        <span style={{ display: "block" }}> Alejo Torres</span>
      </p>
      <p style={{ margin: "16px 0", padding: "0;" }}>
        <a
          className="badgr-badge-verify badge-verify btn btn-secondary"
          href={verify}
        >
          VERIFY
        </a>
      </p>
      <script
        async="async"
        src="https://badgr.com/assets/widgets.bundle.js"
      ></script>
    </motion.blockquote>
  );
};

export default Badge;
