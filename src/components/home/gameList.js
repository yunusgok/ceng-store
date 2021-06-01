import React from 'react';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import * as homeRequests from "../../requests/homeRequests"

const GameList = (probs)=>{

    const disable = (gameName)=>{
        probs.fetch();
        homeRequests.disableComment(gameName);
        probs.fetch();
    }
    const enable = (gameName)=>{
        probs.fetch();
        homeRequests.enableComment(gameName);
        probs.fetch();
    }
    
    const remove = (gameName)=>{
        console.log("remove")
        homeRequests.removeGame(gameName);
        probs.fetch();
    }
    
    const renderGame = (game, index)=>{
        return <div key={index}>
            
            <ListGroup.Item >
                <Row>
                    <Col sm={6}>{game.gameName}</Col>
                    {game.enabled && <Col sm={2}><Button variant="danger" onClick={()=>disable(game.gameName)}>Disable </Button></Col>}
                    {!game.enabled && <Col sm={2}><Button variant="success" onClick={()=>enable(game.gameName)}>Enable </Button></Col>}
                    <Col sm={2}><Button onClick={()=>remove(game.gameName)} >Delete </Button></Col>
                </Row>
            </ListGroup.Item>
        </div>
    }
    return (
        
        <ListGroup  className="my-2" >
          {probs.games.map((game, index) => {
              
            return renderGame(game,index)
          })}
        </ListGroup>
      )
}

export default  GameList