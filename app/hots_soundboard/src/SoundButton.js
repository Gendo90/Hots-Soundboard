import React from "react";
import {Howl, Howler} from "howler";


class SoundButton extends React.Component {
    constructor(props) {
        super(props);

        // Note that cannot set state to Howl here because of the new AudioContext rules
        // that only allow sound upon user interaction
        this.state = { sound: "" }
    }

    onButtonClick = (e) => {
        if(!this.state.sound) {
            this.setState({
                sound: new Howl({
                    src: [`./sounds/${this.props.hero}/${this.props.filename}.wav`]
                })}, 
                () => {
                    this.state.sound.play()
                })
        }
        else{
            this.state.sound.play()
        }
    }

    render() {
        return(
            <button onClick={this.onButtonClick}>{this.props.text}</button>
        )
    }
}

export default SoundButton;