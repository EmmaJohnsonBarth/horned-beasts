import React from "react";
import HornedBeast from "./HornedBeast.jsx";
import data from "./data.json"

class Gallery extends React.Component {
  render() {

    console.log('data: ', data);

    let beasties = [];

    data.forEach((newCritter, index) => {
      beasties.push(<HornedBeast 
      title = {newCritter.title}
      imageURL = {newCritter.imageURL}
      key = {index}
      />)
    })

    console.log('beasties: ', beasties);

    return (
      <>
        <main>
          {beasties}
        </main>
      </>
    )
  }
}

export default Gallery;