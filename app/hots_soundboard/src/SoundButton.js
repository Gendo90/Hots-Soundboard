import React from "react";
import howler from "howler";

class SoundButton extends React.Component {
    render() {
        return(
            <button className="btn btn-secondary">{this.props.text}</button>
        )
    }
}

export default SoundButton;