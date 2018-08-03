import React from 'react'

import CadastroUnidade from '../componentes/cadastroUnidade.jsx'

export default class CadastroProduto extends React.Component {
constructor(props){
    super(props);
    this.state = {
        produto: '',
        unidade: '',
        proximaTela: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.avancar = this.avancar.bind(this);
}

avancar(){
    this.setState({
        proximaTela: true
    })
}

handleChange(event){
    const target = event.target;
    
    if(target.id == 'produto'){
        this.setState({produto: event.target.value});
    }else if(target.id == 'unidade'){
        this.setState({unidade: event.target.value});
    }
}

render(){
    if(!this.state.proximaTela){
        return(
            <div>
            
                <br/>
        
                <div>
                    <h3>Nome do Produto</h3>
                    <input id='produto' className="form-control form-control-lg" type="text" value={this.state.nome} onChange={this.handleChange}/>
                </div>
        
                <br/>
        
                <div>
                    <h3>Tipo de Unidade</h3>
                    <input id='unidade' className="form-control form-control-lg" type="text" value={this.state.unidade} onChange={this.handleChange}/>
                </div>
    
                <br/>
        
                <form >
                    <button type="button" onClick = {this.avancar}  className="btn btn-primary mb-2">Avançar&nbsp;<i className='fa fa-arrow-right'></i></button>
                </form>
                &nbsp;&nbsp;
                <form action="/#/realizar-conversao" > 
                    <button className="btn btn-primary mb-2"><i className='fa fa-times'></i>&nbsp;Cancelar</button>
                </form>
            
                <br/>   

                </div>
            )
    }else{
        return <CadastroUnidade produto = {this.state.produto} unidade = {this.state.unidade}/>
    }  
}
}