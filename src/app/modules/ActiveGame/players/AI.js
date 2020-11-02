import React from 'react'
import Card from '../cards/Card'
import CardStub from '../cards/CardStub'

class AI extends React.Component {
    state = {
        usedNumbers: [null]
    }

    chooseCard = () => {
         Math.floor(Math.random() * 5)
    }

    render() {
     const cardsCollection = props.getCards // get all cards from state
     const cardNumber = props.cardNumber // get random numbers to choose which cards are going to be used
     const playerCard = [cardsCollection[cardNumber[0]], cardsCollection[cardNumber[1]], cardsCollection[cardNumber[2]], cardsCollection[cardNumber[3]], cardsCollection[cardNumber[4]]] // define 5 cards for this player

     return (
        <div className="cards">
         <React.Fragment>
           <CardStub showStub={props.stubs.card1} hideStub={props.hideStub.bind(this, 'card1')} /> {props.showCard.card1 ? <Card thisCard={props.handleCard.bind(this, cardNumber[0], 1)} imgUrl={playerCard[0].imgUrl} intelligence={playerCard[0].intelligence} strength={playerCard[0].strength} velocity={playerCard[0].velocity} specialSkills={playerCard[0].specialSkills} fightingSkills={playerCard[0].fightingSkills} special={playerCard[0].special}/> : null}
           <CardStub showStub={props.stubs.card2} hideStub={props.hideStub.bind(this, 'card2')} /> {props.showCard.card2 ? <Card thisCard={props.handleCard.bind(this, cardNumber[1], 2)} imgUrl={playerCard[1].imgUrl} intelligence={playerCard[1].intelligence} strength={playerCard[1].strength} velocity={playerCard[1].velocity} specialSkills={playerCard[1].specialSkills} fightingSkills={playerCard[1].fightingSkills} special={playerCard[1].special}/> : null}
           <CardStub showStub={props.stubs.card3} hideStub={props.hideStub.bind(this, 'card3')} /> {props.showCard.card3 ? <Card thisCard={props.handleCard.bind(this, cardNumber[2], 3)} imgUrl={playerCard[2].imgUrl} intelligence={playerCard[2].intelligence} strength={playerCard[2].strength} velocity={playerCard[2].velocity} specialSkills={playerCard[2].specialSkills} fightingSkills={playerCard[2].fightingSkills} special={playerCard[2].special}/> : null}
           <CardStub showStub={props.stubs.card4} hideStub={props.hideStub.bind(this, 'card4')} /> {props.showCard.card4 ? <Card thisCard={props.handleCard.bind(this, cardNumber[3], 4)} imgUrl={playerCard[3].imgUrl} intelligence={playerCard[3].intelligence} strength={playerCard[3].strength} velocity={playerCard[3].velocity} specialSkills={playerCard[3].specialSkills} fightingSkills={playerCard[3].fightingSkills} special={playerCard[3].special}/> : null}
           <CardStub showStub={props.stubs.card5} hideStub={props.hideStub.bind(this, 'card5')} /> {props.showCard.card5 ? <Card thisCard={props.handleCard.bind(this, cardNumber[4], 5)} imgUrl={playerCard[4].imgUrl} intelligence={playerCard[4].intelligence} strength={playerCard[4].strength} velocity={playerCard[4].velocity} specialSkills={playerCard[4].specialSkills} fightingSkills={playerCard[4].fightingSkills} special={playerCard[4].special}/> : null}
         </React.Fragment>
        </div>
    )}
}

export default AI