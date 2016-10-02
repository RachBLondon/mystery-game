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
    sortBy,
    setFree
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
                      sortBy={this.props.sortBy}
                      sortKey={this.props.sortKey}
                      modalContent={this.props.modalContent}
                      setFree={this.props.setFree}
        />)
    }
}

function mapStateToProps(state){
    return {
        view : state.view,
        sortKey : state.view.sortKey,
        creatures : state.creatures,
        modalContent : state.view.modalContent
    }
}
export default connect(mapStateToProps, {
    showModal,
    hideModal,
    createNewCreature,
    addNameToNewCreature,
    notifyError,
    newGame,
    sortBy,
    setFree
})(GameContainer)
