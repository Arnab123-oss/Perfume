import React from "react";
import "./footer.css"

import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
<div class="custom-shape-divider-top-1700642254">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
<div>
  
</div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://twitter.com" target="blank">
          <AiFillTwitterCircle />
        </a>
        <a href="https://youtube.com" target="blank">
          <AiFillYoutube />
        </a>
        <a href="https://github.com" target="blank">
          <AiFillFacebook />
        </a>
        <a href="https://instagram.com" target="blank">
          <AiFillInstagram />
        </a>
      </aside>
    </footer>
  );
};
export default Footer;