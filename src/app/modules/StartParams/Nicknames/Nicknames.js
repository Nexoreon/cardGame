import React from 'react'
import Input from './Input/Input'

const Nicknames = props => {
    const verification = (e) => {
        if (e.target.value == '') {
            return 'Имя игрока не может быть пустым'
        } else if (e.target.value >= 16) {
            return 'Имя не должно превышать 15 символов'
        } else {
            null
        }
    }

    return(
        <div className="params_players">
            <h3>Никнеймы игроков</h3>
            <div className="players">
                <Input type="text" id="playerOneName" value={props.player1N} onInput={props.onInput} title="Игрок 1" verification={verification}/>
                {!props.enableBot ? <Input type="text" id="playerTwoName" value={props.player2N} onInput={props.onInput} title="Игрок 2" verification={verification} /> : null}
            </div>
        </div>
    )
} 

export default Nicknames

{/* <span className="players_name">
                    <p>{this.state.enableBot ? 'Имя игрока' : 'Имя игрока 1 '}</p>
                    <input type="text" id="playerOneName" defaultValue={this.state.players.player1} onInput={this.handlePlayersNicknames}></input>
                    <p className="players_emptyName">{this.state.players.player1 == '' ? 'Имя игрока не может быть пустым' : null}{this.state.players.player1.length >= 16 ? 'Имя не должно превышать 15 символов' : null}</p>
                </span>
                        {!this.state.enableBot ? <span className="players_name players_name--border">
                            <p>Имя игрока 2 </p>
                            <input type="text" id="playerTwoName" defaultValue={this.state.players.player2} onInput={this.handlePlayersNicknames}></input>
                            <p className="players_emptyName">{this.state.players.player2 == '' ? 'Имя игрока не может быть пустым' : null}{this.state.players.player2.length >= 16 ? 'Имя не должно превышать 15 символов' : null}</p>
                        </span> : null}
                        
                     </div> */}