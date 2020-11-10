import './scss/index.scss'

import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from 'react-router-dom'
import App from './app/App'

const app = (
    <BrowserRouter basename={'/MatrixCards/'}>
     <App />
    </BrowserRouter>
)

ReactDOM.render(app, document.querySelector('#root'))