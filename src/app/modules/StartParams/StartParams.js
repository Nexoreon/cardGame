import React from 'react'
import './StartParams.scss'
import {Link} from 'react-router-dom'
import Games from './Games/Games'
import Modes from './Modes/Modes'
import Nicknames from './Nicknames/Nicknames'
import About from './About/About'

const StartParams = props => {
    let btnCls = ['button', 'button--startGame']
    if (!props.launchGame) {
        btnCls.push('button--disabled')
    }

   const checkValidation = () => { // If validation failed, calling popup window with error message
        if (!props.launchGame) {
            props.handlePopupWindow(1)
        }
    }

        return(
            <div className="params">
                    <div className="params_blur" />

                    <div className="params_about">
                        <About />
                    </div>

                    <div className="params_container">
                        <div className="params_gameInfo">
                          <h1>Matrix Cards</h1>
                          <h3>Перед началом игры выберите желаемые параметры</h3>
                        </div>

                        <div className="params_window">
                           <Games onClick={props.handleGameChoose} chosenGame={props.game}/>
                           <Modes onClick={props.handleModeChoose} botStatus={props.enableBot} />
                           <Nicknames player1N={props.player1} player2N={props.player2} onInput={props.handlePlayersNicknames} enableBot={props.enableBot} />                   
                           <Link className={btnCls.join(' ')} to={props.launchGame ? '/game' : '#'} onClick={checkValidation}>Начать</Link>
                        </div>
                    </div>
                </div>
        )
}

export default StartParams