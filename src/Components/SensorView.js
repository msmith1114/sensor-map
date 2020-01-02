import React from "react";

const SensorView = (props) => {
    const { id, name, device, temp, humidity, active } = props.location.state.sensor
      return (
        <div>
            Hello
            <br/>
            {id}
            <br/>
            {name}
            <br/>
            {device}
            <br/>
            {temp}
            <br/>
            {humidity}
            <br/>
            {active}
            {console.log(props.location.state)}
        </div>
      );
  };
  
  export default SensorView;