import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import CadastroProduto from '../componentes/cadastroProduto.jsx'
import Conversao from '../componentes/conversao.jsx'

export default props => (
    <Router history={hashHistory}>
        <Route path='/cadastrar-produto' component={CadastroProduto}/>
        <Route path='/realizar-conversao' component={Conversao}/>
        <Redirect from='*' to='/realizar-conversao' />
    </Router>
)