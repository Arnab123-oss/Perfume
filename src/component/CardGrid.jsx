import React from 'react'

import "./Props.css";

import news1 from "../assets/news-1.jpg"
import news2 from "../assets/news-2.jpg"
import news3 from "../assets/news-3.jpg"

const CardGrid = () => {
  return (
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
  )
}

export default CardGrid