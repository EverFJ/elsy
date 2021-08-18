import React from "react";
import Box from "./components/Box";
// import "./styles/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

// créer un array d objet avec les props (clé + valeur)
// Utiliser un map pour assigner les props

// const boxes = [
//   { icon: "local_drink", color: "#3A85FF", value: 1.5, unit: "L" },
//   { icon: "directions_walk", color: "black", value: 3000, unit: "steps" },
//   { icon: "favorite", color: "red", value: 120, unit: "bpm" },
//   { icon: "wb_sunny", color: "yellow", value: -10, unit: "°C" },
// ];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
    };
  }

  onHeartChange = (e) => {
    this.setState({
      heart: e,
    });
  };
  onTempChange = (e) => {
    this.setState({
      temperature: e,
    });
  };
  onStepChange = (e) => {
    this.setState({
      steps: e,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          <Box
            icon="local_drink"
            color="#3A85FF"
            value={this.state.water}
            unit="L"
            primary
            water
          />
          {/* Steps */}
          <Box
            icon="directions_walk"
            color="black"
            value={this.state.steps}
            unit="steps"
            min={stepsMin}
            max={stepsMax}
            onChange={this.onStepChange}
          />
          {/* Heart */}
          <Box
            icon="favorite"
            color="red"
            value={this.state.heart}
            unit="bpm"
            primary
            min={heartMin}
            max={heartMax}
            onChange={this.onHeartChange}
          />
          {/* Temperature */}
          <Box
            icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            unit="°C"
            min={tempMin}
            max={tempMax}
            onChange={this.onTempChange}
          />

          {/* ALL BOXES IN ONE OPERATION */}
          {/* {boxes.map((elem, index) => (
            <Box
              icon={elem.icon}
              color={elem.color}
              value={elem.value}
              unit={elem.unit}
              primary={index % 2 === 0}
            />
          ))} */}

          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>
        </div>
      </div>
    );
  }
}

export default App;
