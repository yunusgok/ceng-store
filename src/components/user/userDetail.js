

import { Col, Row, Badge, ListGroup} from 'react-bootstrap';


const UserDetail = (probs) => {


    const renderComment = (comment, index) => {

        return(
            <div key={index}>
                <ListGroup.Item >
                    <Row>
                        <Col>{comment.gameName}</Col>
                        <Col>{comment.comment}</Col>
                    </Row>
                </ListGroup.Item>
            </div>
        )
    }
    const renderComments = (comments)=>{
        return comments.map((comment, index)=>{
            return renderComment(comment, index);
        })
    }

    const userDetail = probs.userDetail;
    return (
        <div>
            <Row>
                <Col xs={12}>
                    <Badge variant="secondary">Username </Badge> {userDetail.userName}
                    
                </Col>
                <Col xs={12}>
                    <Badge variant="secondary">Average Rate </Badge> {userDetail.avgRate && userDetail.avgRate["$numberDouble"]}
                </Col>
                <Col xs={12}>
                    <Badge variant="secondary">Most Played Game </Badge> {userDetail.mostPlayedGame[0] && userDetail.mostPlayedGame[0].gameName}
                </Col>
                <Col xs={12}>
                    <Badge variant="secondary">Total Play Time </Badge> {userDetail.totalPlayTime && userDetail.totalPlayTime["$numberDouble"]}
                </Col>
                <Col xs={12}>
                    <ListGroup.Item className="bg-danger text-white">
                        <Row>
                            <Col>Game Name</Col>
                            <Col>Comment</Col>
                        </Row>
                    </ListGroup.Item>
                    {renderComments(userDetail.comments)}
                </Col>
            </Row>

            
        </div>
    )
} 


export default UserDetail;