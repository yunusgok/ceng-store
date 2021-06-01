import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

import * as userRequests from "../requests/userRequests";
import * as homeRequests from "../requests/homeRequests";
import CustomNavbar from "../components/navbar";
import GameList from "../components/games/gameList"


const GamePage = (probs) => {
    const initialState = {
        games:[]
    };
    const [state, setState] = useState(initialState)


    useEffect(() => {
        fetchGames()
      }, []);


    const fetchGames= ()=>{
        homeRequests.getAllGames().then((data)=> setState(
            {...state,
            games: data}));
    }



    return (
        <div>
            <CustomNavbar/>
            <Container>
                <Button onClick={fetchGames}>Fetch Games</Button>
                <GameList games={state.games}></GameList>


            </Container>
        </div>
    )


}


export default GamePage;
