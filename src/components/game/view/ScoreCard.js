import React, { Component } from 'react'

export default class ScoreCard extends Component {
    tally(array, key){
        return array.reduce(function(acc, obj){
            return acc + obj[key]
        },0)
    }


    render(){
        return (
            <div className="c-score-card-container">
                <div className="c-score-card-container-animate">
                    <div className="c-score-cloud">
                        <div className="c-score-card">
                            <p>Total Age : {this.tally(this.props.creatures, 'age')}</p>
                            <p>Total Mana : {this.tally(this.props.creatures, 'mana')}</p>
                            <p>Number of Cages available: {this.props.creatures.length} / 10</p>
                        </div>
                    </div>
                </div>
             </div>
        )
    }
}