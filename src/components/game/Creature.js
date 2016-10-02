import React, {Component} from 'react'

export default class Creature extends Component {
    handleClick(id){
        this.props.setFree(id)
        setTimeout(()=>{
            this.props.finishSettingFree(id)
        }, 15000)
    }

    renderImg(type){
         switch(type){
            case 'phoenixes':
                return './../../../assets/phoenixes.png'
            case 'medusas' :
                return './../../../assets/medusas.png'
            case 'hippogriffs':
                return './../../../assets/hippogriffs.png'
            default:
                return './../../../assets/hippogriffs.png'
        }
    }

    render(){
        let  toggleSetFree  = this.props.creature.settingFree ? 'u_set_free col-md-3' : 'col-md-3 c-creature'
        const toggleButtonText = this.props.creature.settingFree ? "I'm free!": 'Set me free'
        return (
            <div className={toggleSetFree}>
                <img className="c-creature-image" src={this.renderImg(this.props.creature.type)} />
                <h5>{this.props.creature.name}</h5>
                <p>Type : {this.props.creature.type}</p>
                <p>Age : {this.props.creature.age}</p>
                <p>Mana : {this.props.creature.mana}</p>
                <button type="button" className="btn btn-secondary" onClick={this.handleClick.bind(this, this.props.creature.id)}>{toggleButtonText}</button>
            </div>
        )
    }
}