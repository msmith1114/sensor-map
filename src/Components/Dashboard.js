import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {Table} from "antd";
import "antd/dist/antd.css";
import SensorTable from "./SensorTable"
import SensorCard from "./SensorCard";
import axios from "axios";

const Dashboard = () => {
  const [sensors, setSensors] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // GET sensor list from API
    axios
      .get("http://localhost:3000/api/v1/devices.json")
      .then((response) => {
        // handle success
        console.log(response.data);
        setSensors(response.data.data);
        const mappedJSON = sensors.map((sensor, index) => ({
          key: index,
          id: sensor.id,
          name: sensor.attributes["name"],
          serialNum: sensor.attributes["serial-number"],
          status: sensor.attributes["device-status"],
          latitude: sensor.attributes.latitude,
          longitude: sensor.attributes.longitude
        }));
        setData(mappedJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sensors.length]);
  
  return (
    <div>
        <SensorTable dataSource={data} />
    </div>
  );
};

export default Dashboard;
