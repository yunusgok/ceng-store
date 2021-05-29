import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import * as homeRequests from "../requests/homeRequests";
import HomeGame from "../components/homeGame"
const HomePage = () => {

    const [games, setGames] = useState([]);






    return (
        <Container>
            <Row>
                <Col>
                    <HomeGame/>
                </Col>
            </Row>

        </Container>
)
}
  

export default HomePage
