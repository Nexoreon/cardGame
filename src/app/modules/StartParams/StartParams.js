import React, { Fragment } from 'react'
import App from '../../app'

class StartParams extends React.Component {
    state = {
        game: 'SMCards', // Выбранная игра
        enableBot: false, // Режим игры с ботом
        players: { // Никнеймы игроков
            player1: 'Первый игрок',
            player2: 'Второй игрок',
        },
        launchGame: false // Если true запускать игру
    }

    handleGameChoose = (e) => { // Отвечает за обработку выбранной игры. МЕТОД ДЛЯ БУДУЩЕГО, ТАК КАК СЕЙЧАС ДОСТУПНА ТОЛЬКО ОДНА ИГРА
        this.setState({
            game: e.target.id
        }, () => {
            if (this.state.game == 'TMNTCards') {
                alert('Эта игра станет доступна в следующих обновлениях')
                setTimeout(function() {
                    this.setState({
                        game: 'SMCards'
                    })
                }.bind(this), 500)
            }
        })
    }

    handleModeChoose = (e) => { // Обрабатывает режим игры. Если enableBot = true = бот включен
        if (e.target.id == 'twoPlayers') {
            this.setState({
              enableBot: false
            })
        } else if (e.target.id == 'singleplayer') {
            this.setState({
                enableBot: true
            })
        }
    }

    handlePlayersNicknames = (e) => { // Обрабатывает никнеймы игроков

        this.setState({
            players: {player1: e.target.id == 'playerOneName' ? e.target.value : this.state.players.player1, player2: this.state.enableBot ? 'Второй игрок' : e.target.id =='playerTwoName' ? e.target.value : this.state.players.player2} // Игрок1 = Если id вводимого поля совпадает с указанным id, то получаем данные из него, иначе оставляем никнейм без изменения. Игрок2 = Если бот включен, то поле деактивировано. Если выключено, то если id поля совпадает с  указанным id, то меняем никнейм игроку, иначе оставляем без изменения
        })
    }

    handleStartGame = () => { // Обрабатывает запуск игры
        if (this.state.players.player1 == "" || this.state.players.player2 == "") { // Если у одного из игроков никнейм пустой, то предупреждаем
            alert('Никнейм одного из игроков не заполнен')
        } else if (this.state.players.player1.length > 15 || this.state.players.player2.length > 15) { // Если у одного из игроков длинна ника больше 15 символов, то просим сократить никнейм
            alert('Имя игрока не может превышать 15 символов')
        } else {
            this.setState({
                launchGame: true
            })
        }

        window.addEventListener('resize', () => { // Временно
            if (window.innerWidth < 1920) {
                alert('На данный момент игра не поддерживает оконный режим и мобильные устройства. Поддержка будет добавлена позже')
                console.log(window.innerWidth)
            }
        })
    }

    render() {
        return (
            <Fragment>
            {this.state.launchGame ? <App game={this.state.game} enableBot={this.state.enableBot} player1={this.state.players.player1} player2={this.state.players.player2}/> : 
            <div className="params">
                <div className="params_gameInfo">
                  <h1>Matrix Cards</h1>
                  <h3>Перед началом игры выберите желаемые параметры</h3>
                </div>
                    <div className="params_games">
                    <h3>Выберите игру</h3>
                    <div className="games">
                        <p id="SMCards" className={this.state.game == 'SMCards' ? 'games_item games_item--selected' : 'games_item'} onClick={this.handleGameChoose} style={{backgroundImage: 'url(./images/games/sm.jpg)'}}>Человек Паук. Герои и Злодеи</p>
                        <p id="TMNTCards" className={this.state.game == 'TMNTCards' ? "games_item games_item--selected" : 'games_item'} onClick={this.handleGameChoose} style={{backgroundImage: 'url(./images/games/tmnt.jpg)'}}>Черепашки Ниндзя. Боевая четверка</p>
                        <p id="otherCards" className="games_item games_item--moreGamesSoon">Больше игр в будущем</p>
                    </div>
                    </div>

                    <div className="params_mode">
                    <h3>Режим</h3>
                    <div className="modes">
                     <p id="twoPlayers" className={!this.state.enableBot ? "modes_item modes_item--selected" : "modes_item"} onClick={this.handleModeChoose}>Два игрока</p>
                     <p id="singleplayer" className={this.state.enableBot ? "modes_item modes_item--selected" : "modes_item"} onClick={this.handleModeChoose}>Один игрок</p>
                    </div>
                    </div>

                    <div className="params_players">
                    <h3>Никнеймы игроков</h3>
                     <div className="players">
                        <span className="players_name">
                            <p>{this.state.enableBot ? 'Имя игрока' : 'Имя игрока 1 '}</p>
                            <input type="text" id="playerOneName" defaultValue={this.state.players.player1} onChange={this.handlePlayersNicknames}></input>
                        </span>
                        {!this.state.enableBot ? <span className="players_name players_name--border">
                            <p>Имя игрока 2 </p>
                            <input type="text" id="playerTwoName" defaultValue={this.state.players.player2} onChange={this.handlePlayersNicknames}></input>
                        </span> : null}
                        
                     </div>
                    </div>

                    <a className="button--cardGame button--startGame" onClick={this.handleStartGame}>Начать</a>
                </div> }
            </Fragment>
        )
    }
}

export default StartParams