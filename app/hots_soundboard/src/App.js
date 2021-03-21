import React from "react";
import TabNav from "./TabNav"
import ButtonGroupsHolder from "./ButtonGroupsHolder"
import "./styling.css";
import { Howler } from "howler";

class App extends React.Component {
    constructor() {
        super();

        this.state = { hero: "Tyrael", all_heros: ["Tyrael", "Kerrigan"] }//, context: new AudioContext()}
    }

    //change hero upon clicking a tab
    updateHero = async (e) => {
        console.log(e.target.textContent)
        console.log(this.state.hero)
        await this.setState({ hero: e.target.textContent }, () => console.log(this.state.hero));
    }

    //add a "stop" hotkey button (spacebar) to stop playback of quote instantly
    stopPlayback = (e) => {
        if(e.keyCode === 32) {
            e.preventDefault()
            Howler.stop()
            console.log(e)
        }
    }

    render() {
        return (
            <div className="container-md" onKeyDown={this.stopPlayback}>
                <h2 className="text-center">Heroes of the Storm Soundboard</h2>
                <div className="row">
                    <div className="col">
                        <TabNav hero={this.state.hero} allTabs={this.state.all_heros} setHero={this.updateHero}></TabNav>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ButtonGroupsHolder hero={this.state.hero}/>
                    </div>
                </div>                
            </div>
        )
    }
}



export default App;