import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission based on isSignUp prop
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form
            onSubmit={handleSubmit}
            className="p-5 shadow-sm bg-white"
            style={{ borderRadius: "15px" }}
          >
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="success" type="submit" className="mt-3">
              Login
            </Button>

            <div className="forgot-password mt-2">
              <a href="#">Forget Password</a>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
