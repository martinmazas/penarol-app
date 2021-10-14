import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { LanguageContext } from './LanguageContext';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './style.css';
import DialogText from './DialogText';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '23ch',
    height: '45ch',
    backgroundColor: 'yellow',
    display: 'inline-block',
    marginLeft: '5%',
    marginBottom: '5%'
  },
  media: {
    height: 250,
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const { language, setNavValues } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [form, setForm] = useState(false);
  const history = useHistory();

  const { player, deletePlayer, setValues } = props;

  const editPlayer = () => {
    setValues({
      Id: player._id,
      Name: player.name,
      Position: player.position,
      Born: player.born,
      Height: player.height,
      Picture: player.picture,
      Country: player.country
    });

    setNavValues(4);
    history.push('/editPlayer');
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={player.picture}
        title={player.name}
      />
      <CardHeader
        style={{ height: 22 }}
        title={player.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <b>{language === 'english' ? 'Position' : 'Posicion'}</b>: {player.position}<br />
          <b>{language === 'english' ? 'Born' : 'Nacimiento'}</b>: {player.born}<br />
          <b>{language === 'english' ? 'Height' : 'Altura'}</b>: {player.height}<br />
          <b>{language === 'english' ? 'Nationality' : 'Nacionalidad'}</b>: {player.country}
        </Typography>
      </CardContent>
      {document.cookie ?
        <ButtonGroup color="inherit" fullWidth={true} variant="contained" aria-label="outlined primary button group">
          <Button onClick={editPlayer}>{language === 'english' ? "Edit" : "Editar"}</Button>
          <Button color="error" href='/players' onClick={() => deletePlayer(player._id, player.name)} >{language === 'english' ? "Delete" : "Eliminar"}</Button>
        </ButtonGroup> : null
      }
      <DialogText header={"Edit player"} open={open} setOpen={setOpen} message={message} />
    </Card>
  );
}