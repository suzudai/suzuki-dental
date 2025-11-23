import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import NewsPage from './pages/News';
import AccessPage from './pages/Access';
import AccessComponent from './components/Access';
import SeaDecorations from './components/SeaDecorations';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import ClinicHours from './components/ClinicHours';
import NewsSection from './components/News';
import ServicesSection from './components/Services';
import GeneralDentistry from './pages/GeneralDentistry';
import PediatricDentistry from './pages/PediatricDentistry';
import OralSurgery from './pages/OralSurgery';
import PreventiveDentistry from './pages/PreventiveDentistry';
import HomeVisits from './pages/HomeVisits';
import Dentures from './pages/Dentures';
import NewsDetail from './pages/NewsDetail';
import './App.css';



function App() {
  return (
    <Router basename="/suzuki-dental">
      <ScrollToTop />
      <div className="app-container">
        <SeaDecorations />
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <NewsSection />
              <Philosophy />
              <ServicesSection />
              <ClinicHours />
              <AccessComponent />
            </main>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/general" element={<GeneralDentistry />} />
          <Route path="/services/pediatric" element={<PediatricDentistry />} />
          <Route path="/services/oral-surgery" element={<OralSurgery />} />
          <Route path="/services/preventive" element={<PreventiveDentistry />} />
          <Route path="/services/home-visits" element={<HomeVisits />} />
          <Route path="/services/dentures" element={<Dentures />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/access" element={<AccessPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
