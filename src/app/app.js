import React, { Component, createElement } from 'react'
import Card from './components/card'

class App extends Component {

  getCardsNumber = () => {
    const cardsAmount = 12 // TODO желательно сделать чтобы количество читалось из state
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
        {name: 'Человек-Песок', imgUrl: './images/12.jpg', intelligence: 140, strength: 415, velocity: 136, specialSkills: 74, fightingSkills: 136}
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
     selectedCards: {
       myCard: {
         cardId: null,
         cardSlot: null
       },
       competitorCard: {
         cardId: null,
         cardSlot: null
       }
     },
     totalScore: {
       myScore: 0,
       competitorScore: 0
     },
     rounds: { 
       currentRound: 1,
     },
     getLocations: { // TODO перенести данные о расположение элементов сюда
       myCard: {},
       competitorCard: {
        cardSlot: document.querySelector(".card_ready--right"),
        image: document.querySelector("#CCcardImg"),
        intelligence: document.querySelector("#CCintellegence"),
        strength: document.querySelector("#CCstrenght"),
        agility: document.querySelector("#CCvelocity"),
        specialSkills: document.querySelector("#CCspecialSkills"),
        fightingSkills: document.querySelector("#CCfightingSkills"),
        special: document.querySelector("#CCspecial")
       }
     },
     chkPlayersCards: { // Отвечает за проверку выбора карточек у игроков. Если у обоих ключей true, то игроки могут начать игру
       myCard: false,
       competitorCard: false
     }, // nfc (Number for cards) хранит рандомные номера которые были получены с помощью метода getCardsNumbers. Они будут назначены для всех 10 карточек на поле
     nfc: [this.getCardsNumber(), this.getCardsNumber(), this.getCardsNumber(), this.getCardsNumber(), this.getCardsNumber(), this.getCardsNumber(), this.getCardsNumber(), this.getCardsNumber(), this.getCardsNumber(), this.getCardsNumber()] // numberForCard
 }

  // Метод отвечает за обработку карточки противника которая будет отображаться на поле битвы после выбора
 handleCompetitorCard = (id, number) => {

   // Получаем номер карты для дальнейшей обработки значений
  const cardNumber = this.state.cards[id]

   // Собираем местоположения элементов первого игрока на столе сражения
  const locations = {
     name: document.querySelector("#CCName"),
     image: document.querySelector("#CCcardImg"),
     intelligence: document.querySelector("#CCintellegence"),
     strength: document.querySelector("#CCstrenght"),
     agility: document.querySelector("#CCvelocity"),
     specialSkills: document.querySelector("#CCspecialSkills"),
     fightingSkills: document.querySelector("#CCfightingSkills"),
     special: document.querySelector("#CCspecial"),
     status: document.querySelector('#currentStatus'),
    }

   // Показываем карточку с информацией после выбора карточки
   document.querySelector("#competitorCurrentCardInfo").setAttribute('style', 'display: flex;')

  // Изменяем состояние карты этого игрока на true, для того чтобы показать информацию о карточке на поле битвы
   this.setState( {
     chkPlayersCards: { ...this.state.chkPlayersCards, competitorCard: true },
     selectedCards: {...this.state.selectedCards, competitorCard: {cardId: id, cardSlot: number}}
   })

   // Вставляем значения характеристик выбранной карты
   locations.name.innerHTML = cardNumber.name
   locations.image.setAttribute('src', cardNumber.imgUrl);
   locations.intelligence.innerHTML = cardNumber.intelligence
   locations.strength.innerHTML = cardNumber.strength
   locations.agility.innerHTML = cardNumber.velocity
   locations.specialSkills.innerHTML = cardNumber.specialSkills
   locations.fightingSkills.innerHTML = cardNumber.fightingSkills

   // Проверяем является ли эта карточка особой
   if (cardNumber.special == 1) {
   locations.special.innerHTML = "Особая"
   } else { locations.special.innerHTML = "Обычная" }
   
   // Проверяем выбрал ли другой игрок себе карту
   if (this.state.chkPlayersCards.myCard == false) {
     locations.status.innerHTML = 'Теперь выберите свою карту'
   } else if (this.state.chkPlayersCards.myCard == true) { locations.status.innerHTML = 'Игроки выбрали свои карты. Теперь нажмите кнопку "Продолжить" для запуска игры' }
 }

