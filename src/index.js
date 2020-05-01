import css from './index.css'
import './scss/index.scss'

import React from "react"
import ReactDOM from "react-dom"
import App from "./app/app.js"



const startButton = document.querySelector('#startGameButton')

// startButton.addEventListener('click', () => {
//     ReactDOM.render(<App />, document.querySelector('#test'))
// })

ReactDOM.render(<App />, document.querySelector('#cardGame'))