import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Service from './components/service/Service';
import Projects from './pages/Project/Projects';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <Experience />
              <Service />
              <Portfolio />
              <Contact />
            </>
          }
        />

        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
