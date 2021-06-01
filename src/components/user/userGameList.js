import React from 'react';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import * as homeRequests from "../../requests/homeRequests"
import UserGameDetail from "./userGameDetail"


const UserGameList = (probs)=>{



    return (
        
        <ListGroup  className="my-2" >
          {probs.games.map((game, index) => {
              
            return <UserGameDetail game={game} key={index} fetchUserDetail={probs.fetchUserDetail} fetchGames={probs.fetchGames} userName={probs.userName}></UserGameDetail>
        })}
        </ListGroup>
      )
}

export default  UserGameList