import React from "react";
import ButtonGroup from "./ButtonGroup"

class ButtonGroupsHolder extends React.Component {
    //state contains two maps of filenumbers to the category names, from ${hero}_categories.json,
    //then the categories to lists of filenames from ${hero}_Clips.txt
    //so that the ${hero}_Clips.txt file only needs to be read once
    state = {fileNumToCategoryMap: new Map(), categoriesToFilenamesMap: new Map()}

    async setupStateUponLoading(hero) {
        let categoriesToFileNums = await fetch(`./sounds/${hero}/${hero}_categories.json`).then((res) => res.json());
        // console.log(categoriesToFileNums)

        //now map filenumbers to each category
        let numsToCategoryMap = new Map();
        Object.keys(categoriesToFileNums).map((category) => categoriesToFileNums[category].map(fileNum => numsToCategoryMap.set(fileNum, category)));
        this.setState({ fileNumToCategoryMap: numsToCategoryMap })
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
        })

        //now set the matching state variable once right here
        this.setState({ categoriesToFilenamesMap: categoryToFilenameMapModifier})
    }

    async componentDidMount() {
        this.setupStateUponLoading(this.props.hero)
    }

    render() {
        return (
            <div>
                <h3 className="text-center">All Buttons</h3>
                {this.state.categoriesToFilenamesMap.keys().map((category) => {
                    if(categoriesToFilenamesMap.get(category)) {
                        return (
                            <ButtonGroup hero={this.props.hero} category={category} filenames={this.state.categoriesToFilenamesMap.get(category)}/>
                            )
                    }})
                }
            </div>
        )
}

export default ButtonGroupsHolder;