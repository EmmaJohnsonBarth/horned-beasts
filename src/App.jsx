import React from 'react';
import './App.css';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"
import Gallery from "./Gallery.jsx"
import data from "./data.json"
import SelectedBeast from './SelectedBeast';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      heart: "",
      showModal: false,
      selectBeast: "",
    };
  }

  addHeart = () => {
    this.setState({
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

        <SelectedBeast show={this.state.showModal} onHide={this.handleOnHide} selectBeast={this.state.selectBeast} />

      </>
    )
  }
}

export default App;