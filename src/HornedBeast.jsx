//eslint disable?

import React from 'react';
//from demo code:
// import Button from 'react-bootstrap/Button';
import './App.css'
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

handleLikes = () => {
    this.setState({
        likes: this.state.likes + 1,
        //whatever else needs updating
    });
};

//pizzaNeeded in demo code here
//pizzaGot in demo code here

    //yesterday's stuff:
    render() {
        return (
            <>
            {/* {name and desc} */}
            <article>
                {/* {add props to display} */}
                <h2>{this.props.title}</h2>
                <p>{this.state.likes} Likes</p>
                <p onClick={this.handleLikes}>Click to like this creature</p>
            </article>



                <img src={this.props.imageURL} alt={this.props.description} title={this.props.title}/>
                <p>{this.props.description}</p>
                <p>This is a creature.</p>

            </>
        )
    }
}

export default HornedBeast