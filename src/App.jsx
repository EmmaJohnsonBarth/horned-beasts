//"React components" / "Dependancies":
import React from 'react';
import './App.css';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"
import Gallery from "./Gallery.jsx"
// import Modal from "react-bootstrap/Modal"
import data from "./data.json"
import SelectedBeast from './SelectedBeast';
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

  handleOnShowModal = (hornedBeast) => {
    this.setState({
      showModal: true,
      selectBeast: hornedBeast
    })
  };

  render() {
    // console.log("data: ", this.state.selectBeast)
    return (

      <>

        <Header heart={this.state.heart} />

        <Gallery
          data={data}
          addHeart={this.addHeart}

          //pass unc to Gallery then to HornedBeast to title will invoke arrow func in parent
          handleOnShowModal={this.handleOnShowModal}
        />

        <Footer />

        <SelectedBeast show={this.state.showModel} onHide={this.handleOnHide} selectBeast={this.state.selectBeast} />


      </>
    )
  }
}

export default App;