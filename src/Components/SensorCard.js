/* eslint-disable */
import React, { useState } from "react";
import axios from "axios";
import SensorModalForm from './SensorModalForm'
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


const SensorCard = ({ props, sensor, toggleSensor }) => {
  const [show, setShow] = useState(false);

  const handleSave = (e, name, device) => {
    e.preventDefault()
    setShow(false)
    console.log(name)
    console.log(device)
    console.log("Submitted")
    axios({
      method: 'put',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      data: {
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1
        }
    })
    .then(function (response) {
      console.log(response.data);
      console.log(response.status);
    });
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <SensorModalForm device={device} name={name} handleClose={handleClose} handleSave={handleSave} show={show}/>
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
