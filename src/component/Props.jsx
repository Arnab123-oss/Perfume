import React, { useEffect, useState } from "react";
import "./Props.css";
import brand1 from "../assets/brand-1.png";
import brand2 from "../assets/brand-2.png";
import brand3 from "../assets/brand-3.png";
import brand4 from "../assets/brand-4.png";
import brand5 from "../assets/brand-5.png";
import brand6 from "../assets/brand-6.png";

import news1 from "../assets/news-1.jpg"
import news2 from "../assets/news-2.jpg"
import news3 from "../assets/news-3.jpg"

import trip1 from "../assets/trip-1.jpg"
import trip2 from "../assets/trip-2.jpg"
import trip3 from "../assets/trip-3.jpg"

import destination1 from "../assets/destination-1.jpg"
import destination2 from "../assets/destination-2.jpg"
import destination3 from "../assets/destination-3.jpg"
import destination4 from "../assets/destination-4.jpg"






const Props = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
      {
        header: "Discover & Shop The Trend Ss1",
        saleText: "EXTRA 55% OFF IN SPRING SALE",
        buttonText: "SHOP NOW",
        // Add other properties and images as needed
      },
      {
        header: "Discover & Shop The Trend Ss19",
        saleText: "EXTRA 55% OFF IN SPRING SALE",
        buttonText: "SHOP NOW",
        // Add other properties and images as needed
      },
      {
        header: "Discover & Shop The Trend Ss9",
        saleText: "EXTRA 55% OFF IN SPRING SALE",
        buttonText: "SHOP NOW",
        // Add other properties and images as needed
      },
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, [items.length]);

  return (
    <>
      <nav className="section__container nav__container">
        <a href="#" className="nav__logo">
          The Enough
        </a>
        <ul className="nav__links">
          <li className="link">
            <a href="#">HOME</a>
          </li>
          <li className="link">
            <a href="#">SHOP</a>
          </li>
          {/* <li class="link"><a href="#">PAGES</a></li> */}
          {/* <li class="link"><a href="#">BLOG</a></li> */}
          <li className="link">
            <a href="#">LOOKBOOK</a>
          </li>
        </ul>
        <div className="nav__icons">
          <span>
            <i className="ri-shield-user-line" />
          </span>
          <span>
            <i className="ri-search-line" />
          </span>
          <span>
            <i className="ri-shopping-bag-2-line" />
          </span>
        </div>
      </nav>

      <header>
        <div className="section__container header__container">
          <div className="carousel">
            <div
              className="carousel-inner"
              style={{
                width: `${items.length * 100}%`,
                transform: `translateX(-${(currentIndex * 100) / items.length}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {items.map((item, index) => (
                <div className="carousel-item" key={index}>
                  <div className="header__content">
                    <p>{item.saleText}</p>
                    <h1>{item.header}</h1>
                    <button className="btn">{item.buttonText}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      <section className="section__container destination__container">
    <h2 className="section__title">On Sale</h2>
    <div className="destination__grid">
      <div className="destination__card">
        <img src={destination1} alt="destination" />
        <div className="destination__details">
          <p className="destination__title">Banff</p>
          <p className="destination__subtitle">Canada</p>
        </div>
      </div>
      <div className="destination__card">
        <img src={destination2} alt="destination" />
        <div className="destination__details">
          <p className="destination__title">Machu Picchu</p>
          <p className="destination__subtitle">Peru</p>
        </div>
      </div>
      <div className="destination__card">
        <img src={destination3} alt="destination" />
        <div className="destination__details">
          <p className="destination__title">Lauterbrunnen</p>
          <p className="destination__subtitle">Switzerland</p>
        </div>
      </div>
      <div className="destination__card">
        <img src={destination4} alt="destination" />
        <div className="destination__details">
          <p className="destination__title">Zhangjiajie</p>
          <p className="destination__subtitle">China</p>
        </div>
      </div>
    </div>
  </section>
  <section className="section__container musthave__container">
    <h2 className="section__title">Must Have</h2>
    <div className="musthave__nav">
      <a href="#">ALL</a>
      <a href="#">MAN</a>
      <a href="#">WOMEN</a>
      <a href="#">BAG</a>
      <a href="#">SHOES</a>
    </div>
    <div className="trip__grid">
      <div className="trip__card">
        <img src={trip1} alt="trip" />
        <div className="trip__details">
          <p>Wasserwerk Frelberg, Germany</p>
          <div className="rating">
            <i className="ri-star-fill" /> 4.2
          </div>
          <div className="booking__price">
            <div className="price">
              <span>From</span> $300
            </div>
            <button className="book__now">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="trip__card">
        <img src={trip2} alt="trip" />
        <div className="trip__details">
          <p>Wasserwerk Frelberg, Germany</p>
          <div className="rating">
            <i className="ri-star-fill" /> 4.2
          </div>
          <div className="booking__price">
            <div className="price">
              <span>From</span> $300
            </div>
            <button className="book__now">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="trip__card">
        <img src={trip1} alt="trip" />
        <div className="trip__details">
          <p>Wasserwerk Frelberg, Germany</p>
          <div className="rating">
            <i className="ri-star-fill" /> 4.2
          </div>
          <div className="booking__price">
            <div className="price">
              <span>From</span> $300
            </div>
            <button className="book__now">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="trip__card">
        <img src={trip3} alt="trip" />
        <div className="trip__details">
          <p>Wasserwerk Frelberg, Germany</p>
          <div className="rating">
            <i className="ri-star-fill" /> 4.2
          </div>
          <div className="booking__price">
            <div className="price">
              <span>From</span> $300
            </div>
            <button className="book__now">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="trip__card">
        <img src={trip2} alt="trip" />
        <div className="trip__details">
          <p>Patagonia, Argentina and Chile</p>
          <div className="rating">
            <i className="ri-star-fill" /> 4.5
          </div>
          <div className="booking__price">
            <div className="price">
              <span>From</span> $450
            </div>
            <button className="book__now">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="trip__card">
        <img src={trip3} alt="trip" />
        <div className="trip__details">
          <p>The Dolomites, Italy</p>
          <div className="rating">
            <i className="ri-star-fill" /> 4.7
          </div>
          <div className="booking__price">
            <div className="price">
              <span>From</span> $400
            </div>
            <button className="book__now">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="news">
    <div className="section__container news__container">
      <h2 className="section__title">Latest Trends</h2>
      <div className="news__grid">
        <div className="news__card">
          <img src={news1} alt="news" />
          <div className="news__details">
            <p>
              FASHION <i className="ri-checkbox-blank-circle-fill" />
              <span>JAMES SIMSON</span>
              <i className="ri-checkbox-blank-circle-fill" /> FEB 2, 2019
            </p>
            <h4>Seasonal Trends</h4>
            <hr />
            <p>
              Discuss the latest fashion trends for the current season and offer
              tips and ideas on how to incorporate these trends into your
              wardrobe.
            </p>
            <a href="#">
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
        <div className="news__card">
          <img src={news2} alt="news" />
          <div className="news__details">
            <p>
              TRENDS <i className="ri-checkbox-blank-circle-fill" />
              <span>JAMES SIMSON</span>
              <i className="ri-checkbox-blank-circle-fill" /> APR 15, 2019
            </p>
            <h4>Fashion Tips and Advice</h4>
            <hr />
            <p>
              Provide your readers with practical tips and advice on how to
              dress for different occasions, body types, or style preferences.
            </p>
            <a href="#">
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
        <div className="news__card">
          <img src={news3} alt="news" />
          <div className="news__details">
            <p>
              STYLE <i className="ri-checkbox-blank-circle-fill" />
              <span>JAMES SIMSON</span>
              <i className="ri-checkbox-blank-circle-fill" /> JUL 22, 2019
            </p>
            <h4>Sustainable Fashion</h4>
            <hr />
            <p>
              Cover the growing trend of eco-conscious fashion and explore the
              various ways to be sustainable in your fashion choices.
            </p>
            <a href="#">
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section__container brands__container">
    <div className="brand__image">
      <img src={brand1} alt="brand" />
    </div>
    <div className="brand__image">
      <img src={brand2}alt="brand" />
    </div>
    <div className="brand__image">
      <img src={brand3} alt="brand" />
    </div>
    <div className="brand__image">
      <img src={brand4} alt="brand" />
    </div>
    <div className="brand__image">
      <img src={brand5} alt="brand" />
    </div>
    <div className="brand__image">
      <img src={brand6} alt="brand" />
    </div>
  </section>
  <hr />

    </>
  );
};

export default Props;
