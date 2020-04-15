import React from "react";
import axios from "axios";
import SensorCard from "./SensorCard";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "../Styles/Components/_SensorTable.css";

class SensorTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sensors: [],
      filterName: "",
      sortBy: "id",
    };
  }

  componentDidMount =() => {
    axios
      .get("http://localhost:3000/api/v1/devices.json")
      .then((response) => {
        // handle success
        console.log(response);
        this.setState({ sensors: [...response.data]});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  filterSort = () => {
    //Check for filter, then sort
    const sortVal = this.state.sortBy;
    if (this.state.filterName !== "") {
      const filteredSensors = this.state.sensors.filter((sensor) =>
        sensor.name.toLowerCase().includes(this.state.filterName.toLowerCase())
      );
      return filteredSensors.sort(function (a, b) {
        if (a[sortVal] < b[sortVal]) {
          return -1;
        }
        if (a[sortVal] > b[sortVal]) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    //If no filter exists, just sort
    else {
      return this.state.sensors.sort(function (a, b) {
        if (a[sortVal] < b[sortVal]) {
          return -1;
        }
        if (a[sortVal] > b[sortVal]) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  };

  handleFilterDropdown = (e) => {
    console.log(e.target.value);
    this.setState({ sortBy: e.target.value });
  };

  handleFilterText = (e) => {
    console.log(e.target.value);
    this.setState({ filterName: e.target.value });
  };

  toggleSensor = (e) => {
    const id = e.target.getAttribute("data-id");
    console.log(`Toggling 'active' for sensor id: ${id}`);
    let index = this.state.sensors.findIndex((x) => x.id === id);
    this.setState((state) => {
      const sensors = state.sensors.map((sensor, j) => {
        if (j === index) {
          sensor.active = !sensor.active;
          return sensor;
        } else {
          return sensor;
        }
      });

      return {
        sensors,
      };
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="filterDiv">
          <Form>
            <Form.Row>
              <Col>
                <Form.Label>Sort By</Form.Label>
                <Form.Control as="select" onChange={this.handleFilterDropdown}>
                  <option value="name">Sensor Name</option>
                  <option value="device">Device Type</option>
                  <option value="active">Active?</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Label>Search By Device Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Device#"
                  onChange={this.handleFilterText}
                />
              </Col>
            </Form.Row>
          </Form>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Sensor Name</th>
              <th>Device Type</th>
              <th>Temp</th>
              <th>Humidity</th>
              <th>Active?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.filterSort().map((sensor) => {
              return (
                <SensorCard
                  key={sensor.id}
                  sensor={sensor}
                  toggleSensor={this.toggleSensor}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default SensorTable;
