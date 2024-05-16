import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Modal, Form } from 'react-bootstrap';

const CustomNavbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    fetch('login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => {
      if (response.ok) {
        setLoggedIn(true);
        setShowLoginModal(false);
      } else {
        // To Handle login error
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const handleLogout = () => {
    fetch('http://localhost:8000/stocks/logout/')
    .then(response => {
      if (response.ok) {
        setLoggedIn(false);
      } else {
        // To Handle logout error
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Stock Watchlist</Navbar.Brand>
          <Nav className="ml-auto">
            {loggedIn ? (
              <Button variant="outline-primary" onClick={handleLogout}>Logout</Button>
            ) : (
              <Button variant="outline-primary" onClick={() => setShowLoginModal(true)}>Login</Button>
            )}
          </Nav>
        </Container>
      </Navbar>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleLoginModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomNavbar;
