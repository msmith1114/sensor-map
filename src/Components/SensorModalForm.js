import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SensorModalForm = props => {
  const [deviceName, setName] = useState(props.name);
  const [deviceType, setType] = useState(props.device);

  const handleSubmit = e => {
    props.handleSubmit(deviceName, deviceType);
    console.log(e.target)
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Device Name</Form.Label>
            <Form.Control
              type="text"
              value={deviceName}
              onChange={e => setName(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicDevice">
            <Form.Label>Device Type</Form.Label>
            <Form.Control
              type="text"
              value={deviceType}
              onChange={e => setType(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SensorModalForm;
