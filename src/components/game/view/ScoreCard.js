import React, { Component } from 'react'

export default class ScoreCard extends Component {
    tally(array, key){
        let score = 0;
        array.map(function(item){
            console.log(item[key])
            score = score + item[key]
        })
        return score
    }


    render(){
        return (
            <ul>
                <li>Total Age : {this.tally(this.props.creatures, 'age')}</li>
                <li>Total Mana : {this.tally(this.props.creatures, 'mana')}</li>
            </ul>
        )
    }
}