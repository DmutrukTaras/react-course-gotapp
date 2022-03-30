import React, {Component} from 'react';
import { getCharacterById } from '../../services/api';
import ErrorMessage from '../errorMessage';
import Preloader from '../preloader';
import './randomChar.css';

export default class RandomChar extends Component {

    state = {
        name:null,
        gender: null,
        born: null,
        died: null,
        culture: null,
        loading:true,
        error: false
    }

    onError = (err) =>{
        this.setState({
            loading: false,
            error: true
        })
    }

    updateCharacter = () =>{
        const id = Math.floor(Math.random()*140+50);
        getCharacterById(id)
        .then(data=>this.setState({...data, loading: false}))
        .catch(err=>this.onError(err))
    }

    componentDidMount(){
        this.updateCharacter();
        this.timerId = setInterval(this.updateCharacter, 5000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
        console.log('clearInterval')
    }

    render() {
        const {loading, error} = this.state;
        return (
            <div className="random-block rounded">
                {!loading?
                    (error?
                        <ErrorMessage />
                        :
                        <View {...this.state}/>
                    )
                    :
                    (<Preloader />)
                }  
            </div>
        );
    }
}

const View = (props) =>{
    const {name, gender, born, died, culture} = props;

    return (
        <>
        <h4>Random Character:</h4>
        <h5> {name} </h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span> {born?born:'no data :('} </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died?died:'no data :('}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture?culture:'no data :('}</span>
                    </li>
            </ul>
        </>
        
    )
}