import React, { Component} from 'react'
import './ActiveGame.scss'
import CardsList from './cards/CardsList'
import Player from './Player/Player'
import Player2 from './Player/Player2'
import BattleTable from './BattleTable/BattleTable'
import cardsList from './cards/CardsList'

class App extends Component {
 
  state = {
     blurred: true, // Handles blur disappearing
     showCard: { // Handles what card should be visible. If true, hide it's stub and show the card
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
     cardStub: { // Handles cards stubs. If false, hides the stub and shows the card
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
     selectedCards: { // Collects information about card that been selected by players
       firstPlayer: {
         allCardsBtnActive: true,
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
         allCardsBtnActive: true,
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
     totalScore: { // Match score
       firstPlayer: 0,
       secoundPlayer: 0
     },
     rounds: { // Current round
       currentRound: 1,
     },
     statusMessage: { // Shows current status of the game and round results
       message: 'Выберите карту для сражения, а затем нажмите на кнопку "Продолжить"',
       errorMessage: false
     },
     chkPlayersCards: { // Handles if players have selected their cards. If both properties true, players can start the game
       firstPlayer: false,
       secoundPlayer: false
     }, // nfc (Number for card) Contains random generated numbers that are going to be used to define which card to show
     nfc: [] // numberForCard
 }

 componentDidMount() {
  const cardNumbers = []

  function generateNum() {
   return Math.floor(Math.random() * cardsList.length)
  }
  
  while(cardNumbers.length !== 10) { // While cardNumbers length is less than 10 numbers, keep adding generated numbers into array 
    const genNumber = generateNum()

    if (!cardNumbers.includes(genNumber)) { // If generated number is unique, pushing it into array 
      cardNumbers.push(genNumber)
    }
  }

  this.setState({
    nfc: cardNumbers
  })
 }

  // Handles player selected card for further actions
 handleFPCard = (id, number) => {

   // Getting card number for further actions
  const cardNumber = CardsList[id]

   this.setState( {
     chkPlayersCards: { ...this.state.chkPlayersCards, firstPlayer: true }, // Changing players state to ready for this round
     selectedCards: {...this.state.selectedCards, showInfo: false, firstPlayer: {...this.state.selectedCards.firstPlayer, cardId: id, cardSlot: number, cardInfo: { name: cardNumber.name, imgUrl: cardNumber.imgUrl, intelligence: cardNumber.intelligence, strength: cardNumber.strength, velocity: cardNumber.velocity, specialSkills: cardNumber.specialSkills, fightingSkills: cardNumber.fightingSkills, special: cardNumber.special }}}, // card properties
     statusMessage: {message: this.state.chkPlayersCards.secoundPlayer == false && !this.props.enableBot ? 'Теперь ' + this.props.player2 + ' должен выбрать карту' : this.state.chkPlayersCards.secoundPlayer == true || this.props.enableBot ? 'Игроки выбрали свои карты. Теперь нажмите кнопку "Продолжить" для запуска игры' : null} // Changing status message
   })
 }

 // Handles bot
 handleAICard = () => {
  let chosenNumber = Math.floor(Math.random() * (6 - 1) + 1) // Selects which card is going to be open by the bot
  let card = 'card' + chosenNumber

  if (!this.state.cardStub[card]) { // If current card already been used, trying again
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

   if (this.props.enableBot && this.state.chkPlayersCards.firstPlayer === false || !this.props.enableBot) {

   this.setState( {
     chkPlayersCards: { ...this.state.chkPlayersCards, secoundPlayer: true },
     selectedCards: {...this.state.selectedCards, secoundPlayer: {...this.state.selectedCards.secoundPlayer, cardId: id, cardSlot: number, cardInfo: { name: cardNumber.name, imgUrl: cardNumber.imgUrl, intelligence: cardNumber.intelligence, strength: cardNumber.strength, velocity: cardNumber.velocity, specialSkills: cardNumber.specialSkills, fightingSkills: cardNumber.fightingSkills, special: cardNumber.special }}},
     statusMessage: {message: this.state.chkPlayersCards.firstPlayer == false && !this.props.enableBot ? 'Теперь ' + this.props.player1 + ' должен выбрать карту' : this.state.chkPlayersCards.firstPlayer == true || this.props.enableBot ? 'Игроки выбрали свои карты. Теперь нажмите кнопку "Продолжить" для запуска игры' : null}
   })

   if (this.props.enableBot) { // If bot is on, execute handleAICard
    setTimeout(function() { this.handleAICard() }.bind(this), 50)
   }} else { 
     this.props.handlePopupWindow(4)
   }
 }
 
 // If player selected his card, hiding the stub and showing selected card with it's characteristics
 toggleCardHandler = (id) => {
   this.setState( {
     showCard: { ...this.state.showCard, [id]: true },
     cardStub: { ...this.state.cardStub, [id]: false }
   })
}

// Reveals all player cards if player pressed "reveal all cards" button
handleOpenAllCards = (player) => {
  const chkPlr1Cards = Object.keys(this.state.cardStub).map((card) => this.state.cardStub[card]).slice(0, 5).includes(true)
  const chkPlr2Cards = Object.keys(this.state.cardStub).map((card) => this.state.cardStub[card]).slice(5, 10).includes(true)

  if (player == 'p1' && this.state.selectedCards.firstPlayer.allCardsBtnActive) {
    this.setState({
      cardStub: {...this.state.cardStub, card1: false, card2: false, card3: false, card4: false, card5: false},
      showCard: {...this.state.showCard, card1: true, card2: true, card3: true, card4: true, card5: true},
      selectedCards: {...this.state.selectedCards, firstPlayer:{...this.state.selectedCards.firstPlayer, allCardsBtnActive: false}}
    })
  } else if (player == 'p2' && this.state.selectedCards.secoundPlayer.allCardsBtnActive) {
    this.setState({
      cardStub: {...this.state.cardStub, card6: false, card7: false, card8: false, card9: false, card10: false},
      showCard: {...this.state.showCard, card6: true, card7: true, card8: true, card9: true, card10: true},
      selectedCards: {...this.state.selectedCards, secoundPlayer:{...this.state.selectedCards.secoundPlayer, allCardsBtnActive: false}}
    })
  } else if (chkPlr1Cards == false && player == 'p1' || chkPlr2Cards == false && player == 'p2') {
    this.props.handlePopupWindow(6)
  } else {
    this.props.handlePopupWindow(5)
  }
}

// Checks if both players selected their cards. If false, shows error message and round won't start
handleCheckChoosenCards = () => {
 if (this.state.chkPlayersCards.firstPlayer == false || this.state.chkPlayersCards.secoundPlayer == false) {
  this.props.handlePopupWindow(3)
 } else { this.startGame() }
}

// Handles the game itself
startGame = () => {
  const cardIdent = CardsList // cardIdentification. Getting access to all available cards
  const firstPlayerCard = cardIdent[this.state.selectedCards.firstPlayer.cardId]
  const secoundPlayerCard = cardIdent[this.state.selectedCards.secoundPlayer.cardId] 

  let currentRound = this.state.rounds.currentRound
  let firstPlayerTotalScore = this.state.totalScore.firstPlayer // Total score of the first player
  let secoundPlayerTotalScore = this.state.totalScore.secoundPlayer // Total score of the secound player

  let firstPlayerScore = 0 // Round score of the first player
  let secoundPlayerScore = 0 // Round score of the secound player

 // Compares params between both cards
  function calculateINT() {
    if (secoundPlayerCard.intelligence > firstPlayerCard.intelligence) {
      return secoundPlayerScore ++
   } else if (secoundPlayerCard.intelligence < firstPlayerCard.intelligence) {
      return firstPlayerScore ++}
   else { null }
  } 

  calculateINT()

  function calculateSTR() {
    if (secoundPlayerCard.strength > firstPlayerCard.strength) {
      return secoundPlayerScore ++
    } else if (secoundPlayerCard.strength < firstPlayerCard.strength) {
      return firstPlayerScore ++} else { null }
  }

  calculateSTR()

  function calculateAGL() {
    if (secoundPlayerCard.velocity > firstPlayerCard.velocity) {
      return secoundPlayerScore ++
    } else if (secoundPlayerCard.velocity < firstPlayerCard.velocity) {
      return firstPlayerScore ++} else { null }
  }

  calculateAGL()

  function calculateSS() {
    if (secoundPlayerCard.specialSkills > firstPlayerCard.specialSkills) {
      return secoundPlayerScore ++
    } else if (secoundPlayerCard.specialSkills < firstPlayerCard.specialSkills) {
      return firstPlayerScore ++} else { null }
  }

  calculateSS()

  function calculateFS() {
    if (secoundPlayerCard.fightingSkills > firstPlayerCard.fightingSkills) {
      return secoundPlayerScore ++
    } else if (secoundPlayerCard.fightingSkills < firstPlayerCard.fightingSkills) {
      return firstPlayerScore ++} else { null }
  }

  calculateFS()

  // Compares players score
  if (secoundPlayerScore > firstPlayerScore && !this.props.enableBot) {
      this.setState({ // If this player card wins, he gets 1 point into match score
        totalScore: {...this.state.totalScore, secoundPlayer: secoundPlayerTotalScore + 1 },
        statusMessage: {message: this.props.player2 + " выиграл раунд со счетом: " + secoundPlayerScore + "\n" + " Счет игрока " + this.props.player1 + ": " + firstPlayerScore, errorMessage: false}
      })
    } else if (secoundPlayerScore > firstPlayerScore && this.props.enableBot) {
      this.setState({ 
        totalScore: {...this.state.totalScore, secoundPlayer: secoundPlayerTotalScore + 1 },
        statusMessage: {message: "Вы выиграли раунд со счетом: " + secoundPlayerScore + "\n" + " Счет противника: " + firstPlayerScore, errorMessage: false}
      })
    } else if (secoundPlayerScore < firstPlayerScore && !this.props.enableBot) {
    this.setState({ 
      totalScore: { ...this.state.totalScore, firstPlayer: firstPlayerTotalScore + 1 },
      statusMessage: {message: this.props.player1 + " выиграл раунд со счетом: " + firstPlayerScore + "\n" + " Счет игрока " + this.props.player2 + ": " + secoundPlayerScore, errorMessage: false}
    })
  } else if (secoundPlayerScore < firstPlayerScore && this.props.enableBot) {
    this.setState({ 
      totalScore: { ...this.state.totalScore, firstPlayer: firstPlayerTotalScore + 1 },
      statusMessage: {message: "Противник выиграл раунд со счетом: " + firstPlayerScore + "\n" + " Ваш счет: " + secoundPlayerScore, errorMessage: false}
    })
   } else { null }

  this.setState( { 
     showCard: { ...this.state.showCard, ['card'+this.state.selectedCards.firstPlayer.cardSlot]: false, ['card'+this.state.selectedCards.secoundPlayer.cardSlot]: false}, // Removes played cards from the field
     rounds: {...this.state.rounds, currentRound: currentRound + 1 },
  }, () => { // Переводит на компонент результатов игры если раунд = 6
    if (this.state.rounds.currentRound == 6) {
      this.props.history.push({pathname: '/results', state: this.state})
    }
  })

 // Discards selected cards to default values

 this.setState( {
  chkPlayersCards: { ...this.state.chkPlayersCards, firstPlayer: false, secoundPlayer: false},
  selectedCards: {...this.state.selectedCards, firstPlayer:{ allCardsBtnActive: false, cardId: null, cardSlot: null, cardInfo: {name: '-', intelligence: '-', strength: '-', velocity: '-', specialSkills: '-', fightingSkills: '-', special: '-', imgUrl: null}}, secoundPlayer:{ allCardsBtnActive: false, cardId: null, cardSlot: null, cardInfo: {name: '-', intelligence: '-', strength: '-', velocity: '-', specialSkills: '-', fightingSkills: '-', special: '-', imgUrl: null}}}
 })
}

 render() {
   const tableCls = ['table', this.state.blurred ? 'table_blurAnim' : '']

    return (
    <div className={tableCls.join(' ')} onAnimationEnd={() => this.setState({ blurred: false})}>
      <div className="table_playersArea">
        <Player 
        nickname={this.props.player1} 
        score={this.state.totalScore.firstPlayer} 
        button={this.state.selectedCards.firstPlayer.allCardsBtnActive} 
        stubs={this.state.cardStub} 
        getCards={CardsList} 
        cardNumber={this.state.nfc.slice(0, 5)} 
        showCard={this.state.showCard} 
        checkAI={this.props.enableBot}
        cardID={this.state.selectedCards.firstPlayer.cardId}
        handleCard={this.handleFPCard}
        hideStub={this.toggleCardHandler}
        onClick={() => this.handleOpenAllCards('p1')}
        />

        <Player2 
        nickname={this.props.player2} 
        score={this.state.totalScore.secoundPlayer} 
        button={this.state.selectedCards.secoundPlayer.allCardsBtnActive} 
        stubs={this.state.cardStub} 
        getCards={CardsList} 
        cardNumber={this.state.nfc.slice(5, 10)} 
        showCard={this.state.showCard} 
        cardID={this.state.selectedCards.secoundPlayer.cardId}
        handleCard={this.handleSPCard}
        hideStub={this.toggleCardHandler} 
        onClick={() => this.handleOpenAllCards('p2')}
        />
      </div>
      
       <BattleTable 
       status={this.state.statusMessage} 
       FPcardInfo={this.state.selectedCards.firstPlayer.cardInfo} 
       SPcardInfo={this.state.selectedCards.secoundPlayer.cardInfo} 
       startGame={this.handleCheckChoosenCards} />
    </div>)
 }
}

export default App