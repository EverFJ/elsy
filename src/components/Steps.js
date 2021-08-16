import { black } from "kleur";
import React from "react";

class Steps extends React.Component {
    render() {
        const iconStyle = {
            color: black,
            fontSize: 100
        };
        return (
            <div className="box col-sm-3 col-6">
                <span style={iconStyle} className="material-icons">directions_walk</span>
            </div>
        )
    }
}

export default Steps;