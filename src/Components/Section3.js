import React from "react";
import "../styles/Section3.css";
import rafiki from "../Images/rafiki.png";
import cuate from "../Images/cuate.png";
import amicon from "../Images/amico.png";
import { useState } from "react";
import { useRef } from "react";
// import { useState } from "react";
const Section3 = () => {
  // const  [SeeMore,setSeeMore]=useState

  const [data, setData] = useState("seeless");
  const divRef = useRef();

  return (
    <div>
      <marquee behavior="" direction="left">
        Quick Notice !! toheeb na Betting go kill you e be lke say igbo dey your
        head...if you use that 1500 to buy garri for people dem go pray for u
      </marquee>
      <div className="sec3-div">
        <h2>Why do people get involved with Cryptocurrencies?</h2>

        <button onClick={() => {}} className="see">
          See More
        </button>

        {/* 3 THREE DIVS STARTS */}

        <div className="three-divs">
          <div className="emd-div">
            <img src={rafiki} alt="" />
            <h2>Easy Mode Of Payment</h2>
            <p>
              People can now easily send and receive money from anywhere in the
              world to purchase goods and pay for services.
            </p>
          </div>

          <div className="ff-div">
            <img src={cuate} alt="" />

            <h2>Financial Freedom</h2>
            <p>
              Just like the internet no single entity controls the Crypto
              network which provides users transparency and privacy, which puts
              you in absolute control of your money.
            </p>
          </div>

          <div className="investment-div">
            <img src={amicon} alt="" />

            <h2>Investment </h2>
            <p>
              The constant demand as made Cryptocurrecies a Digital Gold used
              for alternative store of wealth on long term investments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
