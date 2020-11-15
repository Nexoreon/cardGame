import React from 'react'

const Mode = (props) => (
    <a id={props.id} className={props.className} onClick={props.onClick}> {props.title} </a>
)

export default Mode