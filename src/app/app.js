import React from 'react'
import '../scss/index.scss'
import {Route, Redirect, Switch} from 'react-router-dom'
import Layout from '../app/components/Layout/Layout'
import ActiveGame from './modules/ActiveGame/ActiveGame'
import Results from './modules/Results/Results'
import StartParams from './modules/StartParams/StartParams'
import PopupWindow from './components/PopupWindow/PopupWindow'

class App extends React.Component {
    state = {
        popup: { // Popup window
            enabled: false,
            errorNum: null
        },
        game: 'SMCards', // Selected game
        enableBot: false, // Mode to play with a bot
        players: { // Players nicknames
            player1: 'Первый игрок',
            player2: 'Второй игрок',
        },
        launchGame: true // if true, laucn the game
    }

    handleGameChoose = (e) => { //  Handles game selection. Currently been used as stub
        this.setState({
            game: e.target.id
        }, () => {
            if (this.state.game == 'gwent') {
                this.handlePopupWindow(2)
            }
        })
    }

    handleModeChoose = (e) => { // Handles game mode selection. if true, bot is going to be enabled
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

    handlePlayersNicknames = (e) => { // Handles players nicknames
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

    handlePopupWindow = (erNum) => { // Handles popup window opening and closing
        this.setState({
            popup: {enabled: !this.state.popup.enabled, errorNum: erNum == undefined ? null : erNum}
        }, () => {
            if (this.state.game == 'gwent') {
                this.setState({
                    game: this.state.popup.errorNum !== null ? this.state.game : 'SMCards'
                })
            }
        })
    }

    renderErrors = () => { // If state.popup.enabled is true, find and return error message into popup window
        const errorsList = [
            {title: 'Невозможно запустить', message: 'Проверьте правильность заполнения поля ввода', condition: this.state.popup.errorNum == 1},
            {title: 'Игра недоступна', message: 'Данная игра появится в следующих обновлениях', condition: this.state.popup.errorNum == 2},
            {title: 'Карта не выбрана', message: 'Один из игроков или оба игрока не выбрали карту для этого раунда', condition: this.state.popup.errorNum == 3 },
            {title: 'Карта уже выбрана', message: 'Невозможно изменить карту после подтверждения выбора. Нажмите кнопку "Продолжить" для запуска игры', condition: this.state.popup.errorNum == 4},
            {title: 'Невозможно открыть все карточки', message: 'Открыть все карточки нажатием этой кнопки можно только в первом раунде', condition: this.state.popup.errorNum == 5},
            {title: 'Карточки уже открыты', message: 'Все карточки этого игрока уже были открыты ранее', condition: this.state.popup.errorNum == 6},
            {title: 'Функция недоступна', message: 'Эта функция появится в будущих обновлениях', condition: this.state.popup.errorNum == 7}
        ]

        return errorsList.filter(error => error.condition).map((error, index) => {
            return <PopupWindow key={index} title={error.title} errorText={error.message} onClick={this.handlePopupWindow} cButtonTitle={error.cButtonTitle} cFunc={error.cFunc} />
        })
    }

    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/setup" render={props => ( <StartParams {...props} 
                    handlePlayersNicknames={this.handlePlayersNicknames} 
                    handleModeChoose={this.handleModeChoose} 
                    player1={this.state.players.player1} 
                    player2={this.state.players.player2} 
                    enableBot={this.state.enableBot} 
                    handleGameChoose={this.handleGameChoose} 
                    game={this.state.game} 
                    launchGame={this.state.launchGame} 
                    handlePopupWindow={this.handlePopupWindow} 
                    checkValidation={this.checkValidation} 
                    errorNum={this.state.popup.errorNum} /> )} 
                    />

                    <Route path="/game" render={props => ( <ActiveGame {...props} 
                    player1={this.state.players.player1} 
                    player2={this.state.players.player2} 
                    enableBot={this.state.enableBot} 
                    errorNum={this.state.popup.errorNum}
                    handlePopupWindow={this.handlePopupWindow} /> )} 
                    />

                    <Route path="/results" render={props => ( <Results {...props} 
                    players={this.state.players} 
                    bot={this.state.enableBot} /> )} 
                    />

                    <Redirect to="/setup" />
                </Switch>
                {this.state.popup.enabled ? this.renderErrors() : null}
            </Layout>
        )
    }
}

export default App