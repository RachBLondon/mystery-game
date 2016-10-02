import React, {Component }from 'react'
import Creature from './Creature'
import Modal from './view/Modal'
import ScoreCard from './view/ScoreCard'
import SortTabs from './view/SortTabs'

export default class Game extends Component {
    handleClick(){
        this.props.createNewCreature()
        this.props.showModal()
    }

    newGame(){
        this.props.newGame()
    }


    renderCreatures(){
        return this.props.creatures.map(function (creature, i) {
            return <Creature key={i} creature={creature} setFree={this.props.setFree} finishSettingFree={this.props.finishSettingFree}/>
        }, this)
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


                        <nav className="navbar navbar-light bg-faded">
                            <a className="navbar-brand" href="#">Mythical Animal Hunt</a>
                            <form className="form-inline pull-xs-right">
                                <button type="button" className="btn btn-primary" onClick={this.newGame.bind(this)}> Start a new game </button>
                            </form>
                        </nav>

                        <div className="container">
                            <SortTabs sortBy={this.props.sortBy} sortKey={this.props.sortKey}/>
                            <div className="row">
                            {this.renderCreatures.call(this)}
                            </div>
                        </div>
                        <div className='c-play-button'>
                            {this.renderButton()}
                        </div>
                        <ScoreCard creatures={this.props.creatures}/>
                        <Modal hideModal={this.props.hideModal}
                               view={this.props.view}
                               creatures={this.props.creatures}
                               addNameToNewCreature={this.props.addNameToNewCreature}
                               notifyError={this.props.notifyError}
                               sortBy={this.props.sortBy}
                               sortKey={this.props.sortKey}
                               modalContent={this.props.modalContent}
                        />
                    </div>
                </div>)
    }
}