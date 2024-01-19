import React, { useState } from 'react';

import "./Carousel.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

import brand1 from "../assets/banner-1.jpg";
import brand2 from "../assets/banner-2.jpg";
import brand3 from "../assets/banner-3.jpg";
import brand4 from "../assets/banner-4.jpg";
import brand5 from "../assets/brand-5.png";


const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image URLs
  const [imageUrls, setImageUrls] = useState([
    brand1,
    brand2,
    brand3,
    brand4,
    brand1,
  ]);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? imageUrls.length - 1 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === imageUrls.length - 1 ? 0 : prevSlide + 1));
  };

  const rotateItems = (direction) => {
    const newImageUrls = [...imageUrls];
    if (direction === 'next') {
      const removedItem = newImageUrls.shift();
      newImageUrls.push(removedItem);
    } else if (direction === 'prev') {
      const removedItem = newImageUrls.pop();
      newImageUrls.unshift(removedItem);
    }
    setCurrentSlide(0); // Resetting to the first slide after rotation
    setImageUrls(newImageUrls);
  };

  return (
    <div className="section__container header__container">
      <div className="header__content">
        <div className="container">
          <div className="slide">
            {/* Map over the array of image URLs */}
            {imageUrls.map((imageUrl, index) => (
              <div
                key={index}
                className={`item ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${imageUrl})` }}
              >
                <div className="content">
                  <div className="name">Slide {index}</div>
                  <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                  <button>See More</button>
                </div>
              </div>
            ))}
          </div>

          <div className="button">
            <button className="prev" onClick={() => rotateItems('prev')}>
             <AiOutlineArrowLeft size={15}/>
            </button>
            <button className="next" onClick={() => rotateItems('next')}>
            <AiOutlineArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
