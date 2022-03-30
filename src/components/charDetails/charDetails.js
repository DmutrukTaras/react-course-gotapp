import React, {Component} from 'react';
import { getCharacterById } from '../../services/api';
import './charDetails.css';
export default class CharDetails extends Component {

    state = {
        char:null
    }

    componentDidMount(){
        this.updateChar();
    }

    componentDidUpdate(prevProps){
        if(this.props.charId !== prevProps.charId){
            this.updateChar();
        }
    }

    updateChar=()=>{
        const {charId} = this.props;
        if(!charId){
            return;
        }
        getCharacterById(charId)
        .then(char=>this.setState({char}))
    }

    render() {

        const {char} = this.state;
        if(!char) {
            return <span className='select-error'>Please select a character</span>
        }else{
            console.log(char);

        }

        const {name, gender, born, died, culture} = char;


        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}