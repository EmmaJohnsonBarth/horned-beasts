//"React components" / "Dependancies":
import React from 'react';
import './App.css';
import Modal from "react-bootstrap/Modal"
// import { Card } from 'react-bootstrap';

class SelectedBeast extends React.Component {

    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.selectBeast.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.selectBeast.imageURL} />
                        <p>{this.props.selectBeast.description}</p>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default SelectedBeast;