 // Выполняет идентичные действия как и handleCompetitorCard, только для второго игрока
 handleMyCard = (id, number) => {
  const cardNumber = this.state.cards[id]

  const locations = {
    name: document.querySelector("#MCName"),
    image: document.querySelector("#MCcardImg"),
    intelligence: document.querySelector("#MCintellegence"),
    strength: document.querySelector("#MCstrenght"),
    agility: document.querySelector("#MCvelocity"),
    specialSkills: document.querySelector("#MCspecialSkills"),
    fightingSkills: document.querySelector("#MCfightingSkills"),
    special: document.querySelector("#MCspecial"),
    status: document.querySelector('#currentStatus'),
   }

   document.querySelector("#myCurrentCardInfo").setAttribute('style', 'display: flex;')

   this.setState( {
     chkPlayersCards: { ...this.state.chkPlayersCards, myCard: true },
     selectedCards: {...this.state.selectedCards, myCard: {cardId: id, cardSlot: number}}
   })

   locations.name.innerHTML = cardNumber.name
   locations.image.setAttribute('src', cardNumber.imgUrl);
   locations.intelligence.innerHTML = cardNumber.intelligence
   locations.strength.innerHTML = cardNumber.strength
   locations.agility.innerHTML = cardNumber.velocity
   locations.specialSkills.innerHTML = cardNumber.specialSkills
   locations.fightingSkills.innerHTML = cardNumber.fightingSkills

   if (cardNumber.special == 1) {
    locations.special.innerHTML = "Особая"
    } else { locations.special.innerHTML = "Обычная" }

   if (this.state.chkPlayersCards.competitorCard == false) {
     locations.status.innerHTML = 'Теперь выберите карту соперника'
   } else if (this.state.chkPlayersCards.competitorCard == true) { locations.status.innerHTML = 'Игроки выбрали свои карты. Теперь нажмите кнопку "Продолжить" для запуска игры' }
 }

 // После нажатия по заглушке, она удаляется
 deleteButton = (e) => {
  const button = document.querySelector(e)
  button.parentNode.removeChild(button)
  return false
}
 
