import React, { useContext, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';

const styles = {
    text: {
        marginLeft: '24%',
        padding: '5% 0',
    }
}

export default function Championships() {
    const { language, setNavValues } = useContext(LanguageContext);

    useEffect(() => setNavValues(3));

    return (
        <div>
            <div style={styles.text}>
                <h1 style={{ color: 'white' }}>{language === 'english' ? "International titles" : "Titulos internacionales"}</h1>
                <ul className="international-cups">
                    <li>
                        <b>{language === 'english' ? "Libertadores cup(5):" : "Copa Libertadores(5):"}</b>
                        <a href='https://en.wikipedia.org/wiki/1960_Copa_Libertadores'>1960</a>,
                        <a href='https://en.wikipedia.org/wiki/1961_Copa_Libertadores'>1961</a>,
                        <a href='https://en.wikipedia.org/wiki/1966_Copa_Libertadores'>1966</a>,
                        <a href='https://en.wikipedia.org/wiki/1982_Copa_Libertadores'>1982</a>,
                        <a href='https://en.wikipedia.org/wiki/1987_Copa_Libertadores'>1987</a>
                    </li>
                    <li>
                        <b>{language === 'english' ? "Intercontinental cup(3):" : "Copa Intercontinental(3):"}</b>
                        <a href='https://en.wikipedia.org/wiki/1961_Intercontinental_Cup'>1961</a>,
                        <a href='https://en.wikipedia.org/wiki/1966_Intercontinental_Cup'>1966</a>,
                        <a href='https://en.wikipedia.org/wiki/1982_Intercontinental_Cup'>1982</a>
                    </li>
                    <li>
                        <b>{language === 'english' ? "Intercontinental Champions Supercup(1):" : "Supercopa Campeones del mundo(1):"}</b>
                        <a href='http://www.padreydecano.com/cms/campanas-historicas/super-copa-de-campeones-intercontinentales-1985/'>1985</a>,
                    </li>
                    <li>
                        <b>{language === 'english' ? "America Champions Supercup(1):" : "Supercopa de Campeones de América(1):"}</b>
                        <a href='http://www.padreydecano.com/cms/campanas-historicas/supercopa-de-campeones-intercontinentales/'>1969</a>,
                    </li>
                </ul>
                <h1 style={{ color: "white" }}>{language === 'english' ? "National titles" : "Titulos nacionales"}</h1>
                <ul className="national-cups">
                    <li>
                        <b>{language === 'english' ? "Uruguayan championships(52):" : "Campeonatos uruguayos(52):"}</b><br></br>
                        - <b>Amateur(11):</b>
                        <a href="http://historia.padreydecano.com/campanas-historicas/la-campana-de-1900.html">1900</a>,
                        <a href="https://en.wikipedia.org/wiki/1901_Uruguayan_Primera_Divisi%C3%B3n">1901</a>,
                        <a href="http://historia.padreydecano.com/campanas-historicas/la-campana-de-1905.html">1905</a>,
                        <a href="https://en.wikipedia.org/wiki/1907_Uruguayan_Primera_Divisi%C3%B3n">1907</a>,
                        <a href="https://en.wikipedia.org/wiki/1911_Uruguayan_Primera_Divisi%C3%B3n">1911</a>,
                        <a href="https://en.wikipedia.org/wiki/1918_Uruguayan_Primera_Divisi%C3%B3n">1918</a>,
                        <a href="https://en.wikipedia.org/wiki/1921_Uruguayan_Primera_Divisi%C3%B3n">1921</a>,
                        <a href="https://en.wikipedia.org/wiki/1924_Uruguayan_Primera_Divisi%C3%B3n_of_FUF">1924</a>,
                        <a href="https://en.wikipedia.org/wiki/1926_Uruguayan_Primera_Divisi%C3%B3n">1926</a>,
                        <a href="https://en.wikipedia.org/wiki/1928_Uruguayan_Primera_Divisi%C3%B3n">1928</a>,
                        <a href="https://en.wikipedia.org/wiki/1929_Uruguayan_Primera_Divisi%C3%B3n">1929</a><br></br>
                        - <b>{language === 'english' ? "Professional(41):" : "Profesional(41):"}</b>
                        <a href="http://historia.padreydecano.com/campanas-historicas/la-campana-de-1932.html">1932</a>,
                        <a href="https://en.wikipedia.org/wiki/1935_Uruguayan_Primera_Divisi%C3%B3n">1935</a>,
                        <a href="https://en.wikipedia.org/wiki/1936_Uruguayan_Primera_Divisi%C3%B3n">1936</a>,
                        <a href="https://en.wikipedia.org/wiki/1937_Uruguayan_Primera_Divisi%C3%B3n">1937</a>,
                        <a href="https://en.wikipedia.org/wiki/1938_Uruguayan_Primera_Divisi%C3%B3n">1938</a>,
                        <a href="https://en.wikipedia.org/wiki/1944_Uruguayan_Primera_Divisi%C3%B3n">1944</a>,
                        <a href="https://en.wikipedia.org/wiki/1945_Uruguayan_Primera_Divisi%C3%B3n">1945</a>,
                        <a href="http://historia.padreydecano.com/campanas-historicas/la-campana-de-1949.html">1949</a>,
                        <a href="http://historia.padreydecano.com/campanas-historicas/la-campana-de-1951.html">1951</a>,
                        <a href="https://en.wikipedia.org/wiki/1953_Uruguayan_Primera_Divisi%C3%B3n">1953</a>,<br></br>
                        <a href="https://en.wikipedia.org/wiki/1954_Uruguayan_Primera_Divisi%C3%B3n">1954</a>,
                        <a href="http://historia.padreydecano.com/campanas-historicas/la-campana-de-1958.html">1958</a>,
                        <a href="http://historia.padreydecano.com/campanas-historicas/la-campana-de-1959.html">1959</a>,
                        <a href="http://historia.padreydecano.com/campanas-historicas/la-campana-de-1960.html">1960</a>,
                        <a href="http://historia.padreydecano.com/campanas-historicas/la-campana-de-1961.html">1961</a>,
                        <a href="http://historia.padreydecano.com/campanas-historicas/la-campana-de-1962.html">1962</a>,
                        <a href="https://en.wikipedia.org/wiki/1964_Uruguayan_Primera_Divisi%C3%B3n">1964</a>,
                        <a href="https://en.wikipedia.org/wiki/1965_Uruguayan_Primera_Divisi%C3%B3n">1965</a>,
                        <a href="https://en.wikipedia.org/wiki/1967_Uruguayan_Primera_Divisi%C3%B3n">1967</a>,
                        <a href="https://en.wikipedia.org/wiki/1968_Uruguayan_Primera_Divisi%C3%B3n">1968</a>,
                        <a href="https://en.wikipedia.org/wiki/1973_Uruguayan_Primera_Divisi%C3%B3n">1973</a>,
                        <a href="https://en.wikipedia.org/wiki/1974_Uruguayan_Primera_Divisi%C3%B3n">1974</a>,
                        <a href="https://en.wikipedia.org/wiki/1975_Uruguayan_Primera_Divisi%C3%B3n">1975</a>,<br></br>
                        <a href="https://en.wikipedia.org/wiki/1978_Uruguayan_Primera_Divisi%C3%B3n">1978</a>,
                        <a href="https://en.wikipedia.org/wiki/1979_Uruguayan_Primera_Divisi%C3%B3n">1979</a>,
                        <a href="https://en.wikipedia.org/wiki/1981_Uruguayan_Primera_Divisi%C3%B3n">1981</a>,
                        <a href="https://en.wikipedia.org/wiki/1982_Uruguayan_Primera_Divisi%C3%B3n">1982</a>,
                        <a href="https://en.wikipedia.org/wiki/1985_Uruguayan_Primera_Divisi%C3%B3n">1985</a>,
                        <a href="https://en.wikipedia.org/wiki/1986_Uruguayan_Primera_Divisi%C3%B3n">1986</a>,
                        <a href="http://historia.padreydecano.com/campanas-historicas/la-campana-de-1993.html">1993</a>,
                        <a href="http://historia.padreydecano.com/campanas-historicas/la-campana-de-1994.html">1994</a>,
                        <a href="http://historia.padreydecano.com/campanas-historicas/la-campana-de-1995.html">1995</a>,
                        <a href="http://historia.padreydecano.com/campanas-historicas/la-campana-de-1996.html">1996</a>,
                        <a href="http://historia.padreydecano.com/campanas-historicas/la-campana-de-1997.html">1997</a>,
                        <a href="https://en.wikipedia.org/wiki/2003_Uruguayan_Primera_Divisi%C3%B3n">2003</a>,
                        <a href="https://en.wikipedia.org/wiki/2010_Uruguayan_Primera_Divisi%C3%B3n">2010</a>,<br></br>
                        <a href="https://en.wikipedia.org/wiki/2013_Uruguayan_Primera_Divisi%C3%B3n">2013</a>,
                        <a href="https://en.wikipedia.org/wiki/2016_Uruguayan_Primera_Divisi%C3%B3n">2016</a>,
                        <a href="https://en.wikipedia.org/wiki/2017_Uruguayan_Primera_Divisi%C3%B3n">2017</a>,
                        <a href="https://en.wikipedia.org/wiki/2018_Uruguayan_Primera_Divisi%C3%B3n">2018</a>
                    </li>
                </ul>
            </div>
            {/* <SingleLineImageList pic={championshipsImgs} /> */}
        </div>
    )
}