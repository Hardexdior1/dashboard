import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
import DanielCampbel from "../Images/Profile icon.png";
import nicolasPatrick from "../Images/Bitmap (3).png";
import { Chart } from "react-chartjs-2";
import Chart1 from "../Pages/Chart1";
import search from "../Images/search icon.png";
import notification from "../Images/notification (1).png";

const Nav = ({handleSearchChange,toggle}) => {
  const [accountImg, setAccountImg] = useState(DanielCampbel);
  const change = (e) => {
    if (e.target.value == "DanielleCampbel") {
      setAccountImg(DanielCampbel);
    }

    if (e.target.value == "nicolasPatrick") {
      setAccountImg(nicolasPatrick);
    }

    console.log(e.target.value);
  };

  return (
    <div className="boardWrap">
      <header className="header">
        <div className="menu" onClick={toggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Link>
          <h1>Overview</h1>
        </Link>

        <div className="flexNavItems">
          <div className="iconAndInput">
            <div className="input">
              <input type="search" placeholder="Search" onChange={handleSearchChange} />
            </div>
            <img src={search} alt="search-icon" />
          </div>

          <div>
            <div className="notificationWrap" onClick={(()=>{
              alert('No notifications')
            })}>
              <img src={notification} alt="notification-icon" />

              <b className="red"></b>
            </div>
          </div>

          <div className="flexAccountImgANdOption">
            <img className="accountImg" src={accountImg} alt="account-img" />
            <select name="list" id="" onChange={change} className="select">
              <option value="DanielleCampbel">Daniel Campbell</option>
              <option value="nicolasPatrick"> Nicolas Patrick</option>
            </select>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
