import React from "react";
import Box from "./components/Box";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

// créer un array d objet avec les props (clé + valeur)
// Utiliser un map pour assigner les props
const propsArray = [
  { icon: "local_drink", color: "#3A85FF", value: 1.5, unit: "L" },
  { icon: "directions_walk", color: "black", value: 3000, unit: "steps" },
  { icon: "favorite", color: "red", value: 120, unit: "bpm" },
  { icon: "wb_sunny", color: "yellow", value: -10, unit: "°C" },
];

export class App extends React.Component {
  render() {
    console.log("propsArray", propsArray.map((elem) => elem.icon)[0]);
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          <Box
            icon={propsArray.map((elem) => elem.icon)[0]}
            color={propsArray.map((elem) => elem.color)[0]}
            value={propsArray.map((elem) => elem.value)[0]}
            unit={propsArray.map((elem) => elem.unit)[0]}
            primary
          />
          {/* Steps */}
          {/* <Box icon="directions_walk" color="black" value="3000" unit="steps" /> */}
          <Box
            icon={propsArray.map((elem) => elem.icon)[1]}
            color={propsArray.map((elem) => elem.color)[1]}
            value={propsArray.map((elem) => elem.value)[1]}
            unit={propsArray.map((elem) => elem.unit)[1]}
          />
          {/* Heart */}
          <Box
            icon={propsArray.map((elem) => elem.icon)[2]}
            color={propsArray.map((elem) => elem.color)[2]}
            value={propsArray.map((elem) => elem.value)[2]}
            unit={propsArray.map((elem) => elem.unit)[2]}
            primary
          />
          {/* Temperature */}
          <Box
            icon={propsArray.map((elem) => elem.icon)[3]}
            color={propsArray.map((elem) => elem.color)[3]}
            value={propsArray.map((elem) => elem.value)[3]}
            unit={propsArray.map((elem) => elem.unit)[3]}
          />
          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>
        </div>
      </div>
    );
  }
}

export default App;
