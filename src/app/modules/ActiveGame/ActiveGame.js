import React, { Component} from 'react'
import './players/players.scss'
import BattleTable from './BattleTable/BattleTable'
import FirstPlayer from './players/FirstPlayer'
import SecoundPlayer from './players/SecoundPlayer'
import CardsList from './cards/CardsList'

class App extends Component {

  getCardsNumber = () => {
    const cardsAmount = 45 // TODO желательно сделать чтобы количество читалось из state
    let number = Math.floor(Math.random() * cardsAmount) // Данная строка функции выбирает рандомное число которое будет использовано для каждой карточки получая данные из state.cards
    return number
  }
 
  state = {
     blur: true, // Блюр бэкграунда
     players: { // Никнеймы игроков
      player1: this.props.player1,
      player2: this.props.player2
     },
     showCard: { // Отвечает за показ карточки. Если true, то заместо заглушки будет показываться карточка из state.cards
       card1: false,
       card2: false,
       card3: false,
       card4: false,
       card5: false,
       card6: false,
       card7: false,
       card8: false,
       card9: false,
       card10: false
     },
     cardStub: { // Отвечает за заглушки карточек. Если false, то заглушка перестает отображаться
      card1: true,
      card2: true,
      card3: true,
      card4: true,
      card5: true,
      card6: true,
      card7: true,
      card8: true,
      card9: true,
      card10: true
     },
     selectedCards: { // Собирает информацию о выбранной игроками карты
       firstPlayer: {
         cardId: null,
         cardSlot: null,
         cardInfo: {
           name: '-',
           imgUrl: null,
           intelligence: '-',
           strength: '-',
           velocity: '-',
           specialSkills: '-',
           fightingSkills: '-',
           special: '-'
         }
       },
       secoundPlayer: {
         cardId: null,
         cardSlot: null,
         cardInfo: {
          name: '-',
          imgUrl: null,
          intelligence: '-',
          strength: '-',
          velocity: '-',
          specialSkills: '-',
          fightingSkills: '-',
          special: '-'
        }
       }
     },
     totalScore: { // Счет матча
       firstPlayer: 0,
       secoundPlayer: 0
     },
     rounds: { // Текущий раунд
       currentRound: 1,
     },
     AI: { // Определяет включен ли бот или нет
       enabled: this.props.enableBot
     },
     statusMessage: { // Отображает статус игры и результат раунда
       message: 'Выберите карту для сражения, а затем нажмите на кнопку "Продолжить"',
       errorMessage: false
     },
     chkPlayersCards: { // Отвечает за проверку выбора карточек у игроков. Если у обоих ключей true, то игроки могут начать игру
       firstPlayer: false,
       secoundPlayer: false
     }, // nfc (Number for cards) хранит рандомные номера которые были получены с помощью метода getCardsNumbers. Они будут назначены для всех 10 карточек на поле
     nfc: [this.getCardsNumber(), this.getCardsNumber(), this.getCardsNumber(), this.getCardsNumber(), this.getCardsNumber(), this.getCardsNumber(), this.getCardsNumber(), this.getCardsNumber(), this.getCardsNumber(), this.getCardsNumber()] // numberForCard
 }

  // Метод отвечает за обработку карточки первого игрока которая будет отображаться на поле после выбора
 handleFPCard = (id, number) => {

   // Получаем номер карты для дальнейшей обработки значений
  const cardNumber = CardsList[id]

  // Изменяем состояние карты этого игрока на true, для того чтобы показать информацию о карточке на поле
   this.setState( {
     chkPlayersCards: { ...this.state.chkPlayersCards, firstPlayer: true },
     selectedCards: {...this.state.selectedCards, firstPlayer: {cardId: id, cardSlot: number, cardInfo: { name: cardNumber.name, imgUrl: cardNumber.imgUrl, intelligence: cardNumber.intelligence, strength: cardNumber.strength, velocity: cardNumber.velocity, specialSkills: cardNumber.specialSkills, fightingSkills: cardNumber.fightingSkills, special: cardNumber.special }}},
     statusMessage: {message: this.state.chkPlayersCards.secoundPlayer == false && !this.state.AI.enabled ? 'Теперь ' + this.props.player2 + ' должен выбрать карту' : this.state.chkPlayersCards.secoundPlayer == true || this.state.AI.enabled ? 'Игроки выбрали свои карты. Теперь нажмите кнопку "Продолжить" для запуска игры' : null}
   })
 }

