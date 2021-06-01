import { Row, Col, Container, Button, Accordion,Card} from 'react-bootstrap';

import GameDetail from "./gameDetail"

const GameList = (probs) =>{
    const games = probs.games;

    return (
        <Accordion>

        <div>
            {games.map((game,index)=> 
            <GameDetail game={game} key={index} index={index}></GameDetail>
            )}
        </div>
        </Accordion>
    )
}

export default GameList;