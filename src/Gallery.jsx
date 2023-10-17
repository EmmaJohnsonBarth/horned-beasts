import React from "react";
import HornedBeast from "./HornedBeast.jsx";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"



class Gallery extends React.Component {
  render() {

    // console.log('data: ', data);

    // let beasties = [];

    //added this.props:
    let beasties = this.props.data.map((newCritter, index) => {
      // beasties.push(
      return <HornedBeast
        title={newCritter.title}
        imageURL={newCritter.imageURL}
        addCritter={this.props.addCritter}
        // description={newCritter.description}
        key={index}
        handleOnShowModal={this.props.handleOnShowModal}
      />
    });

    console.log('beasties: ', this.props.data);

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