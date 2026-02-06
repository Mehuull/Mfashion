import React from 'react';
import './InstagramFeed.css';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const instaImages = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
];

const InstagramFeed = () => {
    return (
        <section className="insta-section">
            {/* SVG Gradient Definition */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <radialGradient id="insta-gradient" r="150%" cx="30%" cy="107%">
                        <stop stopColor="#fdf497" offset="0" />
                        <stop stopColor="#fdf497" offset="0.05" />
                        <stop stopColor="#fd5949" offset="0.45" />
                        <stop stopColor="#d6249f" offset="0.6" />
                        <stop stopColor="#285AEB" offset="0.9" />
                    </radialGradient>
                </defs>
            </svg>

            <div className="section-container">
                <h2 className="section-title">@Follow Us On Instagram</h2>
                <p className="insta-subtitle">Tag us to be featured #MfashionStyle</p>

                <div className="insta-grid">
                    {instaImages.map((src, index) => (
                        <motion.div
                            key={index}
                            className="insta-item"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <img src={src} alt="Instagram Post" />
                            <div className="insta-overlay">
                                <div className="icon-wrapper">
                                    <FaInstagram className="insta-icon white-icon" />
                                    <FaInstagram className="insta-icon gradient-icon" style={{ fill: "url(#insta-gradient)" }} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
