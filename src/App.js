import React from 'react';
import './App.css';
import { Container, Form, Button } from 'react-bootstrap';

function App() {
  return (
  
     <Container className="mt-5">
          
              <Form>
              <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasictext">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" placeholder="enter name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>message</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
               
              </Form>
              </Container>

  );
}

export default App;
