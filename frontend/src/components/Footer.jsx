import React from "react";
import footerLogo from "../assets/images/footer-logo.png";
import twitterLogo from "../assets/images/twitter.png";
import basketBall from "../assets/images/basketball.png";
import instagramLogo from "../assets/images/instagram.png";
import behanceNetworkLogo from "../assets/images/behance-network.png";
const Footer = () => {
  return (
    <footer>

        <div className="footer-container">
        
      <div className="sec-1">
        <img src={footerLogo} alt="" />
        <p>
          2593 Timbercrest Road, Chisona, Alaska <br />
          Badalus, United state
        </p>
        <p>(+91)7-723-4608</p>
        <p>Athena@demo.com</p>
        <div className="social-links">
          <img src={twitterLogo} alt="" />
          <img src={basketBall} alt="" />
          <img src={instagramLogo} alt="" />
          <img src={behanceNetworkLogo} alt="" />
        </div>
      </div>

      <div className="sec-2">
        <h6>Help & Information</h6>
        <div className="border"></div>
        <ul>
          <li>Pagination</li>
          <li>Terms & Condition</li>
          <li>Contact</li>
          <li>Accecories</li>
          <li>Term of Use</li>
          <li>Pagination</li>
        </ul>
      </div>

      <div className="sec-2">
        <h6>About Us</h6>
        <div className="border"></div>
        <ul>
          <li>Help Center</li>
          <li>Address Store</li>
          <li>Privacy Policy</li>
          <li>Receivers & Amplifiers</li>
          <li>Gramic</li>
          <li>Pagination</li>
        </ul>
      </div>

      <div className="sec-2">
      <h6>Categories</h6>
      <div className="border"></div>
        <ul>
          <li>Martar</li>
          <li>Bakeware</li>
          <li>Kitchen Ware</li>
          <li>Candle Holders</li>
          <li>Lighting & Vases</li>
        </ul>
      </div>


      </div>

      <hr />
      <div className="copyright-sec">
        <p><b>@ Copyright 2024 | Store</b> By Minamjaved.<b> Powered by Minamjaved</b></p>
      </div>
    </footer>
  );
};

export default Footer;
