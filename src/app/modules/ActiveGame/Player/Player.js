import React from 'react'
import './Player.scss'
import Card from '../cards/Card'
import CardStub from '../cards/CardStub'

const Player = props => {
    const cardsCollection = props.getCards // get all cards
    const cardNumber = props.cardNumber // get random numbers to choose which cards are going to be used
    const playerCard = [cardsCollection[cardNumber[0]], cardsCollection[cardNumber[1]], cardsCollection[cardNumber[2]], cardsCollection[cardNumber[3]], cardsCollection[cardNumber[4]]] // define 5 cards for this player
    const btnCls = ['Player_info_btn', !props.button ? 'Player_info_btn--disabled' : null]

    return(
        <div className="Player">
            <div className="Player_info">
               <h1>{props.checkAI ? "Cоперник" : props.nickname}</h1>
               <p className="Player_info_score">{props.score}</p>
               {!props.checkAI ? <a className={btnCls.join(' ')} onClick={props.onClick}>Показать все карты</a> : null}
            </div>
            <div className="Player_cards">
                <CardStub showStub={props.stubs.card1} hideStub={!props.checkAI ? props.hideStub.bind(this, 'card1') : null} checkAI={props.checkAI} /> {props.showCard.card1 ? <Card thisCard={props.handleCard.bind(this, cardNumber[0], 1)} cardID={props.cardID} thisCardID={cardNumber[0]} handleShowInfo={props.handleShowInfo} showInfo={props.showInfo} cardSelected={props.cardSelected} imgUrl={playerCard[0].imgUrl} intelligence={playerCard[0].intelligence} strength={playerCard[0].strength} velocity={playerCard[0].velocity} specialSkills={playerCard[0].specialSkills} fightingSkills={playerCard[0].fightingSkills} special={playerCard[0].special}/> : null}
                <CardStub showStub={props.stubs.card2} hideStub={!props.checkAI ? props.hideStub.bind(this, 'card2') : null} checkAI={props.checkAI} /> {props.showCard.card2 ? <Card thisCard={props.handleCard.bind(this, cardNumber[1], 2)} cardID={props.cardID} thisCardID={cardNumber[1]} handleShowInfo={props.handleShowInfo} showInfo={props.showInfo} cardSelected={props.cardSelected} imgUrl={playerCard[1].imgUrl} intelligence={playerCard[1].intelligence} strength={playerCard[1].strength} velocity={playerCard[1].velocity} specialSkills={playerCard[1].specialSkills} fightingSkills={playerCard[1].fightingSkills} special={playerCard[1].special}/> : null}
                <CardStub showStub={props.stubs.card3} hideStub={!props.checkAI ? props.hideStub.bind(this, 'card3') : null} checkAI={props.checkAI} /> {props.showCard.card3 ? <Card thisCard={props.handleCard.bind(this, cardNumber[2], 3)} cardID={props.cardID} thisCardID={cardNumber[2]} handleShowInfo={props.handleShowInfo} showInfo={props.showInfo} cardSelected={props.cardSelected} imgUrl={playerCard[2].imgUrl} intelligence={playerCard[2].intelligence} strength={playerCard[2].strength} velocity={playerCard[2].velocity} specialSkills={playerCard[2].specialSkills} fightingSkills={playerCard[2].fightingSkills} special={playerCard[2].special}/> : null}
                <CardStub showStub={props.stubs.card4} hideStub={!props.checkAI ? props.hideStub.bind(this, 'card4') : null} checkAI={props.checkAI} /> {props.showCard.card4 ? <Card thisCard={props.handleCard.bind(this, cardNumber[3], 4)} cardID={props.cardID} thisCardID={cardNumber[3]} handleShowInfo={props.handleShowInfo} showInfo={props.showInfo} cardSelected={props.cardSelected} imgUrl={playerCard[3].imgUrl} intelligence={playerCard[3].intelligence} strength={playerCard[3].strength} velocity={playerCard[3].velocity} specialSkills={playerCard[3].specialSkills} fightingSkills={playerCard[3].fightingSkills} special={playerCard[3].special}/> : null}
                <CardStub showStub={props.stubs.card5} hideStub={!props.checkAI ? props.hideStub.bind(this, 'card5') : null} checkAI={props.checkAI} /> {props.showCard.card5 ? <Card thisCard={props.handleCard.bind(this, cardNumber[4], 5)} cardID={props.cardID} thisCardID={cardNumber[4]} handleShowInfo={props.handleShowInfo} showInfo={props.showInfo} cardSelected={props.cardSelected} imgUrl={playerCard[4].imgUrl} intelligence={playerCard[4].intelligence} strength={playerCard[4].strength} velocity={playerCard[4].velocity} specialSkills={playerCard[4].specialSkills} fightingSkills={playerCard[4].fightingSkills} special={playerCard[4].special}/> : null}
            </div>
        </div>
    )
}

export default Player