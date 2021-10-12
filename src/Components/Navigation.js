import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import { LanguageContext } from './LanguageContext';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: 'yellow',
        marginTop: 70,
    }
});

function Navigation() {
    const classes = useStyles();
    const { language, navValues } = useContext(LanguageContext);

    return (
        <div>
            <Paper className={classes.root}>
                <Tabs
                    value={navValues}
                    indicatorColor="primary"
                    textColor="inherit"
                    centered
                >
                    <Tab href="/history" label={language === 'english' ? "History" : "Historia"} />
                    <Tab href="/players" label={language === 'english' ? "Players" : "Jugadores"} />
                    <Tab href="/stadium" label={language === 'english' ? "Stadium" : "Estadio"} />
                    <Tab href="/titles" label={language === 'english' ? "Titles" : "Titulos"} />
                    {document.cookie ? <Tab href="/addPlayer" label={language === 'english' ? "Add/Edit player" : "Agregar/Editar jugador"} /> : null}
                </Tabs>
            </Paper>
        </div>
    )
}

export default Navigation