import React from 'react'

const Input = props => (
    <div className="players_name">
        <p>{props.title}</p>
        {props.value == '' ? <p className="players_emptyName">Имя игрока не может быть пустым</p> : null}
        {props.value.includes('  ') || props.value == ' ' ? <p className="players_emptyName">Никнейм игрока не должен состоять из пробелов</p> : null}
        {props.value.length >= 16 ? <p className="players_emptyName">Имя не должно превышать 15 символов</p> : null}
        <input type={props.type} id={props.id} defaultValue={props.value} onInput={props.onInput} disabled={props.disabled}/>
    </div>
    
)

export default Input