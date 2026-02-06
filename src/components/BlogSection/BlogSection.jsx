import React from 'react';
import './BlogSection.css';
import { motion } from 'framer-motion';

const blogPosts = [
    {
        id: 1,
        title: "The Ultimate Guide to Summer Fashion",
        excerpt: "Discover the hottest trends for this summer season. From breezy dresses to stylish swimwear, we have got you covered.",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        date: "May 15, 2025",
        author: "Jane Doe"
    },
    {
        id: 2,
        title: "How to Accessorize Like a Pro",
        excerpt: "Learn the secrets of accessorizing to elevate any outfit. Tips on jewelry, scarves, and bags.",
        image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        date: "June 02, 2025",
        author: "John Smith"
    },
    {
        id: 3,
        title: "Sustainable Fashion: Why It Matters",
        excerpt: "Explore the importance of sustainable fashion and how you can make more eco-friendly clothing choices.",
        image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        date: "June 20, 2025",
        author: "Alice Johnson"
    }
];

const BlogSection = () => {
    return (
        <section className="blog-section">
            <div className="section-container">
                <h2 className="section-title">Latest From Our Blog</h2>

                <div className="blog-grid">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            className="blog-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="blog-image-wrapper">
                                <img src={post.image} alt={post.title} className="blog-image" />
                                <div className="blog-date">{post.date}</div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">By {post.author}</div>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <a href="#" className="read-more">Read More →</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
