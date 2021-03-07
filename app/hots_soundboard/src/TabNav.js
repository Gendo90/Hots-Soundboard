import React from "react";

class TabNav extends React.Component {
    componentDidMount() {
        console.log(this.props.hero, this.props.allTabs)
    }

    render() {
        return (
            <ul className="nav nav-tabs">
            { this.props.allTabs.map((hero) => {
                return (
                <li className="nav-item">
                        <a className={"nav-link " + (hero === this.props.hero ? "active" : "")} aria-current="page" href="/">{hero}</a>
                </li>
                )
            })}
        </ul>
        )
    }
}

export default TabNav;