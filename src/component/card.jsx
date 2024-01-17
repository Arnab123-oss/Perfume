import React, { useState } from 'react';
import './test.css';

import news1 from '../assets/news-1.jpg';
import news2 from '../assets/news-2.jpg';
import news3 from '../assets/news-3.jpg';

const Card = () => {
  const data = [
    { imgSrc: news1, category: 'FASHION', author: 'JAMES SIMSON', date: 'FEB 2, 2019', title: 'Seasonal Trends', content: 'Discuss the latest fashion trends for the current season and offer tips and ideas on how to incorporate these trends into your wardrobe.' },
    { imgSrc: news2, category: 'TRENDS', author: 'JAMES SIMSON', date: 'APR 15, 2019', title: 'Fashion Tips and Advice', content: 'Provide your readers with practical tips and advice on how to dress for different occasions, body types, or style preferences.' },
    { imgSrc: news3, category: 'STYLE', author: 'JAMES SIMSON', date: 'JUL 22, 2019', title: 'Sustainable Fashion', content: 'Cover the growing trend of eco-conscious fashion and explore the various ways to be sustainable in your fashion choices.' },
    // { imgSrc: news1, category: 'FASHION', author: 'JAMES SIMSON', date: 'FEB 2, 2019', title: 'Seasonal Trends', content: 'Discuss the latest fashion trends for the current season and offer tips and ideas on how to incorporate these trends into your wardrobe.' },
    // { imgSrc: news2, category: 'TRENDS', author: 'JAMES SIMSON', date: 'APR 15, 2019', title: 'Fashion Tips and Advice', content: 'Provide your readers with practical tips and advice on how to dress for different occasions, body types, or style preferences.' },
  
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + data.length) % data.length);
  };

  return (
    <div className="news__grid">
      <button onClick={handlePrev}>Prev</button>
      {data.map((item, index) => (
        <div key={index} className={`news__card ${index === currentCard ? 'active' : ''}`}>
          <img src={item.imgSrc} alt="news" />
          <div className="news__details">
            <p>
              {item.category} <i className="ri-checkbox-blank-circle-fill" />
              <span>{item.author}</span>
              <i className="ri-checkbox-blank-circle-fill" /> {item.date}
            </p>
            <h4>{item.title}</h4>
            <hr />
            <p>{item.content}</p>
            <a href="#">
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      ))}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Card;
