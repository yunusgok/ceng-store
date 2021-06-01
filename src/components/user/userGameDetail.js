import React, { useEffect, useState } from 'react';
import { Row, Col, ListGroup, Button, Form } from 'react-bootstrap';
import * as homeRequests from "../../requests/homeRequests"
import * as userRequests from "../../requests/userRequests"
import { BsPencilSquare } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";


const UserGameList = (probs)=>{
    const initialState = {
        inputType: 0,
        commentValue: "",
        rateValue: 5,
        playValue: 0,
        
    }
    const [state, setState] = useState(initialState)

    const game = probs.game;


    const enableInput = (inputType)=>{
        setState({
            ...state,
            inputType: inputType,
            commentValue: "",
            rateValue: 5,
            playValue: 0,
        })
        
    }

    const handleChange = (evt) =>{
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
        console.log(state);
    }


    const commentFrom = () =>{
        return(
            <Form>
                <Form.Group  controlId="formGridUserName" className="mt-4">
                    <Form.Control type="text" placeholder="Enter comment" name="commentValue" value={state.commentValue} onChange={handleChange} />
                </Form.Group>
                <Button onClick={handleFromSubmit}>Save</Button>
        </Form>
        )
    }

    const rateForm = () =>{
        return(
            <Form>
                <Form.Group  controlId="formGridUserName" className="mt-4">
                    <Form.Control type="range" placeholder="Enter commnet" name="rateValue" min="1" max="5" value={state.rateValue} onChange={handleChange} />
                </Form.Group>
                <Button onClick={handleFromSubmit}>Save</Button>
        </Form>
        )
    }

    const playForm = () =>{
        return(
            <Form>
                <Form.Group  controlId="formGridUserName" className="mt-4">
                    <Form.Control type="number" placeholder="Time in minutes" name="playValue" value={state.playValue} onChange={handleChange} />
                </Form.Group>
                <Button onClick={handleFromSubmit}>Save</Button>
        </Form>
        )

    }

    const handleFromSubmit = () => {

        if(state.inputType === 1){
            userRequests.addComment(probs.userName, game.gameName, state.commentValue)
        }
        else if(state.inputType === 2){
            userRequests.addRate(probs.userName, game.gameName, parseInt(state.rateValue))
        }
        else if(state.inputType === 3){
            userRequests.addPlay(probs.userName, game.gameName, parseInt(state.playValue))
        }

        setState(initialState)
    }

    return (
        
    
            <div>

                <ListGroup.Item >
                    <Row className="ml-10">
                        <Col sm={6}>{game.gameName}</Col>
                        {game.enabled && <Col sm={2}>
                            <Button onClick={()=>enableInput(1)}>
                                <BsPencilSquare />
                            </Button>
                        </Col>}
                        {!game.enabled && <Col sm={2}>
                            <Button onClick={()=>enableInput(1)} disabled>
                                <BsPencilSquare />
                            </Button>
                        </Col>}
                        {game.enabled && 
                            <Col sm={2}>
                                <Button onClick={()=>enableInput(2)}>
                                    <FaThumbsUp></FaThumbsUp>
                                </Button>
                            </Col>}
                        {!game.enabled && 
                            <Col sm={2}>
                                <Button onClick={()=>enableInput(2)} disabled>
                                    <FaThumbsUp></FaThumbsUp>
                                </Button>
                            </Col>}
                        <Col sm={2}>
                            <Button onClick={()=>enableInput(3)} >
                                <FiPlay></FiPlay>
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            {state.inputType === 1 && commentFrom()}
                        </Col>
                        <Col xs={12}>
                            {state.inputType === 2 && rateForm()}
                        </Col>
                        <Col xs={12}>
                            {state.inputType === 3 && playForm()}
                        </Col>

                    </Row>
                </ListGroup.Item>

            </div>
        
      )
}

export default  UserGameList