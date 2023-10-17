import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
//This the CSS we want?:
import './App.css'
//Need this one?:
// import data from "./data.json"

// import heart from './images/heart.png'
// import './index.css'

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
            //can add others here
        };
    }

    //arrow function, method that takes an object
    handleLikes = () => {
        this.setState({
            likes: this.state.likes + 1,
            //whatever else needs updating
        });
    };

    //pizzaNeeded in demo code here
    //pizzaGot in demo code here

    helperFunctionH3Click = () => {
        this.props.handleOnShowModal(this.props)
    }

    render() {
        return (
            //between the <>s is a fragment
            <>
                <Col>
                    <Card className="h-100 p-3">
                        <Card.Body>
                            <Card.Title onClick={this.helperFunctionH3Click}>{this.props.title}</Card.Title>

                            <Card.Img
                                variant="top"
                                src={this.props.imageURL}
                                alt={this.props.title}
                                title={this.props.title}
                                //addCritter?:
                                onClick={this.props.addCritter}
                            />

                            <h3>{this.props.title}</h3>
                            <p >{'\u2764'} {this.state.likes} Likes </p>
                            <Button variant="primary" onClick={this.handleLikes}>Like image</Button>
                            {/* <p onClick={this.props.addCritter}></p> */}
                            {/* Need/Got Pizza Buttons Here */}
                        </Card.Body>
                    </Card>
                </Col>

                {/* Move to other page?:
                <img src={this.props.imageURL} alt={this.props.description} title={this.props.title} />
                <p>{this.props.description}</p> */}
            </>
        )
    }
}

export default HornedBeast