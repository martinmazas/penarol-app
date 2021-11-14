import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import AcccessibleTable from '../Components/AcccessibleTable';
import AddPlayer from '../Components/AddPlayer';
import Championships from '../Components/Championships';
import History from '../Components/History';
import Home from '../Components/Home';
import Login from '../Components/LogIn';
import Player from '../Components/Player';
import Stadium from '../Components/Stadium';
import axios from "axios";

export default function ReactRouter() {
    const [values, setValues] = useState({
        Id: '',
        Name: '',
        Position: '',
        Born: '',
        Height: '',
        Picture: '',
        Country: ''
    });

    const [players, setPlayers] = useState(null);
    const [filteredPlayers, setFilteredPlayers] = useState(null);
    const getPlayers = () => {
        // axios.get(`https://penarol-app.herokuapp.com/api/player`)
        axios.get(`http://localhost:3000/api/player`)
            .then((res) => {
                setPlayers(res.data);
                setFilteredPlayers(res.data);
                // setPlayersPerPage(res.data.length);
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <Switch>
                {!document.cookie && <Route path="/login" component={Login} />}
                <Route exact path="/" component={Home} />
                <Route path="/history" component={History} />
                <Route path="/players" render={() => <Player setValues={setValues} filteredPlayers={filteredPlayers} setFilteredPlayers={setFilteredPlayers} players={players} getPlayers={getPlayers} />} />
                <Route path="/stadium" component={Stadium} />
                <Route path="/titles" component={Championships} />
                <Route path="/matches" component={AcccessibleTable} />
                {document.cookie && <Route path="/addPlayer" render={() => <AddPlayer mode={'addPlayer'} values={values} setValues={setValues} />} />}
                {document.cookie && <Route path="/editPlayer" render={() => <AddPlayer mode={'editPlayer'} values={values} setValues={setValues} />} />}
            </Switch>
        </>
    )
}