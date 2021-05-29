import React from 'react';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import * as homeRequests from "../../requests/homeRequests"

const UserList = (probs)=>{

    // const disable = (gameName)=>{
    //     probs.fetch();
    //     homeRequests.disableComment(gameName);
    //     probs.fetch();
    // }
    // const enable = (gameName)=>{
    //     probs.fetch();
    //     homeRequests.enableComment(gameName);
    //     probs.fetch();
    // }
    
    const remove = (userName)=>{
        console.log("remove")
        homeRequests.removeUser(userName);
        probs.fetch();
    }
    
    const renderUser = (user, index)=>{
        return <div key={index}>
            
            <ListGroup.Item >
                <Row>
                    <Col sm={6}>{user.userName}</Col>
                    {/* {game.enabled && <Col sm={2}><Button onClick={()=>disable(game.gameName)}>Disable </Button></Col>}
                    {!game.enabled && <Col sm={2}><Button onClick={()=>enable(game.gameName)}>Enable </Button></Col>} */}
                    <Col sm={2}><Button onClick={()=>remove(user.userName)} >Delete </Button></Col>
                </Row>
            </ListGroup.Item>
        </div>
    }
    return (
        
        <ListGroup  className="my-2" >
          {probs.users.map((user, index) => {
              
            return renderUser(user,index)
          })}
        </ListGroup>
      )
}

export default  UserList