import React, {Component} from 'react'
import Game from './Game'
import { connect } from 'react-redux'
import {
    showModal,
    hideModal,
    createNewCreature,
    addNameToNewCreature,
    notifyError,
    newGame,
    sortByAge
} from './../../actions'


class GameContainer extends Component {


    render() {
        return (<Game creatures={this.props.creatures}
                      view={this.props.view}
                      showModal={this.props.showModal}
                      hideModal={this.props.hideModal}
                      createNewCreature={this.props.createNewCreature}
                      addNameToNewCreature={this.props.addNameToNewCreature}
                      notifyError={this.props.notifyError}
                      newGame={this.props.newGame}
                      sortByAge={this.props.sortByAge}

        />)
    }
}

function mapStateToProps(state){
    return {
        view : state.view,
        creatures : state.creatures
    }
}
export default connect(mapStateToProps, {
    showModal,
    hideModal,
    createNewCreature,
    addNameToNewCreature,
    notifyError,
    newGame,
    sortByAge
})(GameContainer)
