import React, {Component} from 'react';
//import { getAllCharacters } from '../../services/api';
import './itemList.css';
import { getAllCharacters } from '../../services/api';
import Preloader from '../preloader';


// const data = getAllCharacters(2,20).then(data => console.log(data))
// .catch((err) => { console.log('Error:', err); })


export default class ItemList extends Component {

    state = {
        charList: null,
        page:1,
    }

    componentDidMount(){
        getAllCharacters(this.state.page,10)
        .then(charList=>{this.setState({...this.state, charList});});
    }

    render() {
        const {charList, page} = this.state;

        if(!charList){
            return(
                <Preloader />
            )
        }

        return (
            <ul className="item-list list-group">
            { charList.map((charItem, index)=>(
                    <>
                        {charItem.name?(<li key={index} onClick={()=>{this.props.onCharSelected((page-1)*10+index+1)}} className="list-group-item">{charItem.name}</li>):''}
                    </>
            ))}
            </ul>
        );
    }
}