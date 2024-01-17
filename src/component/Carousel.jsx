import React, { useState } from 'react';

import "./Carousel.css";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image URLs
  const [imageUrls, setImageUrls] = useState([
    'https://i.ibb.co/qCkd9jS/img1.jpg',
    'https://i.ibb.co/jrRb11q/img2.jpg',
    'https://i.ibb.co/NSwVv8D/img3.jpg',
    'https://i.ibb.co/Bq4Q0M8/img4.jpg',
    'https://i.ibb.co/jTQfmTq/img5.jpg',
    'https://i.ibb.co/RNkk6L0/img6.jpg',
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
                  <div className="name">Slide {index + 1}</div>
                  <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                  <button>See More</button>
                </div>
              </div>
            ))}
          </div>

          <div className="button">
            <button className="prev" onClick={() => rotateItems('prev')}>
              Left
            </button>
            <button className="next" onClick={() => rotateItems('next')}>
              Right
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
