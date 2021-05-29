import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import * as homeRequests from "../requests/homeRequests";

const HomePage = () => {

    const [games, setGames] = useState([]);






    return (
        <Container>
            <Row>
                <Col>
                <div>
                    <p>{games.length > 0 && games[0].gameName}</p>
                    <button onClick={() => homeRequests.getAllGames(setGames)}>asdasd</button>
                </div>
                </Col>
            </Row>

        </Container>
)
}
  

export default HomePage
