import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

import UserForm from "./home/userForm"
import GameList from "./home/gameList"
import * as homeRequests from "../requests/homeRequests"
import UserList from './home/userList';


const HomeGame = () =>{

    const [users, setUsers] = useState([]);
    

    useEffect(() => {
        fetchUsers()
      }, []);

    const fetchUsers = ()=>{
        homeRequests.getAllUsers().then((data)=> setUsers(data));

    }

    return (
        <Row>
            <Col xs={12} md={6}><UserForm/></Col>

            <Col xs={12} md={6}>

                <Button onClick={fetchUsers}>Fetch Users</Button>

                <UserList users={users} fetch={fetchUsers} />

            </Col>
        </Row>
    )
    
}


export default HomeGame