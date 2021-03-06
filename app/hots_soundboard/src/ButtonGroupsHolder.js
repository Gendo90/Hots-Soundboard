import React from "react";
import ButtonGroup from "./ButtonGroup"

class ButtonGroupsHolder extends React.Component {
    //state contains two maps of filenumbers to the category names, from ${hero}_categories.json,
    //then the categories to lists of filenames from ${hero}_Clips.txt
    //so that the ${hero}_Clips.txt file only needs to be read once
    constructor(props) {
        super(props);

        // Note that cannot set state to Howl here because of the new AudioContext rules
        // that only allow sound upon user interaction
        this.state = { hero: this.props.hero };
        this.state.fileNumToCategoryMap = new Map();
        this.state.categoriesToFilenamesMap = new Map()
    }

    async setupStateUponLoading(hero) {
        let categoriesToFileNums = await fetch(`./sounds/${hero}/${hero}_categories.json`).then((res) => res.json());
        // console.log(categoriesToFileNums)

        //now map filenumbers to each category
        let numsToCategoryMap = new Map();
        Object.keys(categoriesToFileNums).map((category) => categoriesToFileNums[category].map(fileNum => numsToCategoryMap.set(fileNum, category)));
        // this.setState({ fileNumToCategoryMap: numsToCategoryMap })
        this.setState({fileNumToCategoryMap: numsToCategoryMap})
        // console.log(this.state.fileNumToCategoryMap)

        //now iterate over filenames from ${hero}_Clips.txt file
        //and setup a map to match each category to a list of filenames
        //looking up each file number and assigning the filename to the found category
        //from the fileNumToCategoryMap created above
        let categoryToFilenameMapModifier = new Map(Object.keys(categoriesToFileNums).map((category) => [category, []]))
        console.log(categoryToFilenameMapModifier)

        //get all the filenames
        let allFilenames = await fetch(`./sounds/${hero}/${hero}_Clips.txt`).then(res => res.text()).then(lines => lines.split("\n"))
        //assign them to the newly created category map
        allFilenames.map(filename => {
            //gets the category based on the first three digits at the start of the filename
            let category = this.state.fileNumToCategoryMap.get(Number(filename.substring(0, 3)));
            //adds the filename to the list of filenames for that category
            if(category) {
                categoryToFilenameMapModifier.get(category).push(filename)
            }
            return null;
        })

        //now set the matching state variable once right here
        this.setState({categoriesToFilenamesMap: categoryToFilenameMapModifier})
    }

    async componentDidMount() {
        await this.setupStateUponLoading(this.state.hero)
        // this.render()
    }

    async componentDidUpdate(prevProps, prevState) {
        if(this.props.hero !== prevState.hero) {
            await this.setupStateUponLoading(this.props.hero);
            await this.setState({ hero: this.props.hero });
        }
    }

    render() {
        // this.setupStateUponLoading(this.state.hero);
        return (
            <div class="buttonGroupsHolder">
                <h3 className="text-center">{this.state.hero}</h3>
                <hr></hr>
                {Array.from(this.state.categoriesToFilenamesMap.keys()).map((category) => {
                    console.log(category)
                    if(this.state.categoriesToFilenamesMap.get(category).length !== 0) {
                        return (
                            <ButtonGroup hero={this.state.hero} category={category} uncleanedFilenames={this.state.categoriesToFilenamesMap.get(category)}/>
                            )
                    }
                    return "";
                }
                    )
                }
            </div>
        )}
}

export default ButtonGroupsHolder;