 // Отвечает за выбор карточек ботом
 handleAICard = () => {
  let chosenNumber = Math.floor(Math.random() * (6 - 1) + 1) // Выбирает какую карточку откроет бот
  let card = 'card' + chosenNumber

  if (!this.state.cardStub[card]) { // Если карточка уже была ранее использована, то перевыбираем
    this.handleAICard()
  } else {

  let stateCard = chosenNumber - 1
  const cardNumber = CardsList[this.state.nfc[stateCard]]

  this.setState({
    showCard: {...this.state.showCard, [card]: true},
    cardStub: {...this.state.cardStub, [card]: false},
    chkPlayersCards: {...this.state.chkPlayersCards, firstPlayer: true},
    selectedCards: {...this.state.selectedCards, firstPlayer: { cardSlot: chosenNumber, cardId: this.state.nfc[stateCard], cardInfo: { name: cardNumber.name, imgUrl: cardNumber.imgUrl, intelligence: cardNumber.intelligence, strength: cardNumber.strength, velocity: cardNumber.velocity, specialSkills: cardNumber.specialSkills, fightingSkills: cardNumber.fightingSkills, special: cardNumber.special } }}
  })
}}
 
 // Выполняет идентичные действия как и FPCard, только для второго игрока
 handleSPCard = (id, number) => {
  const cardNumber = CardsList[id]

   if (this.state.AI.enabled && this.state.chkPlayersCards.firstPlayer === false || !this.state.AI.enabled) {

   this.setState( {
     chkPlayersCards: { ...this.state.chkPlayersCards, secoundPlayer: true },
     selectedCards: {...this.state.selectedCards, secoundPlayer: {cardId: id, cardSlot: number, cardInfo: { name: cardNumber.name, imgUrl: cardNumber.imgUrl, intelligence: cardNumber.intelligence, strength: cardNumber.strength, velocity: cardNumber.velocity, specialSkills: cardNumber.specialSkills, fightingSkills: cardNumber.fightingSkills, special: cardNumber.special }}},
     statusMessage: {message: this.state.chkPlayersCards.firstPlayer == false && !this.state.AI.enabled ? 'Теперь ' + this.props.player1 + ' должен выбрать карту' : this.state.chkPlayersCards.firstPlayer == true || this.state.AI.enabled ? 'Игроки выбрали свои карты. Теперь нажмите кнопку "Продолжить" для запуска игры' : null}
   })

   if (this.state.AI.enabled) { // Если бот включен то выполняем метод handleAICard
    setTimeout(function() { this.handleAICard() }.bind(this), 50)
   }} else { 
     this.setState({statusMessage: {message: 'Невозможно изменить карту после подтверждения выбора. Нажмите кнопку "Продолжить" для запуска игры', errorMessage: true}})}
 }
 
