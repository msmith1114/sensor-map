import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SensorModalForm = props => {
  const [name, setName] = useState(props.name);
  const [device, setDevice] = useState(props.device);

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => props.handleSave(e, name, device)}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Device Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
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
              value={device}
              onChange={e => setDevice(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>text</Modal.Footer>
    </Modal>
  );
};

export default SensorModalForm;
