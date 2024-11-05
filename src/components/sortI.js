import React, { useState } from "react";
import { Button, Modal, Form, Container, Row, Col } from "react-bootstrap";

const SortI = () => {

  const [show, setShow] = useState(false);
  const [assets, setAssets] = useState("");
  // const [arr, setArr] = useState([]);
  let arr = [];

  const [assetA, setAssetA] = useState("a");
  const [assetB, setAssetB] = useState("b");
  const [userInput, setUserInput] = useState(false);


  const handleChange = (event) => {
    setAssets(event.target.value);
  };

  const handleClose = (setVal) => {
    setUserInput(setVal);
    setShow(false);
  };

  const handleSubmit = () => {
    // setArr(assets.split(' '));
    arr = assets.split(' ');
    console.log(arr);
    //send user input to python BE make handleShow callback initially and add event listener for BE prompting user for input
    handleShow();
  }

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <h1>{userInput.toString()}</h1>
      <br />
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter a list of assets sparated by a space</Form.Label>
          <Form.Control 
            type="text"
            value={assets}
            onChange={handleChange}
            />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <br />
      <br />
      <br />
      <Modal show={show} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{assets}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Is asset [{assetA}] outpacing asset [{assetB}]
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleClose(true)}>
            Yes
          </Button>
          <Button variant="primary" onClick={() => handleClose(false)}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SortI;
