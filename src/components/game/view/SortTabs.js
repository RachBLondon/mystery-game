import React, { Component } from 'react'
import ScoreCard from './ScoreCard'


export default class SortTabs extends Component {

    toggleClass(key){
        return this.props.sortKey === key? 'nav-link active u-active': 'nav-link'
    }

    render(){
        return(
            <div className="c-sort-tabs">
                <ScoreCard creatures={this.props.creatures}/>

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className='nav-link disabled'>Sort By</a>
                    </li>
                    <li className="nav-item">
                        <a className={this.toggleClass('age')} onClick={this.props.sortBy.bind(null, 'age')}>Age</a>
                    </li>
                    <li className="nav-item">
                        <a className={this.toggleClass('mana')} onClick={this.props.sortBy.bind(null, 'mana')}>Mana</a>
                    </li>
                    <li className="nav-item">
                        <a className={this.toggleClass('time')} onClick={this.props.sortBy.bind(null, 'time')}>Time</a>
                    </li>
                </ul>
            </div>
        )
    }
}