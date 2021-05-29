import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import GameForm from "./home/gameForm"


const HomeGame = () =>{

    const [games, setGames] = useState([]);


    return (
        <Row>

            <Col xs={12} md={6}><GameForm/></Col>
            <Col xs={12} md={6}><GameForm/></Col>
        </Row>
    )
    
}


export default HomeGame