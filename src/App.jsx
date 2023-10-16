//will have imports, be class-based componenets

import React from 'react';
import '.App.css';
import Header from " ./Header.jsx"
import Footer from "./Footer.jsx"
import Gallery from "./Gallery.jsx"

//import header component
//import the main (html main) componenet

class App extends React.Componenet {

  //can add functions etc
  //need a return method to see stuff in the browser

  render() {

    return (
    //app component should render a header, footer, and gallery component

    //Header:

    //app component should render a header, footer, and gallery component
    //Header:
    <>

    {/*new thingy*/}
      <Header />
      
      {/* {Main Section Here} */}
      <Gallery />
      
      <Footer />

      </>
    )
  }
}

export default App;