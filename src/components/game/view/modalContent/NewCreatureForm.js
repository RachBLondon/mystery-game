import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class NewCreatureForm extends Component {
    handleBlur(event){
        if(event.target.value.length > 0){
            this.props.addNameToNewCreature(event.target.value)
        } else {
            this.props.notifyError()
        }
    }

    handleSubmit(){
        if(this.props.creatures[this.props.creatures.length -1 ]['name'].length > 0){
            this.props.hideModal()
            ReactDOM.findDOMNode(this.refs.inputName).value = ''
            this.props.sortBy(this.props.sortKey)
        } else {
            this.props.notifyError()
        }
    }


    renderErrorMessage(){
        return this.props.view.nameError ?<div className="form-control-feedback">You forgot to name your creature</div>: null
    }

    getData(key){
        return this.props.creatures.length > 0? this.props.creatures[this.props.creatures.length - 1][key] : null
    }


    render(){
        const nameInputClass = this.props.view.nameError ? "form-group row has-danger" : "form-group row"
        const newCreature = this.props.creatures[this.props.creatures.length - 1]
        return (
            <div>
                <div className="modal-header">
                    <h4 className="modal-title">You've caught a new creature!</h4>
                </div>
                <div className="modal-body">
                    <div className="container">
                        <form>
                            <div className={nameInputClass}>
                                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputName"
                                           ref="inputName" placeholder="Fido"
                                           onBlur={this.handleBlur.bind(this)}/>
                                    {this.renderErrorMessage()}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Age</label>
                                <div className="col-sm-10">
                                    <p className="form-control-static">{this.getData('age')}</p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Mana</label>
                                <div className="col-sm-10">
                                    <p className="form-control-static">{this.getData('mana')}</p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Type</label>
                                <div className="col-sm-10">
                                    <p className="form-control-static">{this.getData('type')}</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer c-play-button">
                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Capture your new creature
                    </button>
                </div>
             </div>

        )
    }
}