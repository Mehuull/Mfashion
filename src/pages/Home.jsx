import React from "react";
import "./Home.css";
import banner1 from "../assets/images/banner-1.jpg";
import banner2 from "../assets/images/banner-2.jpg";
import banner3 from "../assets/images/banner-3.jpg";
import bg from "../assets/images/bk.jpeg";
import topbn from "../assets/images/top-bn.jpeg";
import shoebn from "../assets/images/shoe-bn.jpeg";
import bn3 from "../assets/images/bn-3.png";
import tracking from "../assets/images/tracking.png";
import creditcard from "../assets/images/credit-card.png";
import refund from "../assets/images/refund.png";
import Shop from './Shop.jsx';
import Category from "./Category.jsx";
import Banner from "./Banner";
import { PiStarFourFill } from "react-icons/pi";

const Home = () => {
  return (
    <>
      <Banner />
    
      <div className="flex-container">
        <div className="box">
          <img src={tracking} alt="img1" />
          <div className="content">
            <h3>Free Shipping</h3>
            <p>Free Shipping for order above 2000₹</p>
          </div>
        </div>
        <div className="box">
          <img src={creditcard} alt="img2" />
          <div className="content">
            <h3>Flexible Payment</h3>
            <p>Multiple Secure Payment options</p>
          </div>
        </div>
        <div className="box">
          <img src={refund} alt="img3" />
          <div className="content">
            <h3>Refund</h3>
            <p>money refundable within 1 week</p>
          </div>
        </div>
      </div>





      <div id="grid-cottage">
        <div className="grid-bn-container" id="grid-bn1">
          <div className="bn">
            <img src={bn3} alt="" />
          </div>
          <div className="bn">
            <img src={bn3} alt="" />
          </div>
        </div>
        <div className="grid-bn-container" id="grid-bn2">
          <div className="bn">
            <img src={topbn} alt="" />
          </div>
          <div className="bn">
            <img src={shoebn} alt="" />
          </div>
        </div>
      </div>



      {/* //running text */}
      
<div class="marquee">
  <div class="marquee__inner">
    <p class="marquee__line"> Style Made Effortless <PiStarFourFill /></p>
    <p class="marquee__line"> Elevate your Style Everyday<PiStarFourFill /></p>
    <p class="marquee__line"> Designed for Life. Styled for You<PiStarFourFill /></p>
    <p class="marquee__line"> Style meets Comforts<PiStarFourFill /></p>
  </div>
</div>
      <Category />
      <Shop />
    </>
  );
};

export default Home;
