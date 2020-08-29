import css from './index.css'
import './scss/index.scss'

import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from 'react-router-dom'
import StartParams from './app/modules/StartParams/StartParams'

const app = (
    <BrowserRouter>
     <StartParams />
    </BrowserRouter>
)

ReactDOM.render(app, document.querySelector('#cardGame'))