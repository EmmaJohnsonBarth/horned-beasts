//eslint disable?

import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css'
// import heart from './images/heart.png'
//need this?:
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

    render() {
        return (
            //between the <>s is a fragment
            <>
                <article>
                    <h2>{this.props.title}</h2>
                    <p >{'\u2764'} {this.state.likes} Likes </p>
                    <Button variant="primary" onClick={this.handleLikes}>Like image</Button>
                </article>

                <img src={this.props.imageURL} alt={this.props.description} title={this.props.title} />
                <p>{this.props.description}</p>

            </>
        )
    }
}

export default HornedBeast