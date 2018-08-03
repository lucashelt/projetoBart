import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import React from 'react'

import Menu from '../componentes/menu.jsx'
import Routes from './routes.jsx'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)