import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LanguageContext } from './LanguageContext';
// import clausura from '../Text/clausura-21.json';

function createData(pos, team, pj, pg, pe, pp, gf, gc, df, pt) {
    return { pos, team, pj, pg, pe, pp, gf, gc, df, pt };
}

const styles ={
    firstRow: {
        backgroundColor: 'grey'
    }
}

const rows = [
    createData('1.', 'Penarol', '12', '8', '3', "1", "22", "8", "14", "27"),
    createData('2.', 'Cerro Largo', '12', '6', '6', "0", "20", "7", "13", "24"),
    createData('3.', 'Nacional', '12', '6', '3', "3", "16", "11", "5", "21"),
    createData('4.', 'Progreso', '12', '6', '3', "3", "11", "6", "5", "21"),
    createData('5.', 'Mvd. City Torque', '12', '6', '2', "4", "23", "17", "6", "20"),
    createData('6.', 'Wanderers', '12', '6', '2', "4", "17", "16", "1", "20"),
];

export default function Tables(props) {
    const { language, setNavValues } = React.useContext(LanguageContext);

    React.useEffect(() => {
        setNavValues(3);
    })
    return (
        <TableContainer style={{ marginTop: 100, width: 650, marginLeft: '30%' }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell style={styles.firstRow}><b>{language === 'english' ? "Pos" : "Pos"}</b></TableCell>
                        <TableCell style={styles.firstRow}><b>{language === 'english' ? "Team" : "Equipo"}</b></TableCell>
                        <TableCell style={styles.firstRow}><b>{language === 'english' ? "PJ" : "PJ"}</b></TableCell>
                        <TableCell style={styles.firstRow}><b>{language === 'english' ? "PG" : "PG"}</b></TableCell>
                        <TableCell style={styles.firstRow}><b>{language === 'english' ? "PE" : "PE"}</b></TableCell>
                        <TableCell style={styles.firstRow}><b>{language === 'english' ? "PP" : "PP"}</b></TableCell>
                        <TableCell style={styles.firstRow}><b>{language === 'english' ? "GF" : "GF"}</b></TableCell>
                        <TableCell style={styles.firstRow}><b>{language === 'english' ? "GC" : "GC"}</b></TableCell>
                        <TableCell style={styles.firstRow}><b>{language === 'english' ? "DF" : "DF"}</b></TableCell>
                        <TableCell style={styles.firstRow}><b>{language === 'english' ? "PT" : "PT"}</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.pos}>
                            <TableCell style={{backgroundColor: 'grey'}} component="th" scope="row">
                                {row.pos}
                            </TableCell>
                            <TableCell>{row.team}</TableCell>
                            <TableCell>{row.pj}</TableCell>
                            <TableCell>{row.pg}</TableCell>
                            <TableCell>{row.pe}</TableCell>
                            <TableCell>{row.pp}</TableCell>
                            <TableCell>{row.gf}</TableCell>
                            <TableCell>{row.gc}</TableCell>
                            <TableCell>{row.df}</TableCell>
                            <TableCell>{row.pt}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}