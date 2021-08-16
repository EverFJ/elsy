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
    console.log(this.props);
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
  }
}
export default Box;

// export const Box = styled.div`
//   height: 190px;
//   padding: 8px;
//   text-align: center;
// `;
