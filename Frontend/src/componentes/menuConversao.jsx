import React from 'react'
import Axios from 'axios'

const URL = 'http://localhost:7000/api/conversor/';

export default class MenuConversao extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            produto: '',
            quantidade: '0',
            listaProdutos: this.props.lista
        };
    
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleChange(event){
        const target = event.target;
    
        if(target.id == 'selectProduto'){
            this.setState({produto: event.target.value});
        }else if(target.id == 'quantidade'){
            this.setState({quantidade: event.target.value});
        }
    }
    
    handleSubmit(event){
        
        var selecao = document.getElementById("selectProduto");
        var texto = selecao.options[selecao.selectedIndex].text;

        var nomeProduto = texto.substring(0, texto.indexOf('('));;
        var unidadeProduto = texto.substring(texto.indexOf('(')+1, texto.indexOf(')'));
       
        Axios.get(URL, {
            params: {
                nome: nomeProduto
              }
        })
        .then(response => {
            document.getElementById('produto').innerHTML = this.state.quantidade + ' ' + unidadeProduto + ' de ' + nomeProduto  + ' em:';
            document.getElementById('quilos').innerHTML = 'Quilos: ' + (this.state.quantidade * response.data[0].quilos).toFixed(2) + ' Kg';
            document.getElementById('toneladas').innerHTML = 'Toneladas: ' + (this.state.quantidade * response.data[0].toneladas).toFixed(2) + ' Ton';
        })
    }

    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>

                <br/>

                <div>
                    <h3>Selecione um Produto</h3>
                    <select id='selectProduto' value={this.state.produto} onChange={this.handleChange} className="form-control form-control-lg">
                        {this.state.listaProdutos.map(d => <option key={d.nome}>{d.nome}</option>)}
                    </select>
                </div>

                <br/>

                <div>
                    <h3>Informe a Quantidade</h3>
                    <input id='quantidade' className="form-control form-control-lg" type="number" value={this.state.quantidade} onChange={this.handleChange}/>
                </div>

                <br/>

                <button type="submit" className="btn btn-primary mb-2"><i className='fa fa-calculator'></i>&nbsp;Calcular</button>
            
                <br/>
                <br/>

                <div className='container'>
                    <h2 id='produto'></h2>
                    <h3 id='quilos'></h3>
                    <h3 id='toneladas'></h3>
                </div>

            </form>
        </div>
        )
    }

}
    