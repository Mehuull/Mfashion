import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo1.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <header>
      {/* Header-top */}
      <div className="header-top">
        <div className="ht-container">
          <div className="left">
            <span>Free Shipping Sitewide on Every Order, Don't Miss Out!!</span>
          </div>
          <div className="right">
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Orders Tracking</a>
          </div>
        </div>
      </div>

      {/* Header Main */}
      <div className="header-main">
        <div className="container">
          <a href="#" className="header-logo">
            <div className="logo-content">
              <img src={logo} alt="Store Logo" />
            </div>
          </a>

          <div className="header-search-container">
            <input
              type="search"
              name="search"
              className="search-field"
              placeholder="Enter your product name..."
            />
            <button className="search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>

          <div className="header-user-actions">
            <button className="action-btn">
              <ion-icon name="person-outline"></ion-icon>
            </button>

            <button className="action-btn">
              <ion-icon name="heart-outline"></ion-icon>
              <span className="count">0</span>
            </button>

            <button className="action-btn">
              <ion-icon name="bag-handle-outline"></ion-icon>
              <span className="count">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <a href="#" className="menu-title">
                Home
              </a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Categories
              </a>

              <div className="dropdown-panel">


                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Men's</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Formal</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Casual</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Sports</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Jacket</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Sunglasses</a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Women's</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Formal</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Casual</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Perfume</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Cosmetics</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Bags</a>
                  </li>
                </ul>


              </div>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Men's
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Shirt</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Shorts & Jeans</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Safety Shoes</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Wallet</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Women's
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Dress & Frock</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Earrings</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Necklace</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Makeup Kit</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Jewelry
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Earrings</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Couple Rings</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Necklace</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Bracelets</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Perfume
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Clothes Perfume</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Deodorant</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Flower Fragrance</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Air Freshener</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Blog
              </a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Hot Offers
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="mobile-bottom-navigation">
        <button className="action-btn" onClick={toggleMobileMenu}>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <button className="action-btn">
          <ion-icon name="bag-handle-outline"></ion-icon>
          <span className="count">0</span>
        </button>

        <button className="action-btn">
          <ion-icon name="home-outline"></ion-icon>
        </button>

        <button className="action-btn">
          <ion-icon name="heart-outline"></ion-icon>
          <span className="count">0</span>
        </button>

        <button className="action-btn" onClick={toggleMobileMenu}>
          <ion-icon name="grid-outline"></ion-icon>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`mobile-navigation-menu has-scrollbar ${mobileMenuOpen ? "active" : ""
          }`}
      >
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>
          <button className="menu-close-btn" onClick={toggleMobileMenu}>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <a href="#" className="menu-title">
              Home
            </a>
          </li>

          <li className="menu-category">
            <button
              className={`accordion-menu ${activeAccordion === 0 ? "active" : ""
                }`}
              onClick={() => toggleAccordion(0)}
            >
              <p className="menu-title">Men's</p>
              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon
                  name="remove-outline"
                  className="remove-icon"
                ></ion-icon>
              </div>
            </button>

            <ul
              className={`submenu-category-list ${activeAccordion === 0 ? "active" : ""
                }`}
            >
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Shirt
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Shorts & Jeans
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Safety Shoes
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Wallet
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button
              className={`accordion-menu ${activeAccordion === 1 ? "active" : ""
                }`}
              onClick={() => toggleAccordion(1)}
            >
              <p className="menu-title">Women's</p>
              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon
                  name="remove-outline"
                  className="remove-icon"
                ></ion-icon>
              </div>
            </button>

            <ul
              className={`submenu-category-list ${activeAccordion === 1 ? "active" : ""
                }`}
            >
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Dress & Frock
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Earrings
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Necklace
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Makeup Kit
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button
              className={`accordion-menu ${activeAccordion === 2 ? "active" : ""
                }`}
              onClick={() => toggleAccordion(2)}
            >
              <p className="menu-title">Jewelry</p>
              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon
                  name="remove-outline"
                  className="remove-icon"
                ></ion-icon>
              </div>
            </button>

            <ul
              className={`submenu-category-list ${activeAccordion === 2 ? "active" : ""
                }`}
            >
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Earrings
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Couple Rings
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Necklace
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Bracelets
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button
              className={`accordion-menu ${activeAccordion === 3 ? "active" : ""
                }`}
              onClick={() => toggleAccordion(3)}
            >
              <p className="menu-title">Perfume</p>
              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon
                  name="remove-outline"
                  className="remove-icon"
                ></ion-icon>
              </div>
            </button>

            <ul
              className={`submenu-category-list ${activeAccordion === 3 ? "active" : ""
                }`}
            >
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Clothes Perfume
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Deodorant
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Flower Fragrance
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Air Freshener
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <a href="#" className="menu-title">
              Blog
            </a>
          </li>

          <li className="menu-category">
            <a href="#" className="menu-title">
              Hot Offers
            </a>
          </li>
        </ul>

        <div className="menu-bottom">
          <div className="menu-social-container">
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div className="overlay" onClick={toggleMobileMenu}></div>
      )}
    </header>
  );
};

export default Navbar;
