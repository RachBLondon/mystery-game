import React, {Component} from 'react'


export default class Modal extends Component {

    handleBlur(event){
        if(event.target.value.length > 0){
            this.props.addNameToNewCreature(event.target.value)
            event.target.value = ""
        } else {
            // return error
        }
    }

    handleSubmit(){
        if(this.props.creatures[this.props.creatures.length -1 ]['name'].length > 0){
            this.props.hideModal()
        } else {
            //send error message
        }

    }



    render(){
    const newCreature = this.props.creatures[this.props.creatures.length -1]
    const style = this.props.view.displayModal ? {display: 'block', backgroundColor: 'rgba(89,89,89,0.5)'} : null

     return(
        <div className="modal" style={style}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={this.props.hideModal}>×</span>
                        </button>
                        <h4 className="modal-title">Modal title</h4>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <form>
                                <div className="form-group row">
                                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputName" placeholder="Fido" onBlur={this.handleBlur.bind(this)}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Age</label>
                                    <div className="col-sm-10">
                                        <p className="form-control-static">{newCreature.age}</p>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Mana</label>
                                    <div className="col-sm-10">
                                        <p className="form-control-static">{newCreature.mana}</p>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Type</label>
                                    <div className="col-sm-10">
                                        <p className="form-control-static">{newCreature.type}</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={this.props.hideModal}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>)
    }
}