import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

import GameForm from "./home/gameForm"
import GameList from "./home/gameList"
import * as homeRequests from "../requests/homeRequests"


const HomeGame = () =>{

    const [games, setGames] = useState([]);
    
    useEffect(() => {
        console.log(games);
      });
    
    const fetchGames = ()=>{
        homeRequests.getAllGames().then((data)=> setGames(data));


    }

    return (
        <Row>
            <Col xs={12} md={6}><GameForm/></Col>

            <Col xs={12} md={6}>

                <Button onClick={fetchGames}>Fetch Games</Button>

                <GameList games={games} fetch={fetchGames} />

            </Col>
        </Row>
    )
    
}


export default HomeGame