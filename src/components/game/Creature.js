import React, {Component} from 'react'

export default class Creature extends Component {
    render(){
        return (
            <div>
                <h5>{this.props.creature.name}</h5>
                <p>Age : {this.props.creature.age}</p>
                <p>Mana : {this.props.creature.mana}</p>
                <p>Type : {this.props.creature.type}</p>
            </div>
        )
    }
}