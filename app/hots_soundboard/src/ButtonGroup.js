import React from "react";
import SoundButton from "./SoundButton";

class ButtonGroup extends React.Component {
    state = {allButtonText: [""]}

    getAllButtonText(hero) {
        console.log(`./sounds/${hero}/${hero}_Clips.txt`)
        fetch(`./sounds/${hero}/${hero}_Clips.txt`)
        .then(resp => resp.text())
        .then(lines => lines.split("\n"))
        .then(filenames => {
            let output = filenames.map(a => a.replace(/\.wav$/, ''))
            return output.map(a => a.replace(/^\d\d\d_/, ''))
        })
        .then(result_arr => this.setState({ allButtonText: result_arr}))
    }

    componentDidMount() {
        this.getAllButtonText(this.props.hero);
    }

    render() {
        return (
            <div>
                <h3 className="text-center">All Buttons</h3>
                <div className="btn-group d-md-flex flex-wrap">
                    {/* <button>Press me!</button> */}
                    {this.state.allButtonText.map(quote => {
                        return(
                            <SoundButton text={quote} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ButtonGroup;