import React, { useEffect, useState } from "react";
import "./Props.css";
import brand1 from "../assets/brand-2.png";
import brand2 from "../assets/brand-2.png";
import brand3 from "../assets/brand-3.png";
import brand4 from "../assets/brand-4.png";
import brand5 from "../assets/brand-5.png";
import brand6 from "../assets/brand-6.png";

import male from "../assets/male.png";
import female from "../assets/female.jpg";

import PerfumeCard from "./PerfumeCard";
import work from "../assets/OIG.png";
import daily from "../assets/daily.png";
import premium from "../assets/premium.png";
import sport from "../assets/sport.png";
import Party from "../assets/Party.png";
import vintage from "../assets/vintage.png";

import CardGrid from "./CardGrid";
import Carousel from "./Carousel";

const Home = () => {
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
    <div>
      <header>
      <Carousel />
      </header>
      <section className="section__container destination__container">
        <h2 className="section__title">Your Pronoun?</h2>
        <div className="destination__grid">
          <div className="destination__card">
            <img src={male} alt="destination" />
            <div className="destination__details">
              <p className="destination__subtitle">His</p>
            </div>
          </div>
          <div className="destination__card">
            <img src={female} alt="destination" />
            <div className="destination__details">
              <p className="destination__subtitle">Her</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section__container musthave__container">
        <h2 className="section__title">Your Preference</h2>
        <div className="process__grid">
          <PerfumeCard image={daily} name="Everyday Essentials" />
          <PerfumeCard image={sport} name="Sporty and Active" />
          <PerfumeCard image={vintage} name="Vintage Classic" />
          <PerfumeCard image={Party} name="Party Special" />
          <PerfumeCard image={work} name="Workplace Elegance" />
          <PerfumeCard image={premium} name="Limited Editions" />
        </div>
      </section>
      <section className="news">
        <div className="section__container news__container">
          <h2 className="section__title">Latest Trends</h2>
          <CardGrid />
        </div>
      </section>
      <section className="section__container brands__container">
        <div className="brand__image">
          <img src={brand1} alt="brand" />
        </div>
        <div className="brand__image">
          <img src={brand2} alt="brand" />
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
    </div>
  );
};

export default Home;
