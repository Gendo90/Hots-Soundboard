import React from "react";
import TabNav from "./TabNav"
import ButtonGroupsHolder from "./ButtonGroupsHolder"
import "./styling.css";

class App extends React.Component {
    constructor() {
        super();

        this.state = { hero: "Tyrael", all_heros: ["Tyrael"] }//, context: new AudioContext()}
    }

    render() {
        return (
            <div className="container-md">
                <h2 className="text-center">Heroes of the Storm Soundboard</h2>
                <div className="row">
                    <div className="col">
                        <TabNav hero={this.state.hero} allTabs={this.state.all_heros}></TabNav>
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