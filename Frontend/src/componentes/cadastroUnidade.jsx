import React from 'react'
import Axios from 'axios'

const URL = 'http://localhost:7000/api/conversor/';

export default class CadastroUnidade extends React.Component {
constructor(props){
    super(props);
    this.state = {
        quilos: '',
        toneladas: '',
        produto: this.props.produto,
        unidade: this.props.unidade,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event){
    const target = event.target;
    
    if(target.id == 'quilos'){
        this.setState({quilos: event.target.value});
    }else if(target.id == 'toneladas'){
        this.setState({toneladas: event.target.value});
    }
}

handleSubmit(event){
    
    const newProduto = this.state.produto;
    const newUnidade = this.state.unidade;
    const newQuilos = this.state.quilos;
    const newToneladas = this.state.toneladas;

    Axios.get(URL, {
        params: {
            nome: this.state.produto
          }
    })
    .then(function(response){
        console.log(response.data.length);
        if(response.data.length == 0){
            Axios.post(URL, {
                nome: newProduto.toLowerCase(),
                unidade: newUnidade.toLowerCase(),
                quilos: newQuilos,
                toneladas: newToneladas,
            })
            .then(function(response){
                window.location.reload();
                alert('Produto Cadastrado');
                console.log(response);
            });
        }else{
            alert('Produto já Cadastrado');
        }
    });
}


render(){
    return(
        <div>
        
            <br/>
            
            <div>
                <h3>1 {this.state.unidade} de {this.state.produto} em Quilos</h3>
                <input id='quilos' className="form-control form-control-lg" type="number" value={this.state.quilos} onChange={this.handleChange}/>
            </div>
        
            <br/>
        
            <div>
                <h3>1 {this.state.unidade} de {this.state.produto} em Toneladas</h3>
                <input id='toneladas' className="form-control form-control-lg" type="number" value={this.state.toneladas} onChange={this.handleChange}/>
            </div>
    
            <br/>
        
            <form onSubmit = {this.handleSubmit} action="/#/realizar-conversao">
                <button className="btn btn-primary mb-2"><i className='fa fa-check'></i>&nbsp;Cadastrar</button>
            </form>
            &nbsp;&nbsp;
            <form action="/#/realizar-conversao">
                <button className="btn btn-primary mb-2"><i className='fa fa-times'></i>&nbsp;Cancelar</button>
            </form>
            
            <br/>

        </div>
    )
}  
}




