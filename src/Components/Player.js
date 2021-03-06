import React, { useState, useEffect, useContext } from 'react'
import RecipeReviewCard from './RecipeViewCard';
import axios from "axios";
import { LanguageContext } from './LanguageContext';
import CommonLoading from 'react-loading';
import { TextField } from '@mui/material';
import './style.css';
// import Pagination from '@mui/material/Pagination';

const styles = {
    wrapper: {
        width: '80%',
        marginLeft: '18%',
        marginTop: '5%',
        flexWrap: 'wrap',
    },
    field: {
        display: 'block',
        backgroundColor: 'white',
        marginTop: '5%',
        marginBottom: '5%',
        width: '40%',
        // margin: '5% 40%',
        marginLeft: '5%',
        // height: '5ch'
    },
    charging: {
        marginLeft: '40%'
    }
}

export default function Player(props) {
    const [players, setPlayers] = useState(null);
    const [filteredPlayers, setFilteredPlayers] = useState(null);
    const { setNavValues } = useContext(LanguageContext);
    const { setValues } = props;
    const [search, setSearch] = useState('');
    // const [currentPage, setCurrentPage] = useState(1);
    // const [playersPerPage, setPlayersPerPage] = useState(9);

    useEffect(() => {
        setNavValues(1);
        getPlayers();
    }, [setNavValues]);

    const getPlayers = () => {
        axios.get(`https://penarol-app.herokuapp.com/api/player`)
        // axios.get(`http://localhost:3000/api/player`)
            .then((res) => {
                setPlayers(res.data);
                setFilteredPlayers(res.data);
                // setPlayersPerPage(res.data.length);
            })
            .catch(err => console.log(err));
    }

    const deletePlayer = (id, name) => {
        axios.delete(`https://penarol-app.herokuapp.com/api/player/${id}&${name}`, { withCredentials: true })
        // axios.delete(`http://localhost:3000/api/player/${id}&${name}`, { withCredentials: true })
            .then(docs => {
                if (docs.data === 'Successfully delete player') {
                    getPlayers();
                }
                setPlayers(docs.data);
            })
            .catch(err => console.log(err));
    }

    const handleSearch = (e) => {
        const { value } = e.target;

        setSearch({
            ...search,
            search: value,
        });
    }

    useEffect(() => {
        const filter = players ? players.filter(player => player.name.toLowerCase().includes(search.search.toLowerCase())) : null;
        if (filter) {
            setFilteredPlayers(filter);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    return (
        <div style={styles.wrapper}>
            <TextField variant="outlined" style={styles.field} type="search" placeholder="Search a player..." onChange={(e) => handleSearch(e)} />
            {/* <TextField onChange={handleSearch} label='Search' fullWidth={true} style={styles.field} id="name-outlined-basic" /> */}
            {filteredPlayers ? filteredPlayers.map(player => (
                <RecipeReviewCard key={player._id} player={player} deletePlayer={deletePlayer} setValues={setValues} />
            )) : <div style={styles.charging}><CommonLoading color='#ffffff' /></div>}
            <div style={{ backgroundColor: "yellow" }} >
                {/* <Pagination count={Math.ceil(playersPerPage / 9)} /> */}
            </div>
        </div>
    )
}