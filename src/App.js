import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import CardGrid from "./component/CardGrid";
import Props from "./component/Header";
function App() {
  return (
    <Router>
      <Props />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/home" Component={Home}></Route>
        <Route path='/products' Component={CardGrid}></Route>
    </Routes>
    </Router>

  );
}

export default App;
