import React, { Component } from 'react'

export default class SortTabs extends Component {



    render(){
        return(
        <div className="c-sort-tabs">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" onClick={this.props.sortByAge}>Age</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Mana</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Time</a>
                </li>
            </ul>
            </div>
        )
    }
}