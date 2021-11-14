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
                <img style={styles.languageIcon} onClick={() => setLanguage('english')} alt="English" src="https://unpkg.com/language-icons/icons/en.svg" />
                <img style={styles.languageIcon} onClick={() => setLanguage('spanish')} alt="Spanish" src="https://unpkg.com/language-icons/icons/es.svg" />
            </div>
            {/* <button onClick={() => handleClick(document.cookie ? 'logout' : 'login')} style={styles.login}>
                {document.cookie ? language === 'english' ? "Log out" : "Salir" : language === 'english' ? "Log in" : "Entrar"}
            </button> */}
            {document.cookie ?
                <button onClick={() => handleClick('logout')} style={styles.login}>
                    {/* {document.cookie ? language === 'english' ? "Log out" : "Salir" : language === 'english' ? "Log in" : "Entrar"} */}
                    {language === 'english' ? "Log out" : "Salir"}
                </button> : null
            }
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
    },
    languageIcon: {
        width: 25,
        height: 25,
    },
    login: {
        backgroundColor: 'black',
        color: "white",
        top: 6,
        position: 'absolute',
        display: 'inline',
        right: 70,
    }
}