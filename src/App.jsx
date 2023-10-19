import React from 'react';
import './App.css';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"
import Gallery from "./Gallery.jsx"
import data from "./data.json"
import SelectedBeast from './SelectedBeast';
import Form from 'react-bootstrap/Form'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      heart: "",
      showModal: false,
      selectBeast: "",
      sortedData: data,
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



  handleSelect = (event) => {
    let selected = event.target.value;
    console.log("selected, pre-elseIf", selected)

    if (selected === "1") {
      console.log("selected, elseIf:", selected)
      let filteredChoice = data.filter(item => item.horns === 1 );
      console.log(filteredChoice)
      this.setState({ sortedData: filteredChoice });
    } else if (selected === "2") {
      console.log("selected, elseIf:", selected)
      let filteredChoice = data.filter(item => item.horns === 2 );
      console.log(filteredChoice)
      this.setState({ sortedData: filteredChoice });
    } else if (selected === "3") {
      console.log("selected, elseIf:", selected)
      let filteredChoice = data.filter(item => item.horns === 3 );
      console.log(filteredChoice)
      this.setState({ sortedData: filteredChoice });
    } else if (selected === "100") {
      console.log("selected, elseIf:", selected)
      let filteredChoice = data.filter(item => item.horns === 100 );
      console.log(filteredChoice)
      this.setState({ sortedData: filteredChoice});
    }
  };



  render() {

    return (

      <>

        <Header heart={this.state.heart} />

        <Form>
          <Form.Select
            name="selected"
            onChange={this.handleSelect}>
            <option>How many horns ya want</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">One Hundred</option>
          </Form.Select>
        </Form>


        <Gallery
          data={this.state.sortedData}
          addHeart={this.addHeart}
          handleOnShowModal={this.handleOnShowModal}
        />

        <Footer />

        <SelectedBeast show={this.state.showModal} onHide={this.handleOnHide} selectBeast={this.state.selectBeast} />



      </>
    )
  }
}

export default App;