import React from "react";
import { IoSearch } from "react-icons/io5";
import Cards from "./Cards";

const Stores = () => {
  return (
    <div className="store-con">
      <div className="sec-one">
        <h1>Stores</h1>
        <p>
          Browse all current stores to find the store you'd like to invest in{" "}
        </p>
        <p>
          All companies are <span>checked and pass due diligence</span>
        </p>
      </div>

      <div className="sec-two">
        <div className="search-sec">
          <div className="search-icon">
            <IoSearch color="#D9D9D9" />
          </div>

          <div className="search-input">
            <input type="text" placeholder="Start Typing To Search" />
          </div>
        </div>

        <div className="border"></div>

        <div className="location">
          <h5>Location:</h5>
          <select>
            <option>All</option>
          </select>
        </div>
      </div>

      <Cards/>
      
    </div>
  );
};

export default Stores;
