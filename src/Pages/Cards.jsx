import React from "react";
import "../styles/Cards.css";
import green from "../Images/Group 13.png";
import red from "../Images/Group 15.png";
import yellow from "../Images/Group 14.png";

import cart from "../Images/Bitmap (8).png";
import range from "../Images/Bitmap (5).png";
import note from "../Images/Bitmap (7).png";
import profile from "../Images/Bitmap (6).png";
import cart1 from '../Images/Group 11.png'
import line from '../Images/Rectangle 266.png'
import Chart1 from "./Chart1";
import lady1 from '../Images/Bitmap Copy 3.png'
import lady2 from '../Images/Bitwoman.png'
import four from '../Images/Group 57.png'
import man1 from '../Images/Bitmap Copy 2.png'

const Cards = () => {
  return (
    <div>
      <div className="cardsWrap">
        <div className="flexCards padding">
          <div className="card">
            <div>
              <small className="grey">Product Sold </small>
              <h3>25.1k</h3>
              <div className="flexRange">
                <div>
                  <img src={green} alt="range-img" />
                </div>
                <small className="green">+15%</small>
              </div>
            </div>

            <div>
              <div>
                <img src={cart} alt="cart-img" className="test" />
              </div>

              <div>
                <small className="purple">View Report </small>
              </div>
            </div>
          </div>

          <div className="card">
            <div>
              <small className="grey">Total Profit </small>
              <h3>$2,435k</h3>
              <div className="flexRange">
                <div>
                  <img src={red} alt="range-img" />
                </div>
                <small className="reds">-3.5%</small>
              </div>
            </div>

            <div>
              <div>
                <img src={range} alt="cart-img" className="test" />
              </div>

              <div>
                <small className="purple">View Report </small>
              </div>
            </div>
          </div>

          <div className="card">
            <div>
              <small className="grey">Total No. of Claim </small>
              <h3>3.5M</h3>
              <div className="flexRange">
                <div>
                  <img src={green} alt="range-img" />
                </div>
                <small className="green">+15%</small>
              </div>
            </div>

            <div>
              <div>
                <img src={note} alt="cart-img" className="test" />
              </div>

              <div>
                <small className="purple">View Report </small>
              </div>
            </div>
          </div>

          <div className="card">
            <div>
              <small className="grey">New Customer </small>
              <h3>43.5k</h3>
              <div className="flexRange">
                <div>
                  <img src={green} alt="range-img" />
                </div>
                <small className="green">+10%</small>
              </div>
            </div>

            <div>
              <div>
                <img src={profile} alt="cart-img" className="test" />
              </div>

              <div>
                <small className="purple">View Report </small>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="chartWrap padding">

<Chart1 />



        <div className="teamsWrap">
       <div className="gap">
        <div>
        <small>Sales team target </small>
       <h3>82%</h3>
       <small>Achieved</small>
        </div>

        <div>
          <small>Cleared Qeue</small>
          <h3>1.4k</h3>
          <div className="bills"><small>No of Bills </small> <img src={yellow} alt="icon" /> <small>+15%</small></div>

        </div>

       </div>

       <div className="gap">
        <div className="profiles">
       
      <img src={lady1} className="lady1" alt="lady-img" />
      <img src={man1} className="man1" alt="man-img" />
      <img src={lady2} className="lady2" alt="lady-img" />

      <img src={four} className="four" alt="four-img" />
      <img src={cart1}  className ="check" alt="cart-img" />




        </div>

        <div>
       
       <img className="line" src={line} alt="line-img" />

        </div>

       </div>




        </div>
      </div>
    </div>
  );
};

export default Cards;
