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
import { motion } from "framer-motion";
import Newsletter from "../components/Newsletter/Newsletter";
import DealOfTheDay from "../components/DealOfTheDay/DealOfTheDay";
import Testimonials from "../components/Testimonials/Testimonials";
import BlogSection from "../components/BlogSection/BlogSection";
import { PiStarFourFill } from "react-icons/pi";

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Banner />

      <motion.div
        className="flex-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div className="box" variants={fadeInUp}>
          <img src={tracking} alt="Fast Shipping" />
          <div className="content">
            <h3>Free Shipping</h3>
            <p>Free Shipping for order above 2000₹</p>
          </div>
        </motion.div>
        <motion.div className="box" variants={fadeInUp}>
          <img src={creditcard} alt="Secure Payment" />
          <div className="content">
            <h3>Flexible Payment</h3>
            <p>Multiple Secure Payment options</p>
          </div>
        </motion.div>
        <motion.div className="box" variants={fadeInUp}>
          <img src={refund} alt="Easy Turn" />
          <div className="content">
            <h3>Refund</h3>
            <p>money refundable within 1 week</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        id="grid-cottage"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="grid-bn-container" id="grid-bn1">
          <div className="bn">
            <img src={bn3} alt="Fashion Item" />
          </div>
          <div className="bn">
            <img src={bn3} alt="Fashion Item" />
          </div>
        </div>
        <div className="grid-bn-container" id="grid-bn2">
          <div className="bn">
            <img src={topbn} alt="Top Fashion" />
          </div>
          <div className="bn">
            <img src={shoebn} alt="Shoes" />
          </div>
        </div>
      </motion.div>

      {/* //running text */}
      <div className="marquee">
        <div className="marquee__inner">
          <p className="marquee__line"> Style Made Effortless <PiStarFourFill /></p>
          <p className="marquee__line"> Elevate your Style Everyday<PiStarFourFill /></p>
          <p className="marquee__line"> Designed for Life. Styled for You<PiStarFourFill /></p>
          <p className="marquee__line"> Style meets Comforts<PiStarFourFill /></p>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Category />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Shop />
      </motion.div>

      <DealOfTheDay />

      <Testimonials />

      <BlogSection />

      <Newsletter />
    </>
  );
};

export default Home;
