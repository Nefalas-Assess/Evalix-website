import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ApiProvider } from './contexts/ApiContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Downloads from './pages/Downloads';
import Contact from './pages/Contact';
import Presentation from './pages/Presentation';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import MentionLegal from './pages/MentionLegal';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ConditionGeneral from './pages/ConditionGeneral';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <ApiProvider>
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
                  <Route path="/account" element={<Account />} />
                  <Route path="/mentions-legales" element={<MentionLegal />} />
                  <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
                  <Route path="/conditions-generales" element={<ConditionGeneral />} />
                </Routes>
              </Layout>
            </Router>
          </ApiProvider>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
