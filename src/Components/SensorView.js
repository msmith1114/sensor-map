import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const SensorView = props => {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 500, pv: 1333, amt: 1000 }
  ];
  const {
    id,
    name,
    device,
    temp,
    humidity,
    active
  } = props.location.state.sensor;
  return (
    <div>
      Hello
      <br />
      {id}
      <br />
      {name}
      <br />
      {device}
      <br />
      {temp}
      <br />
      {humidity}
      <br />
      {active}
      {console.log(props.location.state)}
      <br />
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default SensorView;
