import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import axios from 'axios';
import Cookies from 'universal-cookie';
// import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
const cookies = new Cookies();

export default function Header() {
    const { language, setLanguage, setNavValues } = useContext(LanguageContext);
    const history = useHistory();

    const handleClick = (mode) => {
        setNavValues(0);
        mode === 'logout' ?
            axios.get(`https://penarol-app.herokuapp.com/api/user/logout`)
            // axios.get(`http://localhost:3000/api/user/logout`)
                .then(docs => {
                    if (docs.data === 'Successfully logout') {
                        cookies.remove('token');
                    }
                    window.location.reload(true);
                })
                .catch(err => console.log(err)) :
            history.push("/login");
    }

    const initialPage = () => {
        history.push('/');
    }

    return (
        <div className="header" style={styles.root}>
            <img onClick={initialPage} style={styles.logo} src="https://www.xn--pearol-xwa.org/plantillas/images/logo_1.svg" alt="Club Atlético Peñarol" />
            <div className="languages" style={styles.languages}>
                <img onClick={() => setLanguage('spanish')} src="https://www.countryflags.io/es/flat/32.png" alt="spainFlag" />
                <img onClick={() => setLanguage('english')} src="https://www.countryflags.io/us/flat/32.png" alt="usaFlag" />
                <button onClick={() => handleClick(document.cookie?'logout':'login')} style={{ backgroundColor: 'black', color: "white", marginTop: 0 }}>
                    {document.cookie ? language === 'english' ? "Log out" : "Salir" : language === 'english' ? "Log in" : "Entrar"}
                </button>
            </div>
        </div>
    );
}

const styles = {
    root: {
        // backgroundColor: 'red',
    },
    title: {
        color: 'yellow',
        marginTop: 70,
        marginLeft: '36%',
    },
    logo: {
        width: '27%'
    },
    languages: {
        display: 'inline',
        position: 'absolute',
        top: 0,
        right: 0
    }
}