
import React, { useEffect, useState } from 'react';
import {  Form, Button, Col, Row, InputGroup,FormControl} from 'react-bootstrap';

import * as homeRequests from "../../requests/homeRequests"

export const UserForm = () =>{

    const [state, setState] = useState({

        userName: "",
    })

    const handleChange = (evt) =>{
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
    }

    const saveUser = () =>{

        homeRequests.addUser(state);

    }

    return (
        <Form>
        
            <Form.Group  controlId="formGridUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter email" name="userName" value={state.userName} onChange={handleChange} />
            </Form.Group>

            <Button onClick={saveUser}>Save </Button>
        </Form>
        
    )
}


export default UserForm

