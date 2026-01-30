import React, { useState, useRef, useEffect } from 'react';
import './CardCarousel.css';

const CardCarousel = () => {
  const carouselRef = useRef(null);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 129.99,
      originalPrice: 179.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      rating: 5,
      reviews: 127
    },
    {
      id: 2,
      name: "Artisan Ceramic Mug",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      rating: 4,
      reviews: 89
    },
    {
      id: 3,
      name: "Vintage Leather Backpack",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      rating: 5,
      reviews: 203
    },
    {
      id: 4,
      name: "Desert Rose Succulent",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      rating: 4,
      reviews: 45
    },
    {
      id: 5,
      name: "Pro Smartphone 128GB",
      price: 699.99,
      originalPrice: 799.99,
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      rating: 5,
      reviews: 1247
    },
    {
      id: 6,
      name: "Vanilla Bean Candle",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1602874801006-7313ba5df42d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      rating: 5,
      reviews: 156
    }
  ];

  const cardWidth = 280 + 24; // card width + gap
  const scrollAmount = cardWidth; // scroll 1 card at a time

  useEffect(() => {
    const updateScrollLimits = () => {
      if (carouselRef.current) {
        const newMaxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        setMaxScroll(newMaxScroll);
      }
    };

    updateScrollLimits();
    window.addEventListener('resize', updateScrollLimits);
    return () => window.removeEventListener('resize', updateScrollLimits);
  }, [products]);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      const newPosition = Math.max(0, currentScrollPosition - scrollAmount);
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setCurrentScrollPosition(newPosition);
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      const newPosition = Math.min(maxScroll, currentScrollPosition + scrollAmount);
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setCurrentScrollPosition(newPosition);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      setCurrentScrollPosition(carouselRef.current.scrollLeft);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'filled' : ''}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="card-carousel-container">
      {/* Header Section */}
      <div className="header">
        <h2 className="title">Popular Categories</h2>
        
        {/* Navigation Arrows */}
        <div className="nav-buttons">
          <button
            onClick={handlePrevClick}
            disabled={currentScrollPosition <= 0}
            className={`nav-arrow ${currentScrollPosition <= 0 ? 'disabled' : ''}`}
          >
            ←
          </button>
          <button
            onClick={handleNextClick}
            disabled={currentScrollPosition >= maxScroll}
            className={`nav-arrow ${currentScrollPosition >= maxScroll ? 'disabled' : ''}`}
          >
            →
          </button>
        </div>
      </div>

      {/* Product Carousel */}
      <div 
        ref={carouselRef}
        onScroll={handleScroll}
        className="carousel-scroll"
      >
        <div className="cards-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {/* Product Image */}
              <div className="card-image">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>
              
              {/* Product Details */}
              <div className="card-content">
                <h3 className="product-name">{product.name}</h3>
                
                {/* Price */}
                <div className="price-section">
                  <span className="current-price">${product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">${product.originalPrice}</span>
                  )}
                </div>
                
                {/* Rating and Reviews */}
                <div className="rating-section">
                  <div className="stars">
                    {renderStars(product.rating)}
                  </div>
                  <span className="reviews">({product.reviews.toLocaleString()} reviews)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;