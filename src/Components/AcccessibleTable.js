import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LanguageContext } from './LanguageContext';

function createData(date, match, stadium, result, tournament) {
  return { date, match, stadium, result, tournament };
}

const rows = [
  createData('Saturday, 16/01/2021', 'Cerro vs Penarol', 'Troccoli', '1-1', "Campeonato Uruguayo"),
  createData('Thursday 28/01/2021', 'Penarol vs Defensor', 'Campeon del Siglo', '1-2', 'Campeonato Uruguayo'),
  createData('Sunday, 17/10/2021', 'Deportivo Maldonado vs Penarol', "Campus de Maldonado", "1-0", "Campeonato Uruguayo"),
];

export default function AcccessibleTable(props) {
  const { language, setNavValues } = React.useContext(LanguageContext);

  React.useEffect(() => {
    setNavValues(3);
  })
  return (
    <TableContainer style={{ marginTop: 100 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell><b>{language === 'english' ? "Date" : "Fecha"}</b></TableCell>
            <TableCell><b>{language === 'english' ? "Stadium" : "Estadio"}</b></TableCell>
            <TableCell><b>{language === 'english' ? "Match" : "Partido"}</b></TableCell>
            <TableCell><b>{language === 'english' ? "Result" : "Resultado"}</b></TableCell>
            <TableCell><b>{language === 'english' ? "Tournament" : "Campeonato"}</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell>{row.stadium}</TableCell>
              <TableCell>{row.match}</TableCell>
              <TableCell>{row.result}</TableCell>
              <TableCell>{row.tournament}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}