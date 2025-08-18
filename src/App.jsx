import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Downloads from './pages/Downloads';
import Contact from './pages/Contact';
import Presentation from './pages/Presentation';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/presentation" element={<Presentation />} />
              <Route path="/tarifs" element={<Pricing />} />
              <Route path="/telechargements" element={<Downloads />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Layout>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
