import React from "react";
import HornedBeast from "./HornedBeast.jsx";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

// Need?: import data from "./data.json"

class Gallery extends React.Component {
  render() {

    // console.log('data: ', data);

    let beasties = [];

    data.forEach((newCritter, index) => {
      beasties.push(
      <HornedBeast
        title={newCritter.title}
        imageURL={newCritter.imageURL}
        addCritter={this.props.addCritter}
        // description={newCritter.description}
        key={index}
        handleOnShowModal = {this.props.handleOnShowModal}
      />
      );
    })

    // console.log('beasties: ', beasties);

    return (
      <>
        <main>
          <Container>
            <Row lg={4} md={3} sm={2} xs={1}>
               {beasties}
            </Row>
          </Container>
        </main>
      </>
    );
  }
}

export default Gallery;