import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
// import AcccessibleTable from '../Components/AcccessibleTable';
import AddPlayer from '../Components/AddPlayer';
// import Championships from '../Components/Championships';
import History from '../Components/History';
import Home from '../Components/Home';
import Login from '../Components/LogIn';
import Player from '../Components/Player';
import Stadium from '../Components/Stadium';
import Tables from '../Components/Tables';

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

    return (
        <>
            <Switch>
                {!document.cookie && <Route path="/login" component={Login} />}
                <Route exact path="/" component={Home} />
                <Route path="/history" component={History} />
                <Route path="/players" render={() => <Player setValues={setValues} />} />
                <Route path="/stadium" component={Stadium} />
                {/* <Route path="/titles" component={Championships} /> */}
                <Route path="/tables" component={Tables} />
                {document.cookie && <Route path="/addPlayer" render={() => <AddPlayer mode={'addPlayer'} values={values} setValues={setValues} />} />}
                {document.cookie && <Route path="/editPlayer" render={() => <AddPlayer mode={'editPlayer'} values={values} setValues={setValues} />} />}
            </Switch>
        </>
    )
}