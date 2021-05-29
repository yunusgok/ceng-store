import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

import * as homeRequests from "../requests/homeRequests";
import HomeGame from "../components/homeGame"
import HomeUser from "../components/homeUser"
import CustomNavbar from "../components/navbar"

const HomePage = () => {
    const [page, setPage] = useState(0); 
    
    return (
        <div>

            <CustomNavbar/>
            <Container>
                <Row>
                    <Col><Button variant="success" onClick={()=>setPage(1)}>Games</Button></Col>
                    <Col><Button variant="info" onClick={()=>setPage(2)}>Users</Button></Col>
                </Row>
                <Row>
                    <Col>
                        {page===2 && <HomeUser/>}
                        {page===1 && <HomeGame/>}
                    </Col>
                </Row>

            </Container>
        </div>
)
}
  

export default HomePage
