import React from 'react'

const Input = props => {

    const renderError = () => {
        if (props.value == '') {
            return 'Никнейм игрока не может быть пустым'
        } else if (props.value.includes('  ')) {
            return 'Никнейм игрока не должен состоять из пробелов'
        } else if (props.value.length >= 16) {
            return 'Никнейм игрока не должен превышать 15 символов'
        } else {null}
    }

    return(
      <div className="players_name">
          <p>{props.title}</p>
          {renderError() ? <p className="players_emptyName">{renderError()}</p> : null}
          <input type={props.type} id={props.id} defaultValue={props.value} onInput={props.onInput} disabled={props.disabled}/>
      </div>
    )
    
}

export default Input