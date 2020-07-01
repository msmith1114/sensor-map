import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import MapContainer from './MapContainer';

const SensorView = (props) => {
  const [data, setData] = useState([]);
  

  const {
    id,
    name,
    serialNum,
    status,
    longitude,
    latitude
  } = props.location.state.sensor;

  useEffect(() => {
    // GET sensor list from API
    axios
      .get(`http://localhost:3000/api/v1/devices/${id}/measurements`)
      .then((response) => {
        // handle success
        console.log(response.data);
        const data = response.data.data.map((measurement) => ({
          id: measurement.id,
          value: measurement.attributes.value,
          measurement_unit: measurement.attributes["measurement-unit"],
          measurement_value: measurement.attributes["measurement-value"],
          created_at: measurement.attributes["created-at"]
        }));
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data.length]);

  return (
    <div>
      <br />
      {id}
      <br />
      {name}
      <br />
      {serialNum}
      <br />
      {status}
      <br />
      {longitude}
      <br />
      {latitude}
      {console.log(props.location.state)}
      <br />
      <LineChart width={1200} height={600} data={data} margin={{ top: 5, right: 30, left: 50, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="created_at" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" dot={true} stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default SensorView;
