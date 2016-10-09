import React, {Component }from 'react'
import Creature from './Creature'
import Modal from './view/Modal'
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
            return <button type="button" className="btn btn-primary c-play" data-toggle="modal" data-target="#modal" onClick={this.handleClick.bind(this)}>Catch a Creature</button>
        } else {
            return  <h2>No more cages left to catch creatures! </h2>
        }
    }

    render(){
        return(<div>
                    <div className="c-app">


                        <nav className="navbar navbar-light bg-faded c-nav-bar">
                            <a className="navbar-brand" href="#">Mythical Animal Hunt</a>
                            <form className="form-inline pull-xs-right">
                                <button type="button" className="btn btn-secondary btn-outline-secondary" onClick={this.newGame.bind(this)}> Start a new game </button>
                            </form>
                        </nav>

                        <div className="container">
                            <SortTabs sortBy={this.props.sortBy} creatures={this.props.creatures} sortKey={this.props.sortKey}/>
                            <div className='c-play-button'>
                                {this.renderButton()}
                            </div>
                            <div className="row">
                            {this.renderCreatures.call(this)}
                            </div>
                        </div>

                        <Modal hideModal={this.props.hideModal}
                               view={this.props.view}
                               creatures={this.props.creatures}
                               addNameToNewCreature={this.props.addNameToNewCreature}
                               notifyError={this.props.notifyError}
                               sortBy={this.props.sortBy}
                               sortKey={this.props.sortKey}
                        />
                    </div>
                </div>)
    }
}