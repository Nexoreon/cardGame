import React from 'react'

const Game = props => (
   <a id={props.id} className={props.className} onClick={props.onClick} style={{backgroundImage: props.img}}> {props.name} </a>
)

export default Game