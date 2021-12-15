import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CheckoutForm = ({ handleSubmit, updateText, validated }) => {

  return (
    <div id="checkout-form-container" >
      <Form id="checkout-form" noValidate validated={validated} onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="validationCustom01" >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            onChange={updateText}
            defaultValue="e@e.com"
          />
          <Form.Control.Feedback type="invalid">
            Email is required.
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            We won't spam you.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="validationCustom02">
          <Form.Label>Credit card:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Card number"
            onChange={updateText}
            defaultValue="1234123412341234"
          />
          <Form.Control.Feedback type="invalid">
            Credit card is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="validationCustom03">
          <Form.Label>Expires:</Form.Label>
          <Form.Control
            required type="text"
            placeholder="MM/YYYY"
            onChange={updateText}
            defaultValue="05/3030"
          />
          <Form.Control.Feedback type="invalid">
            Expiration date required.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="validationCustom04" >
          <Form.Label>Security code:</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="CVV"
            onChange={updateText}
            defaultValue="000"
          />
          <Form.Control.Feedback type="invalid">
              CVV security code required.
          </Form.Control.Feedback>
        </Form.Group>


        <Button id="checkout-button" variant="primary" type="submit" >
          Checkout
        </Button>
      </Form>
    </div>
  );

};

export default CheckoutForm;