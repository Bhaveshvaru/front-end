/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Container, Form, Button, Navbar } from 'react-bootstrap';
import {  useHistory } from 'react-router-dom';
import axios from 'axios';

const form = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handlemail = (event) => {
    setEmail(event.target.value);
  };

  const handlename = (event) => {
    setName(event.target.value);
  };

  const handlemessage = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    const data = {
      name: `${name}`,
      email: `${email}`,
      message: `${message}`,
    };

    axios
      .post('http://localhost:2000/api/createform', { data })
      .then((data) => {
        console.log('data', data);
        history.push('/message');
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Arkenea</Navbar.Brand>
      </Navbar>
      <Container className="mt-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              name="email"
              onChange={handlemail}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>enter name</label>
            <input
              onChange={handlename}
              name="name"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="name"
            />
          </div>
          <div className="form-group">
            <label>Enter message</label>
            <textarea
              onChange={handlemessage}
              name="message"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button
            onClick={handleClick}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </Container>
    </>
  );
};

export default form;
