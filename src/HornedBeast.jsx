import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import './App.css'

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        };
    }

    handleLikes = () => {
        this.setState({
            likes: this.state.likes + 1,
        });
    };

    helperFunctionH3Click = () => {
        this.props.handleOnShowModal(this.props)
    }

    render() {
        return (
            <>
                <Col>
                    <Card className="h-100 p-3">
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Img
                                variant="top"
                                src={this.props.imageURL}
                                alt={this.props.title}
                                title={this.props.title}
                                onClick={this.helperFunctionH3Click}
                            />
                            <h3>{this.props.title}</h3>
                            <p >{'\u2764'} {this.state.likes} Likes </p>
                            <Button variant="primary" onClick={this.handleLikes}>Like image</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
}

export default HornedBeast