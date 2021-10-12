import Header from './Components/Header';
import React, { useState, useMemo } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import { LanguageContext } from './Components/LanguageContext';
import ReactRouter from './Router/router';
import Footer from './Components/Footer';

function App() {
  const [language, setLanguage] = useState('english');
  const [navValues, setNavValues] = useState(0);
  const languageProvider = useMemo(() => ({ language, setLanguage, navValues, setNavValues }), [language, setLanguage, navValues, setNavValues]);

  return (
    <div className="app">
      <LanguageContext.Provider value={languageProvider} >
        <Header />
        <Navigation />
        <ReactRouter />
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;