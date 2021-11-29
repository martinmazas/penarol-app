import Header from './Components/Header';
import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import { LanguageContext } from './Components/LanguageContext';
import ReactRouter from './Router/router';
import Footer from './Components/Footer';
import axios from 'axios';

function App() {
  const [language, setLanguage] = useState('english');
  const [navValues, setNavValues] = useState(0);
  const languageProvider = useMemo(() => ({ language, setLanguage, navValues, setNavValues }), [language, setLanguage, navValues, setNavValues]);
  const [clausuraTab, setClausuraTab] = React.useState([]);
  const [aperturaTab, setAperturaTab] = React.useState([]);

  useEffect(() => {
    axios.get(`https://penarol-app.herokuapp.com/api/clausura21/clausura`)
      // axios.get(`http://localhost:3000/api/clausura21/clausura`)
      .then(res => setClausuraTab(res.data))
      .catch(err => console.log(err));

    axios.get(`https://penarol-app.herokuapp.com/api/apertura21/apertura`)
      // axios.get(`http://localhost:3000/api/apertura21/apertura`)
      .then(res => setAperturaTab(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="app">
      <LanguageContext.Provider value={languageProvider} >
        <Header />
        <Navigation />
        {(clausuraTab.length > 0 && aperturaTab.length > 0) ? <ReactRouter clausuraTab={clausuraTab} aperturaTab={aperturaTab} /> : null}
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;