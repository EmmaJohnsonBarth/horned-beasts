//eslint disable?

import React from 'react';

class HornedBeast extends React.Component {
    render(){
        return (
            <>
            {/* {name and desc} */}
            <article>
                {/* {add props to display} */}
                <h2>{this.props.title}</h2>
                <img src="this.props.imgUrl" alt="this.props.description" title="this.props.title"/>
                <p>{this.props.description}</p>
                <p>This is a creature.</p>
            </article>
            </>
        )
    }
}

export default HornedBeast