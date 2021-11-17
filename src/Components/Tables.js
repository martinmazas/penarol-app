import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LanguageContext } from './LanguageContext';
import Button from '@mui/material/Button';
// import clausura from '../Text/clausura-21.json';

function createData(team, pj, pg, pe, pp, gf, gc) {
    const df = Number(gf) - Number(gc);
    const pt = Number(pg) * 3 + Number(pe);
    return { team, pj, pg, pe, pp, gf, gc, df, pt };
}

const styles = {
    root: {
        marginTop: '2ch',
        marginLeft: '55ch',
        paddingBottom: '5ch',
        width: '40%',
        color: 'green'
    },
    firstRow: {
        backgroundColor: 'grey'
    },
    buttons: {
        marginLeft: '20ch',
        marginBottom: 5,
    }
}

const aperturaTable = [
    createData('Penarol', '15', '7', '7', "1", "22", "10"),
    createData('Cerro Largo', '15', '6', '2', "7", "20", "22"),
    createData('Nacional', '15', '9', '2', "4", "14", "9"),
    createData('Progreso', '15', '2', '5', "8", "13", "26"),
    createData('Torque', '15', '8', '1', "6", "26", "19"),
    createData('Wanderers', '15', '5', '2', "8", "12", "16"),
    createData('Plaza Colonia', '15', '11', '3', "1", "20", "7"),
    createData('Deportivo Maldonado', '15', '3', '5', "7", "11", "22"),
    createData('Cerrito', '15', '5', '4', "6", "14", "15"),
    createData('Boston River', '15', '3', '5', "7", "14", "19"),
    createData('Fenix', '15', '6', '3', "6", "20", "22"),
    createData('Rentistas', '15', '4', '4', "7", "12", "21"),
    createData('River Plate', '15', '7', '5', "3", "27", '20'),
    createData('Liverpool', '15', '8', '3', "4", "20", '18'),
    createData('Sud America', '15', '5', '3', "7", "15", '22'),
    createData('Villa Espanola', '15', '1', '6', "8", "14", '26'),
];

const clausuraTable = [
    createData('Penarol', '12', '8', '3', "1", "22", "8"),
    createData('Cerro Largo', '12', '6', '6', "0", "20", "7"),
    createData('Nacional', '12', '6', '3', "3", "16", "11"),
    createData('Progreso', '12', '6', '3', "3", "11", "6"),
    createData('Torque', '12', '6', '2', "4", "23", "17"),
    createData('Wanderers', '12', '6', '2', "4", "17", "16"),
    createData('Plaza Colonia', '12', '4', '5', "3", "13", "4"),
    createData('Deportivo Maldonado', '12', '5', '2', "5", "11", "13"),
    createData('Cerrito', '12', '4', '3', "5", "17", "20"),
    createData('Boston River', '12', '4', '3', "5", "24", "6"),
    createData('Fenix', '12', '3', '5', "4", "15", "16"),
    createData('Rentistas', '12', '4', '2', "6", "15", "17", "1"),
    createData('River Plate', '12', '3', '3', "6", "11", "15"),
    createData('Liverpool', '12', '3', '2', "7", "9", "15"),
    createData('Sud America', '12', '2', '4', "6", "9", "18"),
    createData('Villa Espanola', '12', '1', '2', "9", "9", "26"),
];

const anualPreparationTable = (tablePosition, type) => {
    return Number(clausuraTable[tablePosition][type]) + Number(aperturaTable[tablePosition][type])
}

