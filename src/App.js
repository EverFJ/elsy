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
const boxes = [
  { icon: "local_drink", color: "#3A85FF", value: 1.5, unit: "L" },
  { icon: "directions_walk", color: "black", value: 3000, unit: "steps" },
  { icon: "favorite", color: "red", value: 120, unit: "bpm" },
  { icon: "wb_sunny", color: "yellow", value: -10, unit: "°C" },
];

class App extends React.Component {
  render() {
    // console.log("propsArray", boxes.map((elem) => elem.icon)[0]);
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          {/* <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" /> */}
          {/* Steps */}
          {/* <Box icon="directions_walk" color="black" value={3000} unit="steps" /> */}
          {/* Heart */}
          {/* <Box icon="favorite" color="red" value={120} unit="bpm" /> */}
          {/* Temperature */}
          {/* <Box icon="wb_sunny" color="yellow" value={-10} unit="°C" /> */}

          {/* ALL BOXES IN ONE OPERATION */}
          {boxes.map((elem, index) => (
            <Box
              icon={elem.icon}
              color={elem.color}
              value={elem.value}
              unit={elem.unit}
              primary={index % 2 === 0}
            />
          ))}

          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>
        </div>
      </div>
    );
  }
}

export default App;