 // Если один из игроков выбрал себе карту, то на поле битвы с его стороны пропадает заглушка и появляется полноценная карточка, а так же показываются характеристики карты
 toggleCardHandler = (id) => {
   this.setState( {
     showCard: { ...this.state.showCard, [id]: true }
   })

   const targetButton = event
   this.deleteButton('#'+targetButton.target.id)
}

// Проверяет выбрали ли оба игрока себе карты. Если оба значения false, то появится предупреждение и игра не запустится
handleCheckChoosedCards = () => {
 if (this.state.chkPlayersCards.myCard == false || this.state.chkPlayersCards.competitorCard == false) {
   return alert("Внимание: Один из игроков или оба игрока не выбрали карточки для старта игры")
 } else if (this.state.selectedCards.myCard.cardId == this.state.selectedCards.competitorCard.cardId && this.state.rounds.currentRound !== 5) {
   return alert("Внимание: Нельзя использовать одинаковые карточки против друг друга")
 } else if (this.state.rounds.currentRound == 5 && this.state.selectedCards.myCard.cardId == this.state.selectedCards.competitorCard.cardId) {
   alert('Внимание: Невозможно использовать одинаковые карточки на последнем раунде. Завершение матча...')
   this.startGame()
 } 
 else { this.startGame() }
}

// Отвечает за обработку самой игры
startGame = () => {
  const cardIdent = this.state.cards // cardIdentification
  const mySelectedCard = cardIdent[this.state.selectedCards.myCard.cardId]
  const competitorSelectedCard = cardIdent[this.state.selectedCards.competitorCard.cardId]
  let myCardSlot = this.state.selectedCards.myCard.cardSlot
  let competitorCardSlot = this.state.selectedCards.competitorCard.cardSlot


  const status = document.querySelector("#currentStatus")
  const myScoreDOM = document.querySelector("#myScore")
  const competitorScoreDOM = document.querySelector("#competitorScore")

  let currentRound = this.state.rounds.currentRound
  let myTotalScore = this.state.totalScore.myScore
  let competitorTotalScore = this.state.totalScore.competitorScore

  let myScore = 0 // Очки первого игрока
  let competitorScore = 0 // Очки второго игрока

 // Функция сравнивает параметр интеллект у обоих карточек на поле сражения
  function calculateINT() {
    if (mySelectedCard.intelligence > competitorSelectedCard.intelligence) {
      return myScore ++
   } else if (mySelectedCard.intelligence < competitorSelectedCard.intelligence) {
      return competitorScore ++}
   else { null }
  } 

  calculateINT()

  // Функция сравнивает параметр сила у обоих карточек на поле сражения
  function calculateSTR() {
    if (mySelectedCard.strength > competitorSelectedCard.strength) {
      return myScore ++
    } else if (mySelectedCard.strength < competitorSelectedCard.strength) {
      return competitorScore ++} else { null }
  }

  calculateSTR()

  // Функция сравнивает параметр ловкость у обоих карточек на поле сражения
  function calculateAGL() {
    if (mySelectedCard.velocity > competitorSelectedCard.velocity) {
      return myScore ++
    } else if (mySelectedCard.velocity < competitorSelectedCard.velocity) {
      return competitorScore ++} else { null }
  }

  calculateAGL()

  // Функция сравнивает параметр умений у обоих карточек на поле сражения
  function calculateSS() {
    if (mySelectedCard.specialSkills > competitorSelectedCard.specialSkills) {
      return myScore ++
    } else if (mySelectedCard.specialSkills < competitorSelectedCard.specialSkills) {
      return competitorScore ++} else { null }
  }

  calculateSS()

  // Функция сравнивает параметр бойцовских навыков у обоих карточек на поле сражения
  function calculateFS() {
    if (mySelectedCard.fightingSkills > competitorSelectedCard.fightingSkills) {
      return myScore ++
    } else if (mySelectedCard.fightingSkills < competitorSelectedCard.fightingSkills) {
      return competitorScore ++} else { null }
  }

  calculateFS()

  // Функция сравнивает счет между игроками
  if (myScore > competitorScore) {
      status.innerHTML = "Вы выиграли раунд со счетом: " + myScore + '<br>' + ' Счет противника: ' + competitorScore
      this.setState({ totalScore: {...this.state.totalScore, myScore: myTotalScore + 1 } }, () => myScoreDOM.innerHTML = this.state.totalScore.myScore) // Если карточка основного игрока выиграла, то ему добавляется 1 очко в итоговый счет
    } else if (myScore < competitorScore) {
    status.innerHTML = 'Противник выиграл раунд со счетом: ' + competitorScore + "<br>" + ' Ваш счет: ' + myScore
    this.setState({ totalScore: { ...this.state.totalScore, competitorScore: competitorTotalScore + 1 }}, () => competitorScoreDOM.innerHTML = this.state.totalScore.competitorScore) // Если карточка основного игрока проиграла, то сопернику добавляется 1 очко в итоговый счет
  } else { null }

  this.setState( { 
     showCard: { ...this.state.showCard, ['card'+myCardSlot]: false, ['card'+competitorCardSlot]: false}, // Убирает сыгранные карты с поля
     rounds: {...this.state.rounds, currentRound: currentRound + 1 }
  }, () => { // Сообщает результат игры
    if (this.state.rounds.currentRound == 6 && this.state.totalScore.myScore > this.state.totalScore.competitorScore) {
      document.querySelector("#cardGame").innerHTML = '<div class="cardGame_gameOver"><i class="far fa-trophy-alt icon_win"></i><h1>Вы победили</h1><div class="cardGame_gameOver_playersScore"><div><h3>Игрок</h3>' + '<p class="result_win">' + this.state.totalScore.myScore + '</p></div>' + '<div><h3>Соперник</h3>' + '<p class="result_lose">' + this.state.totalScore.competitorScore + '</p></div></div><a class="ipsButton--cardGame ipsButton--results" onclick="document.location.reload(true)">Новая игра</a></div>'
    } else if (this.state.rounds.currentRound == 6 && this.state.totalScore.myScore < this.state.totalScore.competitorScore) {
      document.querySelector("#cardGame").innerHTML = '<div class="cardGame_gameOver"><i class="far fa-skull-crossbones cardGame_gameOver_icon icon_lose"></i><h1>Вы проиграли</h1><div class="cardGame_gameOver_playersScore"><div><h3>Игрок</h3>' + '<p class="result_lose">' + this.state.totalScore.myScore + '</p></div>' + '<div><h3>Соперник</h3>' + '<p class="result_win">' + this.state.totalScore.competitorScore + '</p></div></div><a class="ipsButton--cardGame ipsButton--results" onclick="document.location.reload(true)">Новая игра</a></div>'}
       else if (this.state.rounds.currentRound == 6 && this.state.totalScore.myScore == this.state.totalScore.competitorScore) {
    document.querySelector("#cardGame").innerHTML = '<div class="cardGame_gameOver"><i class="far fa-balance-scale cardGame_gameOver_icon icon_draw"></i><h1>Ничья</h1><h3>У обоих игроков одинаковое количество очков</h3><a class="ipsButton--cardGame ipsButton--results" onclick="document.location.reload(true)">Новая игра</a></div></div>'
   }
  })

 // Сбрасывает значения выбранных карт на дефолтные
 const abilities = [document.querySelector("#MCName"), document.querySelector("#MCintellegence"), document.querySelector("#MCstrenght"), document.querySelector("#MCvelocity"), document.querySelector("#MCspecialSkills"), document.querySelector("#MCfightingSkills"), document.querySelector("#MCspecial"), document.querySelector("#CCName"), document.querySelector("#CCintellegence"), document.querySelector("#CCstrenght"), document.querySelector("#CCvelocity"), document.querySelector("#CCspecialSkills"), document.querySelector("#CCfightingSkills"), document.querySelector("#CCspecial")]
 abilities.forEach(element => element.innerHTML = '-')
 const images = [document.querySelector("#MCcardImg"), document.querySelector("#CCcardImg")]
 images.forEach(element => element.setAttribute('src', './images/0.jpg'))

 this.setState( {
  chkPlayersCards: { ...this.state.chkPlayersCards, myCard: false, competitorCard: false}
 })
}

// Выводит на страницу содержимое игры
 render() {
    const cards = this.state.cards // Быстрый доступ к state.cards
    const cardNumber = this.state.nfc // Быстрый доступ к state.nfc
    // Назначает для каждой карточки свой индивидуальный номер который был получен из рандомизатора номеров. Помогает определить какая карточка будет в каждом слоте
    const cardSlot = [cards[cardNumber[0]], cards[cardNumber[1]], cards[cardNumber[2]], cards[cardNumber[3]], cards[cardNumber[4]], cards[cardNumber[5]], cards[cardNumber[6]], cards[cardNumber[7]], cards[cardNumber[8]], cards[cardNumber[9]]]

    // Поле игры с карточками
    return (
    <div id="table" className="table">
      <div id='competitorSide' className="competitor-table">
          <h1>Карты соперника</h1>
          <div className="cards">
            <div>
             <img className="card_cover" src="./images/0.jpg" id="C1" onClick={this.toggleCardHandler.bind(this, 'card1')}/> {this.state.showCard.card1 ? <Card thisCard={this.handleCompetitorCard.bind(this, cardNumber[0], 1)} imgUrl={cardSlot[0].imgUrl} intelligence={cardSlot[0].intelligence} strength={cardSlot[0].strength} velocity={cardSlot[0].velocity} specialSkills={cardSlot[0].specialSkills} fightingSkills={cardSlot[0].fightingSkills} special={cardSlot[0].special}/> : null}
           </div>
           <div >
             <img className="card_cover" src="./images/0.jpg" id="C2" onClick={this.toggleCardHandler.bind(this, 'card2')}/> {this.state.showCard.card2 ? <Card thisCard={this.handleCompetitorCard.bind(this, cardNumber[1], 2)} imgUrl={cardSlot[1].imgUrl} intelligence={cardSlot[1].intelligence} strength={cardSlot[1].strength} velocity={cardSlot[1].velocity} specialSkills={cardSlot[1].specialSkills} fightingSkills={cardSlot[1].fightingSkills} special={cardSlot[1].special}/> : null}
           </div>
           <div>
           <img className="card_cover" src="./images/0.jpg" id="C3" onClick={this.toggleCardHandler.bind(this, 'card3')}/> {this.state.showCard.card3 ? <Card thisCard={this.handleCompetitorCard.bind(this, cardNumber[2], 3)} imgUrl={cardSlot[2].imgUrl} intelligence={cardSlot[2].intelligence} strength={cardSlot[2].strength} velocity={cardSlot[2].velocity} specialSkills={cardSlot[2].specialSkills} fightingSkills={cardSlot[2].fightingSkills} special={cardSlot[2].special}/> : null}
           </div>
           <div>
           <img className="card_cover" src="./images/0.jpg" id="C4" onClick={this.toggleCardHandler.bind(this, 'card4')}/> {this.state.showCard.card4 ? <Card thisCard={this.handleCompetitorCard.bind(this, cardNumber[3], 4)} imgUrl={cardSlot[3].imgUrl} intelligence={cardSlot[3].intelligence} strength={cardSlot[3].strength} velocity={cardSlot[3].velocity} specialSkills={cardSlot[3].specialSkills} fightingSkills={cardSlot[3].fightingSkills} special={cardSlot[3].special}/> : null}
           </div>
           <img className="card_cover" src="./images/0.jpg" id="C5" onClick={this.toggleCardHandler.bind(this, 'card5')}/> {this.state.showCard.card5 ? <Card thisCard={this.handleCompetitorCard.bind(this, cardNumber[4], 5)} imgUrl={cardSlot[4].imgUrl} intelligence={cardSlot[4].intelligence} strength={cardSlot[4].strength} velocity={cardSlot[4].velocity} specialSkills={cardSlot[4].specialSkills} fightingSkills={cardSlot[4].fightingSkills} special={cardSlot[4].special}/> : null}            
          </div>
      </div>


     <div id="battleTable" className="battle-table">
       <div id="myCard" className="card_ready card_ready--left">
         <div id="myCurrentCardInfo" style={{display: 'none'}} className="current_card_info">
             <div className="info_skill info_skill--battle"><h3 id='MCName'></h3></div>
             <div className="info_skill info_skill--battle"><h3>Интеллект</h3><p id="MCintellegence"></p></div>
             <div className="info_skill info_skill--battle"><h3>Сила</h3><p id="MCstrenght"></p></div>
             <div className="info_skill info_skill--battle"><h3>Ловкость</h3><p id="MCvelocity"></p></div>
             <div className="info_skill info_skill--battle"><h3>Умения</h3><p id="MCspecialSkills"></p></div>
             <div className="info_skill info_skill--battle"><h3>Навыки</h3><p id="MCfightingSkills"></p></div>
             <div className="info_skill info_skill--battle"><h3 id="MCspecial"></h3>
        </div>
         </div>
         <div className="card">
           <div className="card_img card_img--battle"><img id="MCcardImg" src="./images/0.jpg"></img></div>
             </div>
       </div>

       <div className="interactive-area">
         <div className="battle-table-score">
           <h3>Счет</h3>
           <div className="score-sides">
             <p id="myScore">0</p>
             <p>:</p>
             <p id="competitorScore">0</p>
           </div>
         </div>
        <div className="battle-table-status">
          <p id="currentStatus">Выберите карту для сражения, а затем нажмите на кнопку "Продолжить"</p>
        </div>
        <a className="ipsButton--cardGame" onClick={this.handleCheckChoosedCards}>Продолжить</a>
       </div>

       <div id="competitorCard" className="card_ready card_ready--right">
         <div className="card">
           <div className="card_img card_img--battle"><img id="CCcardImg" src="./images/0.jpg"></img>
            </div></div>
            <div id="competitorCurrentCardInfo" style={{display: 'none'}} className="current_card_info">
               <div className="info_skill info_skill--battle"><h3 id="CCName"></h3></div>
               <div className="info_skill info_skill--battle"><h3>Интеллект</h3><p id="CCintellegence"></p></div>
               <div className="info_skill info_skill--battle"><h3>Сила</h3><p id="CCstrenght"></p></div>
               <div className="info_skill info_skill--battle"><h3>Ловкость</h3><p id="CCvelocity"></p></div>
               <div className="info_skill info_skill--battle"><h3>Умения</h3><p id="CCspecialSkills"></p></div>
               <div className="info_skill info_skill--battle"><h3>Навыки</h3><p id="CCfightingSkills"></p></div>
               <div className="info_skill info_skill--battle"><h3 id="CCspecial"></h3></div>
         </div>
       </div>
     </div>



      <div id="playerSide" className="player-table">
          <h1>Мои карты</h1>
          <div className="cards">
            <div>
          <img className="card_cover" src="./images/0.jpg" id="C6" onClick={this.toggleCardHandler.bind(this, 'card6')} /> {this.state.showCard.card6 ? <Card thisCard={this.handleMyCard.bind(this, cardNumber[5], 6)} imgUrl={cardSlot[5].imgUrl} intelligence={cardSlot[5].intelligence} strength={cardSlot[5].strength} velocity={cardSlot[5].velocity} specialSkills={cardSlot[5].specialSkills} fightingSkills={cardSlot[5].fightingSkills} special={cardSlot[5].special}/> : null} 
           </div>
           <div>
          <img className="card_cover" src="./images/0.jpg" id="C7" onClick={this.toggleCardHandler.bind(this, 'card7')} /> {this.state.showCard.card7 ? <Card thisCard={this.handleMyCard.bind(this, cardNumber[6], 7)} imgUrl={cardSlot[6].imgUrl} intelligence={cardSlot[6].intelligence} strength={cardSlot[6].strength} velocity={cardSlot[6].velocity} specialSkills={cardSlot[6].specialSkills} fightingSkills={cardSlot[6].fightingSkills} special={cardSlot[6].special}/> : null}
          </div>
          <div>
          <img className="card_cover" src="./images/0.jpg" id="C8" onClick={this.toggleCardHandler.bind(this, 'card8')} /> {this.state.showCard.card8 ? <Card thisCard={this.handleMyCard.bind(this, cardNumber[7], 8)} imgUrl={cardSlot[7].imgUrl} intelligence={cardSlot[7].intelligence} strength={cardSlot[7].strength} velocity={cardSlot[7].velocity} specialSkills={cardSlot[7].specialSkills} fightingSkills={cardSlot[7].fightingSkills} special={cardSlot[7].special}/> : null}
          </div>
          <div>
          <img className="card_cover" src="./images/0.jpg" id="C9" onClick={this.toggleCardHandler.bind(this, 'card9')} /> {this.state.showCard.card9 ? <Card thisCard={this.handleMyCard.bind(this, cardNumber[8], 9)} imgUrl={cardSlot[8].imgUrl} intelligence={cardSlot[8].intelligence} strength={cardSlot[8].strength} velocity={cardSlot[8].velocity} specialSkills={cardSlot[8].specialSkills} fightingSkills={cardSlot[8].fightingSkills} special={cardSlot[8].special}/> : null}
          </div>
          <div>
          <img className="card_cover" src="./images/0.jpg" id="C10" onClick={this.toggleCardHandler.bind(this, 'card10')} /> {this.state.showCard.card10 ? <Card thisCard={this.handleMyCard.bind(this, cardNumber[9], 10)} imgUrl={cardSlot[9].imgUrl} intelligence={cardSlot[9].intelligence} strength={cardSlot[9].strength} velocity={cardSlot[9].velocity} specialSkills={cardSlot[9].specialSkills} fightingSkills={cardSlot[9].fightingSkills} special={cardSlot[9].special}/> : null}
          </div>
          </div>
      </div>
    </div>
    );
 }
}

export default App