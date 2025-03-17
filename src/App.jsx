'use client';

import './App.css';
import LandingPage from './pages/home/LandingPage';
import { Routes, Route } from 'react-router-dom';
import EventsPage from './pages/events/EventsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='event' element={<EventsPage />} />
    </Routes>
  );
}

export default App;
