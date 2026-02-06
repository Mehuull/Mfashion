import React from 'react';
import './Brands.css';
import { motion } from 'framer-motion';
import { SiNike, SiAdidas, SiPuma, SiZara } from 'react-icons/si';

const brands = [
    { id: 1, name: "Nike", icon: <SiNike /> },
    { id: 2, name: "Adidas", icon: <SiAdidas /> },
    { id: 3, name: "Puma", icon: <SiPuma /> },
    { id: 4, name: "Zara", icon: <SiZara /> },
];

const Brands = () => {
    return (
        <section className="brands-section">
            <div className="brands-container">
                <h3 className="brands-title">Top Brands We Love</h3>
                <div className="brands-marquee">
                    <div className="brands-track">
                        {/* Duplicate the logos multiple times to create infinite scrolling effect without gaps */}
                        {[...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands].map((brand, index) => (
                            <div key={`${brand.id}-${index}`} className="brand-item">
                                <span className="brand-icon">{brand.icon}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
