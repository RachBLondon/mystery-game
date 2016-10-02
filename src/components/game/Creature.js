import React, {Component} from 'react'

export default class Creature extends Component {
    handleClick(id){
        this.props.setFree(id)
        setTimeout(()=>{
            this.props.finishSettingFree(id)
        }, 1000)
    }

    render(){
        let  toggleSetFree  = this.props.creature.settingFree ? 'u_set_free col-md-3' : 'col-md-3'
        return (
            <div className={toggleSetFree}>
                <h5>{this.props.creature.name}</h5>
                <p>Age : {this.props.creature.age}</p>
                <p>Mana : {this.props.creature.mana}</p>
                <p>Type : {this.props.creature.type}</p>
                <button type="button" className="btn btn-secondary" onClick={this.handleClick.bind(this, this.props.creature.id)}>Set Free</button>
            </div>
        )
    }
}