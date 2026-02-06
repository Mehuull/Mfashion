import React, { useState } from 'react';
import './Testimonials.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Fashion Blogger",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        quote: "Mfashion has completely transformed my wardrobe. The quality of the clothes is unmatched, and the delivery is always super fast!",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Designer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        quote: "I love the variety of styles available. Whether I need something formal or casual, I always find exactly what I'm looking for.",
        rating: 4
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Loyal Customer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        quote: "Excellent customer service and easy returns. I highly recommend Mfashion to anyone looking for trendy and affordable clothing.",
        rating: 5
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <section className="testimonials-section">
            <div className="section-container">
                <div className="testimonial-wrapper">
                    <div className="testimonial-image-side">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={testimonials[activeIndex].id}
                                src={testimonials[activeIndex].image}
                                alt={testimonials[activeIndex].name}
                                className="main-author-img"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                            />
                        </AnimatePresence>
                        <div className="deco-circle"></div>
                    </div>

                    <div className="testimonial-content-side">
                        <FaQuoteLeft className="quote-icon-large" />

                        <div className="content-slider">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={testimonials[activeIndex].id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-block"
                                >
                                    <div className="stars">
                                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                    <p className="main-quote">"{testimonials[activeIndex].quote}"</p>
                                    <div className="author-info">
                                        <h4>{testimonials[activeIndex].name}</h4>
                                        <span>{testimonials[activeIndex].role}</span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="slider-controls">
                            <button onClick={prevTestimonial} className="nav-btn"><FaArrowLeft /></button>
                            <div className="dots">
                                {testimonials.map((_, idx) => (
                                    <span
                                        key={idx}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`dot ${idx === activeIndex ? 'active' : ''}`}
                                    ></span>
                                ))}
                            </div>
                            <button onClick={nextTestimonial} className="nav-btn"><FaArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
