import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SensorModalForm = props => {
  const handleDeviceType = e => {
    console.log("hi");
    console.log(e.target.value);
  };

  const handleDeviceName = e => {
    console.log("hi");
    console.log(e.target.value);
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Device Name</Form.Label>
            <Form.Control
              type="text"
              value={props.name}
              onChange={handleDeviceName}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicDevice">
            <Form.Label>Device Type</Form.Label>
            <Form.Control
              type="text"
              value={props.device}
              onChange={handleDeviceType}
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
