import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LanguageContext } from './LanguageContext';
import CustomizedMenus from './CustomizedMenus';

function createData(team, pj, pg, pe, pp, gf, gc, df, pt) {
    return { team, pj, pg, pe, pp, df, pt };
}

const styles = {
    root: {
        // marginTop: '2ch',
        // marginLeft: '44ch',
        margin: '2ch auto',
        paddingBottom: '5ch',
        width: '40%',
        // backgroundColor: 'red'
    },
    firstRow: {
        backgroundColor: 'grey'
    },
    buttons: {
        // marginLeft: '50%',
        marginBottom: 5,
    }
}

export default function Tables(props) {
    const { language, setNavValues } = React.useContext(LanguageContext);
    const [selectedTable, setSelectedTable] = React.useState(['Clausura 21', props.clausuraTab]);
    let position = 1;

    React.useEffect(() => {
        selectedTable[1].map(tab => createData(tab.team, tab.pj, tab.pg, tab.pe, tab.pp, tab.gf, tab.gc, tab.df, tab.pt));
    }, [selectedTable]);


    const changeTable = (name) => {
        if (name.option.currentTarget) setSelectedTable([selectedTable[0], selectedTable[1]]);
        else name.option === 'Apertura 21' ? setSelectedTable([name.option, props.aperturaTab]) : name.option === 'Clausura 21' ? setSelectedTable([name.option, props.clausuraTab]) : setSelectedTable([name.option, props.anualTab]);
    }

    React.useEffect(() => {
        setNavValues(3);
    })

    const options = [
        'Apertura 21',
        'Clausura 21',
        'Anual 21'
    ]

    return (
        <div style={styles.root}>
            <CustomizedMenus options={options} changeTable={changeTable} tableName={selectedTable[0]} />
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
                        {selectedTable[1].sort((a, b) => (
                            b['pt'] - a['pt'] || b['df'] - a['df']
                        )).map((row) => (
                            <TableRow key={row.team}>
                                <TableCell style={{ backgroundColor: 'grey' }} component="th" scope="row">
                                    {row.team === 'Penarol' ? <b>{position++}.</b> : position++ + '.'}
                                </TableCell>
                                <TableCell>{row.team === 'Penarol' ? <b>{row.team}</b> : row.team}</TableCell>
                                <TableCell>{row.team === 'Penarol' ? <b>{row.pj}</b> : row.pj}</TableCell>
                                <TableCell>{row.team === 'Penarol' ? <b>{row.pg}</b> : row.pg}</TableCell>
                                <TableCell>{row.team === 'Penarol' ? <b>{row.pe}</b> : row.pe}</TableCell>
                                <TableCell>{row.team === 'Penarol' ? <b>{row.pp}</b> : row.pp}</TableCell>
                                {/* <TableCell>{row.gf}</TableCell>
                            <TableCell>{row.gc}</TableCell> */}
                                <TableCell>{row.team === 'Penarol' ? <b>{row.df}</b> : row.df}</TableCell>
                                <TableCell>{row.team === 'Penarol' ? <b>{row.pt}</b> : row.pt}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}