import React from 'react'
import ReactDOM from "react-dom/client";
import CardCarousel from "../components/CardCarousel/CardCarousel.jsx";

const items = [
  {
    title: "Card 1",
    category: "Nature",
    content: "This is the full content for Card 1.",
    src: "https://source.unsplash.com/random/400x300?nature,1",
  },
  {
    title: "Card 2",
    category: "City",
    content: "Details about Card 2.",
    src: "https://source.unsplash.com/random/400x300?city,2",
  },
  {
    title: "Card 3",
    category: "Beach",
    content: "Details about Card 3.",
    src: "https://source.unsplash.com/random/400x300?beach,3",
  },
];
const Shop = () => {
  return (
    <div className='flex-container'>
      <CardCarousel/>
    </div>
  )
}

export default Shop
