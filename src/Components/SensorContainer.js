import React, { useState, useEffect } from "react";
import axios from "axios";
import SensorCard from "./SensorCard";
import SensorTable from "./SensorTable";
import "../Styles/Components/_SensorContainer.css";

function SensorContainer() {
  const [sensors, setSensors] = useState([]);
  const [data, setData] = useState([])

  useEffect(() => {
    // GET sensor list from API
    axios
    .get("http://localhost:3000/api/v1/devices.json")
    .then((response) => {
      // handle success
      console.log(response.data)
      setSensors(response.data.data)
      const mappedJSON = sensors.map(sensor => 
        ({ 
          id: sensor.id, 
          name: sensor.attributes['name'], 
          serialNum: sensor.attributes['serial-number'],
          status: sensor.attributes['device-status']
        })
      )
      setData(mappedJSON)
    })
    .catch((error) => {
      console.log(error);
    })
  }, [sensors.length]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Serial Number',
        accessor: 'serialNum',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
    ],
    []
  )
  return (
    <div>
      <SensorTable columns={columns} data={data} />
    </div>
  )
}

export default SensorContainer;
