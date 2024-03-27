import React, { useState } from "react";
import "../styles/SideBar.css";
import oval1 from "../Images/Oval (1).png";
import oval from "../Images/Oval.png";
import logo from "../Images/Medico.png";
import windowLogo from "../Images/Fill 1.png";
import note from "../Images/Group 6.png";
import biller from "../Images/Group 4.png";
import subscription from "../Images/Path.png";
import { Link } from "react-router-dom";
import health from "../Images/Health.png";
import rocket from "../Images/2625766.png";

const SideBar = ({ showSideBar,toggle }) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <div className={showSideBar ? "sideWrap1" : "sideWrap"}>
        <div className="remove" onClick={toggle}>x</div>

        <div className="logoWrap">
          <img src={oval1} alt="logo" className="img1" />
          <img src={oval} alt="logo" className="img2" />
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="sideLinkWrap">
          <div>
            <div
              className={
                activeLink == "home" ? "flexLinkAndImg" : "flexLinkAndImg1"
              }
              onClick={() => {
                setActiveLink("home");
                if(window.innerWidth <501){
                    toggle()
                }
              }}>
              <img src={windowLogo} alt="fill-img" />

              <Link>Dashboard</Link>
            </div>

            <div
              className={
                activeLink == "claims" ? "flexLinkAndImg" : "flexLinkAndImg1"
              }
              onClick={() => {
                setActiveLink("claims");
                if(window.innerWidth <501){
                    toggle()
                }
              }}>
              <img src={note} alt="fill-img" />

              <Link>Claims</Link>
            </div>

            <div
              className={
                activeLink == "biller" ? "flexLinkAndImg" : "flexLinkAndImg1"
              }
              onClick={() => {
                if(window.innerWidth <501){
                    toggle()
                }
                setActiveLink("biller");
              }}>
              <img src={biller} alt="fill-img" />

              <Link>Biller Queue</Link>
            </div>

            <div
              className={
                activeLink == "subscription"
                  ? "flexLinkAndImg"
                  : "flexLinkAndImg1"
              }
              onClick={() => {
                if(window.innerWidth <501){
                    toggle()
                }
                setActiveLink("subscription");
              }}>
              <img src={subscription} alt="fill-img" />

              <Link>Subscription</Link>
            </div>

            <div
              className={
                activeLink == "health" ? "flexLinkAndImg" : "flexLinkAndImg1"
              }
              onClick={() => {
                if(window.innerWidth <501){
                    toggle()
                }
                setActiveLink("health");
              }}>
              <img src={health} alt="fill-img" />

              <Link>Health</Link>
            </div>
          </div>

          <div className="rocketDiv">
            <img src={rocket} alt="rocket-img" />

            <div>
              <small>want to upgrade?</small>
            </div>

            <button>
              <b>Upgrade Now</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
