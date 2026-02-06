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
      name: "Elegant Summer Floral Dress",
      price: 49.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      rating: 5,
      reviews: 127
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      price: 64.99,
      image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      rating: 4,
      reviews: 89
    },
    {
      id: 3,
      name: "Urban Streetwear Hoodie",
      price: 39.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      rating: 5,
      reviews: 203
    },
    {
      id: 4,
      name: "Chic Leather Handbag",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      rating: 4,
      reviews: 45
    },
    {
      id: 5,
      name: "Modern Aviator Sunglasses",
      price: 19.99,
      originalPrice: 29.99,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
      rating: 5,
      reviews: 1247
    },
    {
      id: 6,
      name: "Running Sneakers",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
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