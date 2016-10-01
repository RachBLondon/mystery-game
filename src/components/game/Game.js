import React, {Component }from 'react'
import Creature from './Creature'
import Modal from './view/Modal'
import ScoreCard from './view/ScoreCard'

export default class Game extends Component {
    handleClick(){
        this.props.createNewCreature()
        this.props.showModal()
    }

    newGame(){
        this.props.newGame()
    }


    renderCreatures(){
        if(this.props.creatures) {
            return this.props.creatures.map(function (creature, i) {
                return <Creature key={i} creature={creature}/>
            })
        }
    }

    renderButton(){
        if(this.props.creatures.length <= 9 ){
            return <button type="button" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Catch a Creature</button>
        } else {
            return <button type="button" className="btn btn-primary" onClick={this.newGame.bind(this)}> Basket's Full, start a new game </button>
        }
    }

    render(){
        return(<div>
                    <div>
                        <button type="button" className="btn btn-primary" onClick={this.newGame.bind(this)}> Start a new game </button>
                        <div className="container">
                            <div className="row">
                            {this.renderCreatures()}
                            </div>
                        </div>
                        {this.renderButton()}
                        <ScoreCard creatures={this.props.creatures}/>
                        <Modal hideModal={this.props.hideModal}
                               view={this.props.view}
                               creatures={this.props.creatures}
                               addNameToNewCreature={this.props.addNameToNewCreature}
                               notifyError={this.props.notifyError}
                        />
                    </div>
                </div>)
    }
}