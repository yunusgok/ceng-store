import React, { useEffect, useState } from 'react';


import {Image, Row, Col, Container, Button, Accordion,Card, Badge, ListGroup} from 'react-bootstrap';
import * as gameRequests from "../../requests/gameRequests"


const GameDetail = (probs) =>{
    const game = probs.game;
    const initialState = {
        rating:"",
        totalPlayTime: "",
        comments:[],
    }
    const [state, setState] = useState();


    const fetchGameDetail = ()=>{
        gameRequests.getGameDetail(game.gameName)
        .then((data)=>setState({
            ...state,
            rating: data.rating,
            totalPlayTime: data.totalPlayTime,
            comments: data.comments
        }))

    }

    const DisplayComments = () => {
        return (
            <div>
                    <Col xs={12}>
                        <ListGroup.Item >
                            <Row>
                            <Col>
                            <Badge pill variant="primary">Username</Badge>
                            </Col>
                            <Col>
                            <Badge pill variant="success">Comment</Badge>
                            </Col>
                            </Row>
                        </ListGroup.Item>
                    </Col>
                {
                    Object.entries(state.comments).map(([key, val]) => 
                    <Col xs={12} key={key}>
                        <ListGroup.Item >
                            <Row>
                                <Col>{val.userName}</Col>
                                <Col>{val.comment}</Col>
                            </Row>
                        </ListGroup.Item>
                    </Col>
                    )
                }
            </div>
        )

    }
    const DisplayGame = ()=>{

        
        return (
            <Row>
                <Col xs={12} sm={6}>
                {
                    Object.entries(game).map(([key, val]) => 
                    <Col xs={12} key={key}>
                    <Badge variant="secondary">{key} </Badge> {JSON.stringify(val)}
                    </Col>
                    )
                }
                    <Col xs={12} >
                        <Badge variant="secondary">Rating </Badge>  {state && <div>{state.rating.substring(0, 4 )}</div> }
                    </Col>
                    <Col xs={12} >
                        <Badge variant="secondary">Total Play Time </Badge>  {state && <div>{state.totalPlayTime} minutes</div> }
                    </Col>
                </Col>
                <Col xs={12} sm={6}>
                    <Image src={game.photo} thumbnail  />
                </Col>
                <Col>{state && <DisplayComments/>}</Col>
            </Row>
        );
            
    }

    return (
            
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} onClick={fetchGameDetail} variant="link" eventKey={String(probs.index)}>
                    {game.gameName}

                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={String(probs.index)}>
                <Card.Body><DisplayGame></DisplayGame>  </Card.Body>
                </Accordion.Collapse>
            </Card>
           
    )
}



export default GameDetail;