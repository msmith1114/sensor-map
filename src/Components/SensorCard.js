import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

const SensorCard = ({ props, sensor, toggleSensor }) => {
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
          >
          View
          </Link>
          <Button variant="info" size="sm">
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
