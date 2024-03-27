import React from "react";
import { Link } from "react-router-dom";
import dribble from "../Images/dribbble-icon 1.png"
import instagram from "../Images/instagram-glyph-1 1.png"
import twitter from "../Images/Vector (11).png"
import linkdn from "../Images/linkedin-icon-1 1.png"
import facebook from "../Images/Vector (10).png"
import behance from "../Images/behance 1.png"







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



<div>
    
<div className="enquires">
        <h6>ANY ENQUIRES? VISIT US ON </h6>
        <h6>
          <Link>www.nickeflox.com</Link>
        </h6>
      </div>

      <div className="flexFooterImg">
    <img src={dribble} alt="dribble-img" />
    <img src={instagram} alt="instagram-img" />
    <img src={twitter} alt="twitter-img" />
    <img src={linkdn} alt="lindkn-img" />
    <img src={facebook} alt="facebook-img" />
    <img src={behance} alt="behance-img" />






      </div>
</div>
      </footer>

      
    </div>
  );
};

export default Footer;
