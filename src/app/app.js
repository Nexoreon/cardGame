import React, { Component} from 'react'
import BattleTable from './components/battleTable/BattleTable'
import FirstPlayer from './components/players/FirstPlayer'
import SecoundPlayer from './components/players/SecoundPlayer'

class App extends Component {

  getCardsNumber = () => {
    const cardsAmount = 30 // TODO желательно сделать чтобы количество читалось из state
    let number = Math.floor(Math.random() * cardsAmount) // Данная строка функции выбирает рандомное число которое будет использовано для каждой карточки получая данные из state.cards
    return number
  }
 
  state = { //
     cards: [ //TODO добавить больше карточек для игры
        {name: 'Человек паук', imgUrl: './images/1.jpg', intelligence: 275, strength: 276, velocity: 213, specialSkills: 140, fightingSkills: 280, special: 1},
        {name: 'Дядюшка Бен', imgUrl: './images/2.jpg', intelligence: 130, strength: 71, velocity: 112, specialSkills: 54, fightingSkills: 68},
        {name: 'Человек-Факел', imgUrl: './images/3.jpg', intelligence: 133, strength: 104, velocity: 354, specialSkills: 349, fightingSkills: 202, special: 1},
        {name: 'Паразит', imgUrl: './images/4.jpg', intelligence: 112, strength: 164, velocity: 186, specialSkills: 68, fightingSkills: 139},
        {name: 'Зеленый гоблин', imgUrl: './images/5.jpg', intelligence: 263, strength: 253, velocity: 199, specialSkills: 201, fightingSkills: 211, special: 1},
        {name: 'Черная вдова', imgUrl: './images/6.jpg', intelligence: 208, strength: 127, velocity: 131, specialSkills: 158, fightingSkills: 349},
        {name: 'Капитан Америка', imgUrl: './images/7.jpg', intelligence: 201, strength: 213, velocity: 141, specialSkills: 68, fightingSkills: 499, special: 1},
        {name: 'Доктор Дум', imgUrl: './images/8.jpg', intelligence: 424, strength: 282, velocity: 350, specialSkills: 413, fightingSkills: 271},
        {name: 'Водяной', imgUrl: './images/9.jpg', intelligence: 74, strength: 96, velocity: 136, specialSkills: 243, fightingSkills: 142},
        {name: 'Гризли', imgUrl: './images/10.jpg', intelligence: 123, strength: 245, velocity: 143, specialSkills: 72, fightingSkills: 202},
        {name: 'Человек-Лёд', imgUrl: './images/11.jpg', intelligence: 126, strength: 114, velocity: 203, specialSkills: 327, fightingSkills: 146},
        {name: 'Человек-Песок', imgUrl: './images/12.jpg', intelligence: 140, strength: 415, velocity: 136, specialSkills: 74, fightingSkills: 136},
        {name: 'Веном', imgUrl: './images/13.jpg', intelligence: 135, strength: 223, velocity: 207, specialSkills: 68, fightingSkills: 141, special: 1},
        {name: 'Шакал', imgUrl: './images/14.jpg', intelligence: 276, strength: 273, velocity: 132, specialSkills: 70, fightingSkills: 199},
        {name: 'Гвен Стейси', imgUrl: './images/15.jpg', intelligence: 139, strength: 83, velocity: 137, specialSkills: 25, fightingSkills: 32},
        {name: 'Ястребиный глаз', imgUrl: './images/16.jpg', intelligence: 129, strength: 143, velocity: 136, specialSkills: 58, fightingSkills: 286},
        {name: 'Доктор Стрендж', imgUrl: './images/17.jpg', intelligence: 279, strength: 137, velocity: 498, specialSkills: 418, fightingSkills: 201, special: 1},
        {name: 'Мадам паутина', imgUrl: './images/18.jpg', intelligence: 274, strength: 60, velocity: 71, specialSkills: 53, fightingSkills: 68},
        {name: 'Кенгуру', imgUrl: './images/19.jpg', intelligence: 73, strength: 205, velocity: 213, specialSkills: 61, fightingSkills: 137},
        {name: 'Скорпион', imgUrl: './images/20.jpg', intelligence: 136, strength: 327, velocity: 135, specialSkills: 123, fightingSkills: 86, special: 1},
        {name: 'Росомаха', imgUrl: './images/21.jpg', intelligence: 216, strength: 267, velocity: 206, specialSkills: 70, fightingSkills: 253, special: 1},
        {name: 'Женщина-Паук', imgUrl: './images/22.jpg', intelligence: 137, strength: 230, velocity: 199, specialSkills: 265, fightingSkills: 276},
        {name: 'Твердный лоб', imgUrl: './images/23.jpg', intelligence: 75, strength: 92, velocity: 83, specialSkills: 62, fightingSkills: 138},
        {name: 'Шокер', imgUrl: './images/24.jpg', intelligence: 142, strength: 136, velocity: 127, specialSkills: 276, fightingSkills: 119},
        {name: 'Стегрон', imgUrl: './images/25.jpg', intelligence: 303, strength: 227, velocity: 185, specialSkills: 59, fightingSkills: 137},
        {name: 'Синяя птица', imgUrl: './images/26.jpg', intelligence: 97, strength: 83, velocity: 106, specialSkills: 72, fightingSkills: 142},
        {name: 'Аркейд', imgUrl: './images/27.jpg', intelligence: 357, strength: 135, velocity: 128, specialSkills: 84, fightingSkills: 141},
        {name: 'Доктор Осьминог', imgUrl: './images/28.jpg', intelligence: 327, strength: 141, velocity: 127, specialSkills: 66, fightingSkills: 285},
        {name: 'Белый кролик', imgUrl: './images/29.jpg', intelligence: 124, strength: 99, velocity: 136, specialSkills: 72, fightingSkills: 84},
        {name: 'Существо', imgUrl: './images/30.jpg', intelligence: 142, strength: 426, velocity: 139, specialSkills: 68, fightingSkills: 346, special: 1}
     ],
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
       enabled: this.props.enableBot,
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
  const cardNumber = this.state.cards[id]

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
  const cardNumber = this.state.cards[this.state.nfc[stateCard]]

  this.setState({
    showCard: {...this.state.showCard, [card]: true},
    cardStub: {...this.state.cardStub, [card]: false},
    chkPlayersCards: {...this.state.chkPlayersCards, firstPlayer: true},
    selectedCards: {...this.state.selectedCards, firstPlayer: { cardSlot: chosenNumber, cardId: this.state.nfc[stateCard], cardInfo: { name: cardNumber.name, imgUrl: cardNumber.imgUrl, intelligence: cardNumber.intelligence, strength: cardNumber.strength, velocity: cardNumber.velocity, specialSkills: cardNumber.specialSkills, fightingSkills: cardNumber.fightingSkills, special: cardNumber.special } }}
  })
}}
 
 // Выполняет идентичные действия как и FPCard, только для второго игрока
 handleSPCard = (id, number) => {
  const cardNumber = this.state.cards[id]

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
handleCheckChoosedCards = () => {
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
  const cardIdent = this.state.cards // cardIdentification. Получает доступ ко всем карточкам
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
  }, () => { // Сообщает результат игры. InnerHTML будет заменен в будущем
    if (this.state.rounds.currentRound == 6 && this.state.totalScore.secoundPlayer > this.state.totalScore.firstPlayer && !this.state.AI.enabled) {
      document.querySelector("#cardGame").innerHTML = '<div class="cardGame_gameOver"><i class="fa fa-trophy icon_win"></i><h1>' + this.props.player2 + ' победил</h1><div class="cardGame_gameOver_playersScore"><div><h3>' + this.props.player1 + '</h3><p class="result_lose">' + this.state.totalScore.firstPlayer + '</p></div><div><h3>' + this.props.player2 + '</h3><p class="result_win">' + this.state.totalScore.secoundPlayer  + '</p></div></div><a class="button--cardGame button--results" onclick="document.location.reload(true)">Новая игра</a></div>'
    } else if (this.state.rounds.currentRound == 6 && this.state.totalScore.secoundPlayer < this.state.totalScore.firstPlayer && !this.state.AI.enabled) {
      document.querySelector("#cardGame").innerHTML = '<div class="cardGame_gameOver"><i class="fa fa-trophy cardGame_gameOver_icon icon_win"></i><h1>' + this.props.player1 + ' победил</h1><div class="cardGame_gameOver_playersScore"><div><h3>' + this.props.player1 + '</h3><p class="result_win">' + this.state.totalScore.firstPlayer + '</p></div><div><h3>' + this.props.player2 + '</h3><p class="result_lose">' + this.state.totalScore.secoundPlayer + '</p></div></div><a class="button--cardGame button--results" onclick="document.location.reload(true)">Новая игра</a></div>'
    } else if (this.state.rounds.currentRound == 6 && this.state.totalScore.secoundPlayer == this.state.totalScore.firstPlayer) {
    document.querySelector("#cardGame").innerHTML = '<div class="cardGame_gameOver"><i class="fa fa-balance-scale cardGame_gameOver_icon icon_draw"></i><h1>Ничья</h1><h3>У обоих игроков одинаковое количество очков</h3><a class="button--cardGame button--results" onclick="document.location.reload(true)">Новая игра</a></div></div>'
   } else if (this.state.rounds.currentRound == 6 && this.state.totalScore.secoundPlayer > this.state.totalScore.firstPlayer && this.state.AI.enabled) {
    document.querySelector("#cardGame").innerHTML = '<div class="cardGame_gameOver"><i class="fa fa-trophy icon_win"></i><h1>Вы победили</h1><div class="cardGame_gameOver_playersScore"><div><h3>Противник</h3><p class="result_lose">' + this.state.totalScore.firstPlayer + '</p></div><div><h3>' + this.props.player1 + '</h3><p class="result_win">' + this.state.totalScore.secoundPlayer  + '</p></div></div><a class="button--cardGame button--results" onclick="document.location.reload(true)">Новая игра</a></div>'
   } else if (this.state.rounds.currentRound == 6 && this.state.totalScore.secoundPlayer < this.state.totalScore.firstPlayer && this.state.AI.enabled) {
    document.querySelector("#cardGame").innerHTML = '<div class="cardGame_gameOver"><i class="fa fa-times cardGame_gameOver_icon icon_lose"></i><h1>Соперник победил</h1><div class="cardGame_gameOver_playersScore"><div><h3>Соперник</h3><p class="result_win">' + this.state.totalScore.firstPlayer + '</p></div><div><h3>' + this.props.player1 + '</h3><p class="result_lose">' + this.state.totalScore.secoundPlayer + '</p></div></div><a class="button--cardGame button--results" onclick="document.location.reload(true)">Новая игра</a></div>'
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
    return (
    <div id="table" className="table">
      <div id='competitorSide' className="table_firstPlayer">
        <div className="player_info">
          <h1>{this.state.AI.enabled ? "Cоперник" : this.props.player1}</h1>
          <p className="player_score">{this.state.totalScore.firstPlayer}</p>
        </div>
            <FirstPlayer stubs={this.state.cardStub} hideStub={this.toggleCardHandler} getCards={this.state.cards} cardNumber={this.state.nfc} showCard={this.state.showCard} handleCard={this.handleFPCard} checkAI={this.state.AI.enabled}/>
      </div>

      <div className="table_secoundPlayer">
       <div className="player_info">
         <h1>{this.state.AI.enabled ? this.props.player1 : this.props.player2}</h1>
         <p id="secoundPlayerScore" className="player_score">{this.state.totalScore.secoundPlayer}</p>
        </div>
            <SecoundPlayer stubs={this.state.cardStub} hideStub={this.toggleCardHandler} getCards={this.state.cards} cardNumber={this.state.nfc} showCard={this.state.showCard} handleCard={this.handleSPCard} />
      </div>

      <div className="table_battleTable">
       <BattleTable status={this.state.statusMessage} FPcardInfo={this.state.selectedCards.firstPlayer.cardInfo} SPcardInfo={this.state.selectedCards.secoundPlayer.cardInfo} startGame={this.handleCheckChoosedCards} />
     </div>
    </div>)
 }
}

export default App