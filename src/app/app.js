import React from 'react'
import '../scss/index.scss'
import {Route, Redirect, Switch} from 'react-router-dom'
import ActiveGame from './modules/ActiveGame/ActiveGame'
import Results from './modules/Results/Results'
import StartParams from './modules/StartParams/StartParams'

class App extends React.Component {
    state = {
        popupWindow: false, // Всплывающее окно
        game: 'SMCards', // Выбранная игра
        enableBot: false, // Режим игры с ботом
        players: { // Никнеймы игроков
            player1: 'Первый игрок',
            player2: 'Второй игрок',
        },
        launchGame: true // Если true запускать игру
    }

    handleGameChoose = (e) => { // Отвечает за обработку выбранной игры. МЕТОД ДЛЯ БУДУЩЕГО, ТАК КАК СЕЙЧАС ДОСТУПНА ТОЛЬКО ОДНА ИГРА
        this.setState({
            game: e.target.id
        }, () => {
            if (this.state.game == 'TMNTCards') {
                this.setState({
                    popupWindow: true
                })
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
        }, () => {
            if (this.state.players.player1 == "" || this.state.players.player2 == "") { // Если у одного из игроков никнейм пустой, то предупреждаем
                this.setState({launchGame: false})
            } else if (this.state.players.player1.length >= 16 || this.state.players.player2.length >= 16) { // Если у одного из игроков длинна ника больше 15 символов, то просим сократить никнейм
                this.setState({launchGame: false})
            } else if (this.state.players.player1.includes('  ') || this.state.players.player2.includes('  ') || this.state.players.player1 == ' ' || this.state.players.player2 == ' ') { // Если у одного из игроков более одного пробела или весь ник состоит из пустой строки, то просим изменить никнейм
                this.setState({launchGame: false})
            } else {
                this.setState({
                    launchGame: true
                })
            }
        })
    }

    handlePopupWindow = () => { // Обрабатывает закрытие всплывающего окна
        this.setState({
            popupWindow: !this.state.popupWindow,
        }, () => {
            if (this.state.game == 'TMNTCards') {
                this.setState({
                    game: 'SMCards'
                })
            }
        })
    }

    checkValidation = () => { // Если при нажатие кнопки валидация была провалена, то выводим пользователю сообщение с ошибкой
        if (!this.state.launchGame) {
            this.setState({
                popupWindow: true
            })
        }
    }

    render() {
        return (
            <Switch>
                <Route path="/setup" render={props => ( <StartParams {...props} handlePlayersNicknames={this.handlePlayersNicknames} handleModeChoose={this.handleModeChoose} player1={this.state.players.player1} player2={this.state.players.player2} enableBot={this.state.enableBot} handleGameChoose={this.handleGameChoose} game={this.state.game} launchGame={this.state.launchGame} handlePopupWindow={this.handlePopupWindow} checkValidation={this.checkValidation} popupWindow={this.state.popupWindow} /> )} />
                <Route path="/game" render={props => ( <ActiveGame {...props} player1={this.state.players.player1} player2={this.state.players.player2} enableBot={this.state.enableBot} /> )} />
                <Route path="/results" component={Results} />
                <Redirect to="/setup" />
            </Switch>
        )
    }
}

export default App