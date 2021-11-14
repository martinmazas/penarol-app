import React, { useState, useContext, useEffect } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { LanguageContext } from './LanguageContext';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const styles = {
    field: {
        display: 'block',
        backgroundColor: 'white',
        marginTop: 20,
        marginLeft: 20,
    },
    sendButton: {
        marginTop: 20,
        marginLeft: '30ch',
        backgroundColor: '#1976d2'
    }
}

export default function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const { language, setNavValues } = useContext(LanguageContext);
    const history = useHistory();

    useEffect(() => setNavValues(null));

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        axios.post(`https://penarol-app.herokuapp.com/api/user/${values.email}`, values, { withCredentials: true })
        // axios.post(`http://localhost:3000/api/user/${values.email}`, values, { withCredentials: true })
            .then(res => {
                if (res.data.msg === 'Successfully connected') {
                    history.push("/history");
                    cookies.set('token', res.data.token, { path: '/', maxAge: 6000, secure: true});
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <Container style={{ marginTop: 70 }} maxWidth="sm">
            <TextField style={styles.field} fullWidth={true} id="name-outlined-basic" label={language === 'english' ? "User" : "Usuario"} name="email" variant="outlined" onChange={e => handleChange(e)} />
            <TextField style={styles.field} fullWidth={true} id="pass-outlined-basic" label={language === 'english' ? "Password" : "Contrasena"} type="password" name="password" variant="outlined" onChange={e => handleChange(e)} />
            <Button style={styles.sendButton} onClick={handleSubmit} variant="contained">Log in</Button>
        </Container>
    )
}