import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {settingName} from '../../redux/actions';
import { useHistory } from "react-router-dom";

export default function SignInForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleChange = async (event) => {
        event.preventDefault()
        setName(event.target.value.trim().toLowerCase());
      }

    const onSubmit = async (event) => {
        event.preventDefault();
        if(name.length > 3 ) {
            dispatch(settingName(name))
            history.push("/dashboard");
        }
    
    }

    return (
        <>
      <Row className="text-center mb-3">
        <Col>
          <h1 className="text-center mt-5">Sign in</h1>
        </Col>
      </Row>

      <Form onSubmit={onSubmit} className="p-4" style={{backgroundColor: "#DCDCDC", marginLeft: "30pt", marginRight:"30pt"}}>
        <Form.Group controlId="formBasicEmail">
        <Form.Label className="errorMessage">Name</Form.Label>
        <Form.Control name="name" onChange={handleChange} className="timer" type="name" placeholder="Enter name"/>
        <Form.Text className="text-muted">
        Must be 4 or more characters long.
        </Form.Text>
        </Form.Group>
        <Button onClick={onSubmit} variant="dark" type="submit" active>
        SUBMIT
        </Button>
      </Form>
      </> 
    );
}