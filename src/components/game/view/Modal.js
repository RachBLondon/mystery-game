import React, {Component} from 'react'
import NewCreatureForm from './modalContent/NewCreatureForm'


export default class Modal extends Component {
    render() {
        const style = this.props.view.displayModal ? {display: 'block', backgroundColor: 'rgba(89,89,89,0.5)'} : null

            return (
                <div className="modal animated fade-in" id="modal" style={style}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                                    <NewCreatureForm view={this.props.view}
                                                     creatures={this.props.creatures}
                                                     addNameToNewCreature={this.props.addNameToNewCreature}
                                                     notifyError={this.props.notifyError}
                                                     sortBy={this.props.sortBy}
                                                     sortKey={this.props.sortKey}
                                                     hideModal={this.props.hideModal}
                                                    />
                        </div>
                    </div>
                </div>)
        }

}