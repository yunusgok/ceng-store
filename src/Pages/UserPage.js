import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

import * as userRequests from "../requests/userRequests";
import * as homeRequests from "../requests/homeRequests";
import CustomNavbar from "../components/navbar"
import UserDetail from "../components/user/userDetail"
import UserGameList from "../components/user/userGameList"



const UserPage = (probs) => {
    const userName = probs.match.params.userName;
    const [state, setState] = useState({
        userDetail:{
            userName: "",
            comments: [],
            avgRate: {
                "$numberDouble": ""
            },
            mostPlayedGame: {
                gameName:"",
            },
            totalPlayTime:{
                "$numberLong": ""
            },
    
        },
        games:[],

    }); 
    useEffect(() => {
        fetchUserDetail()

      }, []);


    const fetchUserDetail = ()=>{
        userRequests.getUserDetail(userName)
        .then((data)=>setState({
            ...state,
            userDetail: data,
        }))

    }

    const fetchGames= ()=>{
        homeRequests.getAllGames().then((data)=> setState(
            {...state,
            games: data}));
        
    }

    return (
        <div>

            <CustomNavbar/>
            <Container>
                <Row>
                    <Col>
                        <Button onClick={fetchUserDetail}>Update User Detail</Button>
                        {<UserDetail userDetail={state.userDetail}></UserDetail>}
                    </Col>
                    <Col>
                        <Button onClick={fetchGames}>Fetch Games</Button>
                        <Row>
                            <UserGameList games={state.games} userName={userName} fetchUser={fetchUserDetail} fetchGames={fetchGames} ></UserGameList>
                        </Row>
                    </Col>

                </Row>

            </Container>
        </div>
)
}
  

export default UserPage
