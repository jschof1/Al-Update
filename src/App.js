import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Animation from '/pages/animation/Animation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Animation" element={<Animation />} />
      </Routes>
    </Router>
  );
};

export default App;
