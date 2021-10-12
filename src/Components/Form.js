import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { LanguageContext } from './LanguageContext';
import DialogText from './DialogText';
import axios from "axios";

const styles = {
    field: {
        display: 'block',
        backgroundColor: 'white',
        marginTop: 20,
        marginLeft: 20,
    },
    sendButton: {
        marginTop: 20,
        marginLeft: '30ch'
    }
}

export default function Form(props) {
    const { language } = useContext(LanguageContext);
    const [message, setMessage] = useState(null);
    const [open, setOpen] = useState(false);
    const { setValues, values, mode } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        if (mode === 'addPlayer') {
            axios
                .post("https://penarol-app.herokuapp.com/api/player", values, { withCredentials: true })
                .then((res) => {
                    setMessage(res.data);
                })
                .catch(err => {
                    setMessage(err);
                });
            setOpen(true);
        }
        else {
            axios
                .put(`https://penarol-app.herokuapp.com/api/player/${values.Id}`, values, { withCredentials: true })
                .then(res => {
                    setMessage(res.data);
                })
                .catch(err => setMessage(err));
            setOpen(true);
        }
    }

    return (
        <div>
            <Container style={{ marginTop: 70 }} maxWidth="sm">
                <TextField style={styles.field} fullWidth={true} id="name-outlined-basic" label={language === 'english' ? "Name" : "Nombre"} name="Name" value={values.Name} variant="outlined" onChange={e => handleChange(e)} />
                <TextField style={styles.field} fullWidth={true} id="position-outlined-basic" label={language === 'english' ? "Position" : "Posicion"} name="Position" value={values.Position} variant="outlined" onChange={e => handleChange(e)} />
                <TextField style={styles.field} fullWidth={true} id="born-outlined-basic" label={language === 'english' ? "Born" : "Fecha de nacimiento"} name="Born" variant="outlined" value={values.Born} onChange={e => handleChange(e)} />
                <TextField style={styles.field} fullWidth={true} id="height-outlined-basic" label={language === 'english' ? "Height" : "Altura"} name="Height" variant="outlined" value={values.Height} onChange={e => handleChange(e)} />
                <TextField style={styles.field} fullWidth={true} id="picture-outlined-basic" label={language === 'english' ? "Picture" : "Imagen"} name="Picture" variant="outlined" value={values.Picture} onChange={e => handleChange(e)} />
                <TextField style={styles.field} fullWidth={true} id="country-outlined-basic" label={language === 'english' ? "Country" : "Pais"} name="Country" variant="outlined" value={values.Country} onChange={e => handleChange(e)} />
                <Button color={mode === 'addPlayer' ? 'primary' : 'error'} onClick={handleSubmit} style={styles.sendButton} variant="contained">{mode === "addPlayer" ? (language === 'english' ? "Send" : "Enviar") : (language === 'english' ? "Update" : "Actualizar")}</Button>
                {message ? <DialogText header={"Confirmation"} open={open} setOpen={setOpen} message={message} /> : null}
            </Container>
        </div>
    )
}