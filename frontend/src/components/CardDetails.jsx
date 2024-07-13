import React from "react";
import card_detail_img_1 from "../assets/images/card-details-sec-1-img.png";
import card_detail_img_2 from "../assets/images/card-details-sec-2-img.png";
import { FaMapMarkerAlt } from "react-icons/fa";
const CardDetails = () => {
  return (
    <div className="card-details-container">
      <div className="section-1-up">
        <h1>Java Times Caffe #1 Saltillo 400</h1>
        <p>
          Redefining the way Cafes are being run with community driven
          innovation
        </p>
      </div>

      <div className="section-1-down">
        <div className="section-1-left">
          <img src={card_detail_img_1} alt="" />
        </div>

        <div className="section-1-right">
          <div className="investment-card">
            <div className="progress-bar">
              <div className="progress" style={{ width: "37.5%" }}></div>
            </div>
            <div className="investment-details">
              <h3>US$ 300,010 Raised</h3>
              <p>Maximum Amount Of US$ 800,000</p>
              <div className="stats">
                <div>
                  <h4>64</h4>
                  <p>Investors</p>
                </div>
                <div>
                  <h4>5</h4>
                  <p>Days to go</p>
                </div>
              </div>
              <div className="address">
                <FaMapMarkerAlt />
                <p>1234 Sunset Boulevard Los Angeles, CA 90026</p>
              </div>
              <button className="invest-button">Invest In Business</button>
              <p className="minimum-investment">$100 Minimum Investment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-2-up">
        <h1>Pitch</h1>
        <div className="border"></div>
      </div>

      <div className="section-2-down">
        <div className="sec-2-down-left">
          <h1>The Collectibles Market Is Booming</h1>

          <p>
            Users are increasingly spending on everyday carry and collectibles,
            but traditional storage options for these accessories have been
            either prohibitively expensive or low quality.
          </p>
<br />
          <p>
            Before Holme & Hadfield, collectors often stored their valuable
            items in hidden drawers or boring traditional cases that didn't do
            them justice.
          </p>
<br />
          <p>Just like classic cars are kept in pristine condition, so are knives,
             watches, and coins that are often worth thousands of dollars.</p>
        </div>

        <div className="sec-2-down-right">
            <img src={card_detail_img_2} alt="" />
        </div>
      </div>

      <div className='btn-show-more'>
                <button >View More </button>
            </div>
    </div>
  );
};

export default CardDetails;
