import React, { useState, useEffect } from 'react';
import './DealOfTheDay.css';
import { motion } from 'framer-motion';

const DealOfTheDay = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 2); // 2 days from now

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="deal-section">
            <div className="deal-container">
                <motion.div
                    className="deal-content"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h4 className="deal-subtitle">Deal of the Day</h4>
                    <h2 className="deal-title">Fashion Carnival</h2>
                    <p className="deal-desc">
                        Up to 70% off on selected summer collections. Grab your favorites before the timer runs out!
                    </p>

                    <div className="timer-container">
                        <div className="timer-box">
                            <span className="timer-value">{String(timeLeft.days).padStart(2, '0')}</span>
                            <span className="timer-label">Days</span>
                        </div>
                        <div className="timer-box">
                            <span className="timer-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                            <span className="timer-label">Hours</span>
                        </div>
                        <div className="timer-box">
                            <span className="timer-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                            <span className="timer-label">Mins</span>
                        </div>
                        <div className="timer-box">
                            <span className="timer-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                            <span className="timer-label">Secs</span>
                        </div>
                    </div>

                    <button className="deal-btn">Shop Now</button>
                </motion.div>

                <motion.div
                    className="deal-image-wrapper"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="discount-badge">
                        <span className="badge-percent">50%</span>
                        <span className="badge-off">OFF</span>
                    </div>
                    <div className="image-backdrop"></div>
                    <img
                        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        alt="Fashion Deal"
                        className="deal-image"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default DealOfTheDay;
