import React from 'react'
import mens from "../assets/images/Mens-Ctg.png";
import womens from "../assets/images/Women-ctg.png";
import kids from "../assets/images/KIDS-ctg.png";
const Category = () => {
  return (

    <div className="flex-container">
      <div className="ctg-box">
        <img src={mens} alt="img1" />
      </div>
      <div className="ctg-box">
        <img src={womens} alt="img2" />

      </div>
      <div className="ctg-box">
        <img src={kids} alt="img3" />
      </div>
    </div>
  )
}

export default Category
