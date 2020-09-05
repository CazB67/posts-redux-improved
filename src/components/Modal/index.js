import React from "react";
import { Modal, Button, Form } from 'react-bootstrap'

export default function SettingsModal(props) {
    return (
          <>
          <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Settings</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={props.onSubmit} className="p-4" style={{backgroundColor: "#DCDCDC", marginLeft: "30pt", marginRight:"30pt"}}>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label className="errorMessage">Name</Form.Label>
                    <Form.Control name="name" onChange={props.handleChange} className="timer" type="name" placeholder="Enter name"/>
                    <Form.Text className="text-muted">
                    Must be 4 or more characters long.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Color</Form.Label>
                    <Form.Control onChange={props.onChange} as="select">
                    <option value="grey">Dark Slate Grey</option>
                    <option value="blue">Midnight Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="black">Black</option>
                    </Form.Control>
                    </Form.Group>           
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={props.onClick}>Cancel</Button>
                <Button onClick={props.onSubmit} variant="dark" type="submit" active>
                    SUBMIT
                    </Button>
            </Modal.Footer>
         </Modal>
          </>
    );
  }

  