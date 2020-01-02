import React from 'react'
import SensorCard from './SensorCard';
import Table from 'react-bootstrap/Table'

class SensorTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          sensors: [{
            id: '1',
            name: 'Temp001DEV',
            device: 'Temp',
            temp: '56.4',
            humidity: '33.1',
            active: true
          }]
        };
    }

    componentDidMount() {

    }
  
    toggleSensor = (e) => {
      const id = e.target.getAttribute("data-id");
      console.log(`Toggling 'active' for sensor id: ${id}`);
      let index = this.state.sensors.findIndex(x => x.id === id);
      this.setState(state => {
        const sensors = state.sensors.map((sensor, j) => {
          if (j === index) {
            sensor.active = !sensor.active;
            return sensor;
          }
          else {
            return sensor
          }
        });

        return {
          sensors
        };
      });
    }

    render() {
      console.log(this.state.sensors)
      return (
        <div>
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
            {this.state.sensors.map((sensor) => {
              return (
                  <SensorCard key={sensor.id} sensor={sensor} toggleSensor={this.toggleSensor}/>
              );
            })}
            </tbody>
          </Table>
        </div>
      );
    }
  }

  export default SensorTable;