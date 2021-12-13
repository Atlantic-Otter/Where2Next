import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CheckoutForm = ({ handleSubmit }) => {

  return (
    <Form id="checkout-form" >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We won't spam you.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Credit card:</Form.Label>
        <Form.Control type="text" placeholder="Card number" required />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Expires:</Form.Label>
        <Form.Control type="password" placeholder="MM/YYYY" required />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Security code:</Form.Label>
        <Form.Control type="password" placeholder="CVV" required />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Checkout
      </Button>
    </Form>
  );

};

export default CheckoutForm;