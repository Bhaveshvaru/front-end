import React from 'react';
import { Navbar, Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const message = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Arkenea</Navbar.Brand>
      </Navbar>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Form Add Successfully!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Thanks for your interest. We will revert you in 24 hours..!</p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={() => {
              history.goBack();
            }}
            variant="secondary"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
};

export default message;
