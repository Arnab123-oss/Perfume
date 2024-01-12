import { Routes, Route } from "react-router-dom";

import React from 'react'
import Home from "./component/Home";
import CardGrid from "./component/CardGrid";

const PrimaryRoute = () => {
  return (
    <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/home" Component={Home}></Route>
        <Route path='/products' Component={CardGrid}></Route>
    </Routes>
  )
}

export default PrimaryRoute;