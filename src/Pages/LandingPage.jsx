import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import data from "../RepreSentaTivesData/Data";

import Representatives from "../Pages/Representatives";
import Cards from "./Cards";
import Chart1 from "./Chart1";
import SideBar from "./SideBar";
import Footer from "../Components/Footer";
const LandingPage = () => {
  const [representativeData, setRepresentativeData] = useState(data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const remove = (item) => {
    const newItems = representativeData.filter(
      (represent) => represent.id !== item.id
    );
    setRepresentativeData(newItems);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);

    let matchingItems = [];
    if (e.target.value.trim() !== "") {
      matchingItems = data.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    } else {
      matchingItems = data;
    }

    if (matchingItems.length === 0 && e.target.value !== "") {
      setResult(`No results found for "${e.target.value}"`);
    } else {
      setResult("");
    }

    setRepresentativeData(matchingItems);
  };

  const [showSideBar, setShowSideBar] = useState(false);
  const toggle = () => {
    setShowSideBar(!showSideBar);
  };

  return (
  <div> <div className="flexSideAndSection">
      <SideBar showSideBar={showSideBar} toggle={toggle} />
      <div className="all">
        <Nav handleSearchChange={handleSearchChange} toggle={toggle} />
        <h5 className="top">Top Sales Representatives </h5>
        <div>
          {representativeData.map((item) => {
            return (
              <div>
                <Representatives
                  result={result}
                  key={item.id}
                  {...item}
                  remove={() => {
                    remove(item);
                  }}
                />
              </div>
            );
          })}

          <center style={{ color: "red" }}>
            <small>{result} </small>
          </center>

          {representativeData.length < 1 ? (
            <center>
              <button
                className="restore"
                onClick={() => {
                  setRepresentativeData(data);
                  setResult("");
                  setSearchTerm("");
                }}>
                Restore Representatives
              </button>
            </center>
          ) : (
            ""
          )}
        </div>

        <Cards />
      </div>
    </div>


    <Footer />
    </div> 
  );
};

export default LandingPage;
