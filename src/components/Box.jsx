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

        {!this.props.water && (
          <input
            className="form-range"
            type="range"
            name="slider"
            id="slider"
            steps={this.props.steps ? 1000 : null}
            min={this.props.min}
            max={this.props.max}
            value={this.props.value}
            onChange={(e) => {
              console.log("e", e);
              this.props.onChange(e);
            }}
          />
        )}
      </StyledBox>
    );
  }
}
export default Box;
