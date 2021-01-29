import React from "react";
import SoundButton from "./SoundButton";

class ButtonGroup extends React.Component {
    state = {allButtonText: [""], filenames: new Map()}

    getAllButtonText(hero) {
        // console.log(`./sounds/${hero}/${hero}_Clips.txt`)
        fetch(`./sounds/${hero}/${hero}_Clips.txt`)
        .then(resp => resp.text())
        .then(lines => lines.split("\n"))
        .then(filenames => {
            // remove .wav file extension
            let output = filenames.map(a => a.replace(/\.wav$/, ''))
            //set quote text to point to the file name it was derived from
            //then return the quotes alone to update the button text (without preceding digits)
            let newQuoteMap = new Map()
            output = output.map(a => {
                let curr_filename = a;
                let cleaned_quote = a.replace(/^\d\d\d_/, '')
                newQuoteMap.set(cleaned_quote, curr_filename)
                return cleaned_quote;
            })
            // set the new state for the filenames property
            this.setState({ filenames: newQuoteMap })

            return output
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
                            <SoundButton text={quote} hero={this.props.hero} filename={this.state.filenames.get(quote)} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ButtonGroup;