const anualTable = [
    createData('Penarol', anualPreparationTable(0, "pj"), anualPreparationTable(0, "pg"), anualPreparationTable(0, "pe"), anualPreparationTable(0, "pp"), anualPreparationTable(0, "gf"), anualPreparationTable(0, "gc")),
    createData('Cerro Largo', anualPreparationTable(1, "pj"), anualPreparationTable(1, "pg"), anualPreparationTable(1, "pe"), anualPreparationTable(1, "pp"), anualPreparationTable(1, "gf"), anualPreparationTable(1, "gc")),
    createData('Nacional', anualPreparationTable(2, "pj"), anualPreparationTable(2, "pg"), anualPreparationTable(2, "pe"), anualPreparationTable(2, "pp"), anualPreparationTable(2, "gf"), anualPreparationTable(2, "gc")),
    createData('Progreso', anualPreparationTable(3, "pj"), anualPreparationTable(3, "pg"), anualPreparationTable(3, "pe"), anualPreparationTable(3, "pp"), anualPreparationTable(3, "gf"), anualPreparationTable(3, "gc")),
    createData('Torque', anualPreparationTable(4, "pj"), anualPreparationTable(4, "pg"), anualPreparationTable(4, "pe"), anualPreparationTable(4, "pp"), anualPreparationTable(4, "gf"), anualPreparationTable(4, "gc")),
    createData('Wanderers', anualPreparationTable(5, "pj"), anualPreparationTable(5, "pg"), anualPreparationTable(5, "pe"), anualPreparationTable(5, "pp"), anualPreparationTable(5, "gf"), anualPreparationTable(5, "gc")),
    createData('Plaza Colonia', anualPreparationTable(6, "pj"), anualPreparationTable(6, "pg"), anualPreparationTable(6, "pe"), anualPreparationTable(6, "pp"), anualPreparationTable(6, "gf"), anualPreparationTable(6, "gc")),
    createData('Deportivo Maldonado', anualPreparationTable(7, "pj"), anualPreparationTable(7, "pg"), anualPreparationTable(7, "pe"), anualPreparationTable(7, "pp"), anualPreparationTable(7, "gf"), anualPreparationTable(7, "gc")),
    createData('Cerrito', anualPreparationTable(8, "pj"), anualPreparationTable(8, "pg"), anualPreparationTable(8, "pe"), anualPreparationTable(8, "pp"), anualPreparationTable(8, "gf"), anualPreparationTable(8, "gc")),
    createData('Boston River', anualPreparationTable(9, "pj"), anualPreparationTable(9, "pg"), anualPreparationTable(9, "pe"), anualPreparationTable(9, "pp"), anualPreparationTable(9, "gf"), anualPreparationTable(9, "gc")),
    createData('Fenix', anualPreparationTable(10, "pj"), anualPreparationTable(10, "pg"), anualPreparationTable(10, "pe"), anualPreparationTable(10, "pp"), anualPreparationTable(10, "gf"), anualPreparationTable(10, "gc")),
    createData('Rentistas', anualPreparationTable(11, "pj"), anualPreparationTable(11, "pg"), anualPreparationTable(11, "pe"), anualPreparationTable(11, "pp"), anualPreparationTable(11, "gf"), anualPreparationTable(11, "gc")),
    createData('River Plate', anualPreparationTable(12, "pj"), anualPreparationTable(12, "pg"), anualPreparationTable(12, "pe"), anualPreparationTable(12, "pp"), anualPreparationTable(12, "gf"), anualPreparationTable(12, "gc")),
    createData('Liverpool', anualPreparationTable(13, "pj"), anualPreparationTable(13, "pg"), anualPreparationTable(13, "pe"), anualPreparationTable(13, "pp"), anualPreparationTable(13, "gf"), anualPreparationTable(13, "gc")),
    createData('Sud America', anualPreparationTable(14, "pj"), anualPreparationTable(14, "pg"), anualPreparationTable(14, "pe"), anualPreparationTable(14, "pp"), anualPreparationTable(14, "gf"), anualPreparationTable(14, "gc")),
    createData('Villa Espanola', anualPreparationTable(15, "pj"), anualPreparationTable(15, "pg"), anualPreparationTable(15, "pe"), anualPreparationTable(15, "pp"), anualPreparationTable(15, "gf"), anualPreparationTable(15, "gc")),
]


export default function Tables(props) {
    const { language, setNavValues } = React.useContext(LanguageContext);
    const [selectedTable, setSelectedTable] = React.useState(clausuraTable);
    let position = 1;

    const changeTable = (name) => {
        name === 'apertura' ? setSelectedTable(aperturaTable) : name === 'clausura' ? setSelectedTable(clausuraTable) : setSelectedTable(anualTable);
    }

    React.useEffect(() => {
        setNavValues(3);
    })

    return (
        <div style={styles.root}>
            <div style={styles.buttons}>
                <Button onClick={() => changeTable('apertura')} variant={`${selectedTable === aperturaTable ? "contained" : "outlined"}`}>Apertura</Button>
                <Button onClick={() => changeTable('clausura')} variant={`${selectedTable === clausuraTable ? "contained" : "outlined"}`}>Clausura</Button>
                <Button onClick={() => changeTable('anual')} variant={`${selectedTable === anualTable ? "contained" : "outlined"}`}>Anual</Button>
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="caption table">
                    {/* sx={{ minWidth: 650, backgroundColor: 'yellow' }} */}
                    <TableHead>
                        <TableRow>
                            <TableCell style={styles.firstRow}><b>{language === 'english' ? "Pos" : "Pos"}</b></TableCell>
                            <TableCell style={styles.firstRow}><b>{language === 'english' ? "Team" : "Equipo"}</b></TableCell>
                            <TableCell style={styles.firstRow}><b>{language === 'english' ? "P" : "PJ"}</b></TableCell>
                            <TableCell style={styles.firstRow}><b>{language === 'english' ? "W" : "PG"}</b></TableCell>
                            <TableCell style={styles.firstRow}><b>{language === 'english' ? "D" : "PE"}</b></TableCell>
                            <TableCell style={styles.firstRow}><b>{language === 'english' ? "L" : "PP"}</b></TableCell>
                            {/* <TableCell style={styles.firstRow}><b>{language === 'english' ? "GF" : "GF"}</b></TableCell>
                        <TableCell style={styles.firstRow}><b>{language === 'english' ? "GA" : "GC"}</b></TableCell> */}
                            <TableCell style={styles.firstRow}><b>{language === 'english' ? "GD" : "DF"}</b></TableCell>
                            <TableCell style={styles.firstRow}><b>{language === 'english' ? "PTS" : "PTS"}</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {selectedTable.sort((a, b) => b['pt'] - a['pt']).map((row) => (
                            <TableRow key={row.team}>
                                <TableCell style={{ backgroundColor: 'grey' }} component="th" scope="row">
                                    {position++}.
                                </TableCell>
                                <TableCell>{row.team}</TableCell>
                                <TableCell>{row.pj}</TableCell>
                                <TableCell>{row.pg}</TableCell>
                                <TableCell>{row.pe}</TableCell>
                                <TableCell>{row.pp}</TableCell>
                                {/* <TableCell>{row.gf}</TableCell>
                            <TableCell>{row.gc}</TableCell> */}
                                <TableCell>{row.df}</TableCell>
                                <TableCell>{row.pt}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}