import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
       <div>
       <h2>
          <span className="span1">Like</span> and <span className="span1">Follow</span>
        </h2>
        <h2>for regular</h2>
        <h2>updates</h2>
       </div>




        <div className="enquires">
        <h6>ANY ENQUIRES? VISIT US ON </h6>
        <h6>
          <Link>www.nickeflox.com</Link>
        </h6>
      </div>
      </footer>

      
    </div>
  );
};

export default Footer;
