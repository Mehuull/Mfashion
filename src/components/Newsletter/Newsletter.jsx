import React from 'react';
import './Newsletter.css';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelopeOpenText } from 'react-icons/fa';

const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="newsletter-wrapper">
                {/* Floating Decorative Elements */}
                <div className="circle-deco circle-1"></div>
                <div className="circle-deco circle-2"></div>

                <motion.div
                    className="newsletter-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="newsletter-image-side">
                        <img
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Fashion Model"
                            className="newsletter-img"
                        />
                        <div className="img-overlay"></div>
                    </div>

                    <div className="newsletter-content-side">
                        <div className="icon-badge">
                            <FaEnvelopeOpenText />
                        </div>
                        <h2 className="newsletter-title">Unlock Your <span className="highlight">Style</span></h2>
                        <p className="newsletter-desc">
                            Join the <strong>Mfashion Insider</strong> club. Get exclusive access to dropping trends, secret sales, and
                            <span className="discount-text"> 15% OFF</span> your first order.
                        </p>

                        <form className="newsletter-form">
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="newsletter-input"
                                    placeholder=" "
                                    required
                                />
                                <label className="input-label">Your Email Address</label>
                            </div>
                            <button type="submit" className="subscribe-btn">
                                <span>Subscribe</span>
                                <FaPaperPlane className="btn-icon" />
                            </button>
                        </form>
                        <p className="privacy-note">No spam, just fashion. Unsubscribe anytime.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
