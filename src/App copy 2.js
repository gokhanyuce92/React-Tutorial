import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import HookUseParams from './components/HookUseParams';
import Home from './components/navigate/Home';
import About from './components/navigate/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/page/:id?" element={<HookUseParams />} />
      </Routes>
    </Router>
  );
}

export default App;
