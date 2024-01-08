import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Props from "./component/Props";
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Props />} />
      </Routes>
    
    </Router>

  );
}

export default App;
