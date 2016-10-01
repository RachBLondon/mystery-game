import React, {Component }from 'react'
import Creature from './Creature'
import Modal from './view/Modal'

export default class Game extends Component {
    handleClick(){
        this.props.createNewCreature()
        this.props.showModal()
    }

    renderCreatures(){
        return this.props.creatures.map(function(creature, i ){
            return <Creature key={i} creature={creature} />
        } )
    }

    render(){
        return(<div>
                    <div>
                        {this.renderCreatures()}
                        <button type="button" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Catch a Creature</button>
                        <Modal hideModal={this.props.hideModal} view={this.props.view} creatures={this.props.creatures}/>
                    </div>
                </div>)
    }
}