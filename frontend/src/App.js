import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';

function App() {
    return (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<MainLayout />} />
            </Routes>
          </Router>
        </div>
    );
}

export default App;