
import React, { useEffect, useState } from 'react';
import {  Form, Button, Col, Row, InputGroup,FormControl} from 'react-bootstrap';

import * as homeRequests from "../../requests/homeRequests"

export const GameForm = () =>{
    const initialState = {
        gameName: "",
        genre: [],
        photo: "",
        enabled: true,
    }
    const initialLocalState = {
        currentGenre : "",
        fields: [],
        currentField:"",

    }
    const [state, setState] = useState(initialState)

    const [localState, setLocalState] = useState(initialLocalState)



    const addGenre = () =>{
        if (localState.currentGenre === "")
        {
            return;
        }
        const newGenres = state.genre.slice();
        newGenres.push(localState.currentGenre);
        setLocalState( {
            ...localState,
            currentGenre:""
            });
        setState({
            ...state,
            genre: newGenres,
          });

        
    }
    const addField = () =>{
        if (localState.currentField === "")
        {
            return;
        }
        const newFields = localState.fields.slice();
        newFields.push(localState.currentField);

        setState({
            ...state,
            [localState.currentField]:"",
          });
        setLocalState({
            ...localState,
            fields: newFields,
            currentField:""
          });


    }

    const handleChange = (evt) =>{
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });

        
    }

    const handleLocalChange = (evt) =>{
        const value = evt.target.value;
        setLocalState({
          ...localState,
          [evt.target.name]: value
        });


    }

    const saveGame = () =>{
        homeRequests.addGame(state);
        setState(initialState);
        setLocalState(initialLocalState);

    }


    return (
        <Form>
        
            <Form.Group  controlId="formGridGameName">
                <Form.Label>Game Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Game Name" name="gameName" value={state.gameName} onChange={handleChange} />
            </Form.Group>
            <Form.Group  controlId="formGridGenre">
                <Form.Label>Genre</Form.Label>
                {state.genre.map((item) => (
                    <li key={item}>{item}</li>
                ))}
                <InputGroup className="mb-3">
                    <FormControl aria-label="Text input with checkbox" name="currentGenre" value={localState.currentGenre} onChange={handleLocalChange} />
                    <Button onClick={addGenre}/>
                </InputGroup>
            </Form.Group>
            <Form.Group  controlId="formGridPhoto">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="text" placeholder="Enter Image URL" name="photo" value={state.photo} onChange={handleChange} />
            </Form.Group>
            <Form.Group  controlId="formGridField">
                <Form.Label>Add Field</Form.Label>
                <InputGroup className="mb-3">
                    <FormControl aria-label="Text input with checkbox" name="currentField" value={localState.currentField} onChange={handleLocalChange} />
                    <Button onClick={addField}/>
                </InputGroup>
            </Form.Group>
            {localState.fields.map((item) => (
                <Form.Group key={item} controlId="formGridGameName">
                    <Form.Label>{item}</Form.Label>
                    <Form.Control type="text" placeholder={"Enter ".concat(item)} name={item} value={state.item} onChange={handleChange} />
                </Form.Group>
                ))}
            <Button onClick={saveGame}>Save </Button>
        </Form>
        
    )
}


export default GameForm

