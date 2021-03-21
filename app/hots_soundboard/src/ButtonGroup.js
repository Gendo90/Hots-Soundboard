import React from "react";
import SoundButton from "./SoundButton";

class ButtonGroup extends React.Component {
    constructor(props) {
        super(props);

        // Note that cannot set state to Howl here because of the new AudioContext rules
        // that only allow sound upon user interaction
        this.state = { hero: this.props.hero };
        this.state.allButtonText = [""];
        this.state.filenames = new Map();
    }

    getAllButtonText() {
        //clean filenames using a helper function, outputs all quotes
        let allQuotes = this.cleanFilenames(this.props.uncleanedFilenames)
        //set allButtonText to match all quotes from previous helper function
        this.setState({allButtonText: allQuotes});
    }

    //takes an array of raw filenames (from parent), and converts them to cleaned 
    //quotes, while also mapping the cleaned quote to the filename for the 
    //"filenames" state variable
    cleanFilenames(uncleanedFilenames) {
        // remove .wav file extension
        let output = uncleanedFilenames.map(a => a.replace(/\.wav$/, ''))
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
        this.setState({filenames: newQuoteMap});

        //list of cleaned filenames (i.e. quote text)
        return output
    }

    componentDidMount() {
        this.getAllButtonText();
    }

    async componentDidUpdate(prevProps, prevState) {
        if(this.props.hero !== prevState.hero) {
            await this.setState({ hero: this.props.hero }, this.getAllButtonText)
        }
    }

    render() {
        return (
            <div class="buttonGroup">
                <h4 className="text-center">{this.props.category}</h4>
                <div className="btn-group d-md-flex flex-wrap">
                    {/* <button>Press me!</button> */}
                    {this.state.allButtonText.map(quote => {
                        return(
                            <SoundButton text={quote} hero={this.state.hero} filename={this.state.filenames.get(quote)} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ButtonGroup;