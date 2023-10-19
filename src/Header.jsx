import React from "react";

class Header extends React.Component {
    render() {
        return (
            <>
                <h1>Horned Beasts (but not where to find them){this.props.beasties}</h1>
            </>
        );
    }
}

export default Header;