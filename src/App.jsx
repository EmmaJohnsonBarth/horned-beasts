//"React components" / "Dependancies":
import React from 'react';
import './App.css';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"
import Gallery from "./Gallery.jsx"
import Modal from "react-bootstrap/Modal"
import data from "./data.json"
// import HornedBeast from './HornedBeast';

class App extends React.Component {

  //can add functions etc
  //need a return method to see stuff in the browser

  constructor(props) {
    super(props);
    this.state = {
      //emoji hearts
      //check these names?
      heart: "",
      showModal: false,
      selectBeast: "",
    };
  }

  //handle emoji hearts:
  addHeart = () => {
    this.setState({
      //lightbulb thing suggests: `{this.state.heart}<3`
      heart: `${this.state.heart}❤️`
    })
  }

  handleOnHide = () => {
    this.setState({
      showModal: false
    })
  };

  handleOnShowModal = (HornedBeast) => {
    this.setState({
      showModal: true,
      selectBeast: HornedBeast
    })
  };

  render() {

    return (

      <>

        <Header heart={this.state.heart} />

        <Gallery
          addHeart={this.addHeart}

          //pass unc to Gallery then to HornedBeast to title will invoke arrow func in parent
          handleOnShowModal={this.handleOnShowModal}
        />

        <Footer />

        <Modal show={this.state.showModal} onHide={this.handeOnHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectBeast}</Modal.Title>
          </Modal.Header>
        </Modal>

      </>
    )
  }
}

export default App;