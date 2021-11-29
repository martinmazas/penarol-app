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
  const [anualTab, setAnualTab] = React.useState([]);

  useEffect(() => {
    axios.get(`https://penarol-app.herokuapp.com/api/clausura21/clausura`)
    // axios.get(`http://localhost:3000/api/clausura21/clausura`)
      .then(res => setClausuraTab(res.data))
      .catch(err => console.log(err));

    axios.get(`https://penarol-app.herokuapp.com/api/apertura21/apertura`)
    // axios.get(`http://localhost:3000/api/apertura21/apertura`)
      .then(res => setAperturaTab(res.data))
      .catch(err => console.log(err));

  }, []);

  useEffect(() => {
    const anual = [];
    for (let i = 0; i < aperturaTab.length; i++) {
      const pt = (Number(aperturaTab[i].pg) + Number(clausuraTab[i].pg)) * 3 + (Number(aperturaTab[i].pe) + Number(clausuraTab[i].pe));
      const gf = Number(aperturaTab[i].gf) + Number(clausuraTab[i].gf);
      const gc = Number(aperturaTab[i].gc) + Number(clausuraTab[i].gc);
      anual.push({
        id: i, team: aperturaTab[i].team, pj: Number(aperturaTab[i].pj) + Number(clausuraTab[i].pj), pg: Number(aperturaTab[i].pg) + Number(clausuraTab[i].pg),
        pe: Number(aperturaTab[i].pe) + Number(clausuraTab[i].pe), pp: Number(aperturaTab[i].pp) + Number(clausuraTab[i].pp),
        gf: gf, gc: gc, df: gf - gc, pt: pt
      })
    }
    setAnualTab(anual);
  }, [aperturaTab, clausuraTab]);

  return (
    <div className="app">
      <LanguageContext.Provider value={languageProvider} >
        <Header />
        <Navigation />
        {(clausuraTab.length > 0 && aperturaTab.length > 0 && anualTab.length > 0) ? <ReactRouter clausuraTab={clausuraTab} aperturaTab={aperturaTab} anualTab={anualTab} /> : null}
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;