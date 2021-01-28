import React from "react";
import TabNav from "./TabNav"
import ButtonGroup from "./ButtonGroup"

class App extends React.Component {
    state = { hero: "Tyrael", all_heros: ["Tyrael"]}

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
                        <ButtonGroup hero={this.state.hero}/>
                    </div>
                </div>                
            </div>
        )
    }
}



export default App;