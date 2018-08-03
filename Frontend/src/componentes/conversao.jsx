import React from 'react'
import Axios from 'axios'

import MenuConversao from './menuConversao.jsx'

const URL = 'http://localhost:7000/api/conversor/';

export default class Conversao extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:'',
            lista:[],
        }
    }

    render(){        

        if(this.state.lista.length == 0){
            Axios.get(`${URL}?sort=nome`, {
            })
            .then(response => {
                this.setState({data: response.data}) 
            });
        }

        if(this.state.lista.length == 0){
            for(var i = 0; i < this.state.data.length; i++){
                this.state.lista.push({nome: this.state.data[i].nome+'('+this.state.data[i].unidade+')'});
            }
        }

        return(
            <MenuConversao lista = {this.state.lista}/>
        )
    }
}
    
