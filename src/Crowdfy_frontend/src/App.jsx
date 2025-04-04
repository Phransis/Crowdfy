import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Campaigns from './pages/Campaigns';
import Explore from './pages/Explore';
import About from './pages/About';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Layout from './components/Layout';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
