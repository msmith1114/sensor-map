/* eslint-disable */
import React, { useState } from "react";
import SensorModalForm from './SensorModalForm'
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


const SensorCard = ({ props, sensor, toggleSensor }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = e => {
    console.log("Submitted")
    //do stuff here to update values
  }
  if (sensor) {
    const { id, name, device, temp, humidity, active } = sensor;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{device}</td>
        <td>{temp}</td>
        <td>{humidity}</td>
        <td>{active ? "True" : "False"}</td>
        <td>
          <Link
            to={{
              pathname: `/devices/${id}`,
              state: { sensor: sensor }
            }}
            className="btn btn-info btn-sm"
          >
            View
          </Link>
          <SensorModalForm device={device} name={name} handleClose={handleClose} handleSubmit={handleSubmit} show={show}/>
          <Button variant="info" size="sm" onClick={handleShow}>
            Edit
          </Button>
          <Button variant="info" size="sm" data-id={id} onClick={toggleSensor}>
            Toggle Active
          </Button>
        </td>
      </tr>
    );
  }
};

export default SensorCard;
