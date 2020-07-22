import React from 'react'
import Card from '../cards/card'
import CardStub from '../cards/cardStub'

const SecoundPlayer = props => {
    const cardsCollection = props.getCards // get all cards from state
    const cardNumber = props.cardNumber // get random numbers to choose which cards are going to be used
    const playerCard = [cardsCollection[cardNumber[5]], cardsCollection[cardNumber[6]], cardsCollection[cardNumber[7]], cardsCollection[cardNumber[8]], cardsCollection[cardNumber[9]]] // define 5 cards for this player

    return (
        <div className="cards">
         <React.Fragment>
           <CardStub showStub={props.stubs.card6} hideStub={props.hideStub.bind(this, 'card6')} /> {props.showCard.card6 ? <Card thisCard={props.handleCard.bind(this, cardNumber[5], 6)} imgUrl={playerCard[0].imgUrl} intelligence={playerCard[0].intelligence} strength={playerCard[0].strength} velocity={playerCard[0].velocity} specialSkills={playerCard[0].specialSkills} fightingSkills={playerCard[0].fightingSkills} special={playerCard[0].special}/> : null}
           <CardStub showStub={props.stubs.card7} hideStub={props.hideStub.bind(this, 'card7')} /> {props.showCard.card7 ? <Card thisCard={props.handleCard.bind(this, cardNumber[6], 7)} imgUrl={playerCard[1].imgUrl} intelligence={playerCard[1].intelligence} strength={playerCard[1].strength} velocity={playerCard[1].velocity} specialSkills={playerCard[1].specialSkills} fightingSkills={playerCard[1].fightingSkills} special={playerCard[1].special}/> : null}
           <CardStub showStub={props.stubs.card8} hideStub={props.hideStub.bind(this, 'card8')} /> {props.showCard.card8 ? <Card thisCard={props.handleCard.bind(this, cardNumber[7], 8)} imgUrl={playerCard[2].imgUrl} intelligence={playerCard[2].intelligence} strength={playerCard[2].strength} velocity={playerCard[2].velocity} specialSkills={playerCard[2].specialSkills} fightingSkills={playerCard[2].fightingSkills} special={playerCard[2].special}/> : null}
           <CardStub showStub={props.stubs.card9} hideStub={props.hideStub.bind(this, 'card9')} /> {props.showCard.card9 ? <Card thisCard={props.handleCard.bind(this, cardNumber[8], 9)} imgUrl={playerCard[3].imgUrl} intelligence={playerCard[3].intelligence} strength={playerCard[3].strength} velocity={playerCard[3].velocity} specialSkills={playerCard[3].specialSkills} fightingSkills={playerCard[3].fightingSkills} special={playerCard[3].special}/> : null}
           <CardStub showStub={props.stubs.card10} hideStub={props.hideStub.bind(this, 'card10')} /> {props.showCard.card10 ? <Card thisCard={props.handleCard.bind(this, cardNumber[9], 10)} imgUrl={playerCard[4].imgUrl} intelligence={playerCard[4].intelligence} strength={playerCard[4].strength} velocity={playerCard[4].velocity} specialSkills={playerCard[4].specialSkills} fightingSkills={playerCard[4].fightingSkills} special={playerCard[4].special}/> : null}
         </React.Fragment>
        </div>
    )}

export default SecoundPlayer