 // Если один из игроков выбрал себе карту, то на поле битвы с его стороны пропадает заглушка и появляется полноценная карточка, а так же показываются характеристики карты
 toggleCardHandler = (id) => {
   this.setState( {
     showCard: { ...this.state.showCard, [id]: true },
     cardStub: { ...this.state.cardStub, [id]: false }
   })
}

// Проверяет выбрали ли оба игрока себе карты. Если оба значения false, то появится предупреждение и игра не запустится
handleCheckChoosenCards = () => {
 if (this.state.chkPlayersCards.firstPlayer == false || this.state.chkPlayersCards.secoundPlayer == false) {
   return alert("Один из игроков или оба игрока не выбрали карточки для старта игры")
 } else if (this.state.selectedCards.firstPlayer.cardId == this.state.selectedCards.secoundPlayer.cardId && this.state.rounds.currentRound !== 5 && !this.state.AI.enabled) {
   return alert("Нельзя использовать одинаковые карточки против друг друга")
 } else if (this.state.rounds.currentRound == 5 && this.state.selectedCards.firstPlayer.cardId == this.state.selectedCards.secoundPlayer.cardId) {
   alert('Невозможно использовать одинаковые карточки на последнем раунде. Завершение матча...')
   this.startGame()
 } else if (this.state.selectedCards.firstPlayer.cardId === this.state.selectedCards.secoundPlayer.cardId && this.state.rounds.currentRound !== 5 && this.state.AI.enabled) {
   alert('Обнаружены одинаковые карточки. Этот раунд будет пропущен')
   this.startGame()
 } else { this.startGame() }
}

// Отвечает за обработку самой игры
startGame = () => {
  const cardIdent = CardsList // cardIdentification. Получает доступ ко всем карточкам
  const firstPlayerCard = cardIdent[this.state.selectedCards.firstPlayer.cardId] // Получает выбранную первым игроком карточку
  const secoundPlayerCard = cardIdent[this.state.selectedCards.secoundPlayer.cardId] // Получает выбранную вторым игроком карточку

  let currentRound = this.state.rounds.currentRound // Текущий раунд
  let firstPlayerTotalScore = this.state.totalScore.firstPlayer // Счет матча первого игрока
  let secoundPlayerTotalScore = this.state.totalScore.secoundPlayer // Счет матча второго игрока

  let firstPlayerScore = 0 // Счет карточки первого игрока
  let secoundPlayerScore = 0 // Счет карточки второго игрока

 // Функция сравнивает параметр интеллект у обоих карточек на поле сражения
  function calculateINT() {
    if (secoundPlayerCard.intelligence > firstPlayerCard.intelligence) {
      return secoundPlayerScore ++
   } else if (secoundPlayerCard.intelligence < firstPlayerCard.intelligence) {
      return firstPlayerScore ++}
   else { null }
  } 

  calculateINT()

  // Функция сравнивает параметр сила у обоих карточек на поле сражения
  function calculateSTR() {
    if (secoundPlayerCard.strength > firstPlayerCard.strength) {
      return secoundPlayerScore ++
    } else if (secoundPlayerCard.strength < firstPlayerCard.strength) {
      return firstPlayerScore ++} else { null }
  }

  calculateSTR()

  // Функция сравнивает параметр ловкость у обоих карточек на поле сражения
  function calculateAGL() {
    if (secoundPlayerCard.velocity > firstPlayerCard.velocity) {
      return secoundPlayerScore ++
    } else if (secoundPlayerCard.velocity < firstPlayerCard.velocity) {
      return firstPlayerScore ++} else { null }
  }

  calculateAGL()

  // Функция сравнивает параметр умений у обоих карточек на поле сражения
  function calculateSS() {
    if (secoundPlayerCard.specialSkills > firstPlayerCard.specialSkills) {
      return secoundPlayerScore ++
    } else if (secoundPlayerCard.specialSkills < firstPlayerCard.specialSkills) {
      return firstPlayerScore ++} else { null }
  }

  calculateSS()

  // Функция сравнивает параметр бойцовских навыков у обоих карточек на поле сражения
  function calculateFS() {
    if (secoundPlayerCard.fightingSkills > firstPlayerCard.fightingSkills) {
      return secoundPlayerScore ++
    } else if (secoundPlayerCard.fightingSkills < firstPlayerCard.fightingSkills) {
      return firstPlayerScore ++} else { null }
  }

  calculateFS()

  // Функция сравнивает счет между игроками
  if (secoundPlayerScore > firstPlayerScore && !this.state.AI.enabled) {
      this.setState({ // Если карточка основного игрока выиграла, то ему добавляется 1 очко в итоговый счет
        totalScore: {...this.state.totalScore, secoundPlayer: secoundPlayerTotalScore + 1 },
        statusMessage: {message: this.props.player2 + " выиграл раунд со счетом: " + secoundPlayerScore + "\n" + " Счет игрока " + this.props.player1 + ": " + firstPlayerScore, errorMessage: false}
      })
    } else if (secoundPlayerScore > firstPlayerScore && this.state.AI.enabled) {
      this.setState({ 
        totalScore: {...this.state.totalScore, secoundPlayer: secoundPlayerTotalScore + 1 },
        statusMessage: {message: "Вы выиграли раунд со счетом: " + secoundPlayerScore + "\n" + " Счет противника: " + firstPlayerScore, errorMessage: false}
      })
    } else if (secoundPlayerScore < firstPlayerScore && !this.state.AI.enabled) {
    this.setState({  // Если карточка основного игрока проиграла, то сопернику добавляется 1 очко в итоговый счет
      totalScore: { ...this.state.totalScore, firstPlayer: firstPlayerTotalScore + 1 },
      statusMessage: {message: this.props.player1 + " выиграл раунд со счетом: " + firstPlayerScore + "\n" + " Счет игрока " + this.props.player2 + ": " + secoundPlayerScore, errorMessage: false}
    })
  } else if (secoundPlayerScore < firstPlayerScore && this.state.AI.enabled) {
    this.setState({ 
      totalScore: { ...this.state.totalScore, firstPlayer: firstPlayerTotalScore + 1 },
      statusMessage: {message: "Противник выиграл раунд со счетом: " + firstPlayerScore + "\n" + " Ваш счет: " + secoundPlayerScore, errorMessage: false}
    })
   } else { null }

  this.setState( { 
     showCard: { ...this.state.showCard, ['card'+this.state.selectedCards.firstPlayer.cardSlot]: false, ['card'+this.state.selectedCards.secoundPlayer.cardSlot]: false}, // Убирает сыгранные карты с поля
     rounds: {...this.state.rounds, currentRound: currentRound + 1 }
  }, () => { // Переводит на компонент результатов игры если раунд = 6
    if (this.state.rounds.currentRound == 6) {
      this.props.history.push({pathname: '/results', state: this.state})
    }
  })

 // Сбрасывает значения выбранных карт на дефолтные

 this.setState( {
  chkPlayersCards: { ...this.state.chkPlayersCards, firstPlayer: false, secoundPlayer: false},
  selectedCards: {...this.state.selectedCards, firstPlayer:{ cardInfo: {name: '-', intelligence: '-', strength: '-', velocity: '-', specialSkills: '-', fightingSkills: '-', special: '-', imgUrl: null}}, secoundPlayer:{ cardInfo: {name: '-', intelligence: '-', strength: '-', velocity: '-', specialSkills: '-', fightingSkills: '-', special: '-', imgUrl: null}}}
 })
}

// Поле игры с карточками
 render() {
   console.log(this.props.history)
   const tableCls = ['table', this.state.blur ? 'table_blurAnim' : '']

    return (
    <div id="table" className={tableCls.join(' ')} onAnimationEnd={() => this.setState({ blur: false})}>
      <div id='competitorSide' className="table_firstPlayer">
        <div className="player_info">
          <h1>{this.state.AI.enabled ? "Cоперник" : this.props.player1}</h1>
          <p className="player_score">{this.state.totalScore.firstPlayer}</p>
        </div>
            <FirstPlayer stubs={this.state.cardStub} hideStub={this.toggleCardHandler} getCards={CardsList} cardNumber={this.state.nfc} showCard={this.state.showCard} handleCard={this.handleFPCard} checkAI={this.state.AI.enabled}/>
      </div>

      <div className="table_secoundPlayer">
       <div className="player_info">
         <h1>{this.state.AI.enabled ? this.props.player1 : this.props.player2}</h1>
         <p id="secoundPlayerScore" className="player_score">{this.state.totalScore.secoundPlayer}</p>
        </div>
            <SecoundPlayer stubs={this.state.cardStub} hideStub={this.toggleCardHandler} getCards={CardsList} cardNumber={this.state.nfc} showCard={this.state.showCard} handleCard={this.handleSPCard} />
      </div>

      <div className="table_battleTable">
       <BattleTable status={this.state.statusMessage} FPcardInfo={this.state.selectedCards.firstPlayer.cardInfo} SPcardInfo={this.state.selectedCards.secoundPlayer.cardInfo} startGame={this.handleCheckChoosenCards} />
     </div>
    </div>)
 }
}

export default App