import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";

import Header from "./component/Header";
import Card from "./component/card";
import Footer from "./component/footer/footer";
import ProductCarousel from "./component/ProductCarousel";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/home" Component={Home}></Route>
        <Route path='/products' Component={ProductCarousel}></Route>
        <Route path='/test' Component={Card}></Route>
     </Routes>
     <Footer />
    </Router>

  );
}

export default App;
