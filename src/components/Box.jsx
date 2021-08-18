import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  height: 190px;
  padding: 8px;
  text-align: center;
  background-color: ${(props) => (props.primary ? "#ccc" : "#aaa")};
`;

class Box extends React.Component {
  render() {
    if (this.props.water) {
      return (
        <StyledBox primary={this.props.primary} className="col-sm-3 col-6">
          <span
            style={{ color: this.props.color, fontSize: 100 }}
            className="material-icons"
          >
            {this.props.icon}
          </span>
          <p>
            {this.props.value} {this.props.unit}
          </p>
        </StyledBox>
      );
    } else {
      return (
        <StyledBox primary={this.props.primary} className="col-sm-3 col-6">
          <span
            style={{ color: this.props.color, fontSize: 100 }}
            className="material-icons"
          >
            {this.props.icon}
          </span>
          <p>
            {this.props.value} {this.props.unit}
          </p>

          <input
            className="form-range"
            type="range"
            name="slider"
            id="slider"
            min={this.props.min}
            max={this.props.max}
            value={this.props.value}
            onChange={() => {
              // console.log("value", value);
              console.log("this.props.value", this.props.value);
              this.props.onChange();
            }}
          />
        </StyledBox>
      );
    }
  }
}
export default Box;
