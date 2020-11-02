import React from 'react'
import './Results.scss'

const Results = props => {
    const data = props.location.state // Быстрый доступ к полученному state
    const players = data.players // state.players - Никнеймы игроков
    const score = data.totalScore // state.totalScore - Счет матча

    if (!data.AI.enabled && score.firstPlayer > score.secoundPlayer) { // Если у игрока 2 меньше очков чем у игрока 1, то...
        return(
        <div className="cardGame_container">
            <div className="cardGame_blur" />
            <div className="cardGame_gameOver">
             <i className="fa fa-trophy icon_win"></i>
             <h1>{players.player1} победил</h1>
             <div className="cardGame_gameOver_playersScore">
                 <div>
                     <h3>{players.player1}</h3>
                     <p className="result_win">{score.firstPlayer}</p>
                 </div>
                 <div>
                    <h3>{players.player2}</h3>
                    <p className="result_lose">{score.secoundPlayer}</p>
                 </div>
             </div>
            <a className="button button--results" onClick={() => props.history.push({pathname: '/setup'})}>Новая игра</a>
            </div> 
        </div>
         
        )
    } else if (!data.AI.enabled && score.firstPlayer < score.secoundPlayer) { // Если у игрока 1 меньше очков чем у игрока 2, то...
        return(
        <div className="cardGame_container">
            <div className="cardGame_blur" />
            <div className="cardGame_gameOver">
             <i className="fa fa-trophy icon_win"></i>
             <h1>{players.player2} победил</h1>
             <div className="cardGame_gameOver_playersScore">
                 <div>
                     <h3>{players.player1}</h3>
                     <p className="result_lose">{score.firstPlayer}</p>
                </div>
                <div>
                    <h3>{players.player2}</h3>
                    <p className="result_win">{score.secoundPlayer}</p>
                </div>
            </div>
            <a className="button button--results" onClick={() => props.history.push({pathname: '/setup'})}>Новая игра</a>
            </div>
        </div>
         )
    } else if (score.firstPlayer == score.secoundPlayer) { // Ничья
        return(
            <div className="cardGame_container">
            <div className="cardGame_blur" />
            <div className="cardGame_gameOver">
             <i className="fa fa-balance-scale cardGame_gameOver_icon icon_draw"></i>
             <h1>Ничья</h1>
             <h3>У обоих игроков одинаковое количество очков</h3>
             <a className="button button--results" onClick={() => props.history.push({pathname: '/setup'})}>Новая игра</a>
           </div> 
        </div>
           
        )
    } else if (data.AI.enabled && score.firstPlayer < score.secoundPlayer) { // Если игрок имеет больше очков чем бот, то...
        return(
            <div className="cardGame_container">
            <div className="cardGame_blur" />
            <div className="cardGame_gameOver">
                 <i className="fa fa-trophy icon_win"></i>
                 <h1>{players.player1} победил</h1>
                 <div className="cardGame_gameOver_playersScore">
                     <div>
                         <h3>{players.player1}</h3>
                         <p className="result_win">{score.secoundPlayer}</p>
                     </div>
                     <div>
                        <h3>Соперник</h3>
                        <p className="result_lose">{score.firstPlayer}</p>
                     </div>
                 </div>
                <a className="button button--results" onClick={() => props.history.push({pathname: '/setup'})}>Новая игра</a>
             </div> 
        </div>
             
        )
    } else if (data.AI.enabled && score.firstPlayer > score.secoundPlayer) { // Если игрок имеет меньше очков чем бот, то...
        return(
            <div className="cardGame_container">
            <div className="cardGame_blur" />
            <div className="cardGame_gameOver">
                 <i className="fa fa-times icon_lose"></i>
                 <h1>Соперник победил</h1>
                 <div className="cardGame_gameOver_playersScore">
                     <div>
                         <h3>{players.player1}</h3>
                         <p className="result_lose">{score.secoundPlayer}</p>
                     </div>
                     <div>
                        <h3>Соперник</h3>
                        <p className="result_win">{score.firstPlayer}</p>
                     </div>
                 </div>
                <a className="button button--results" onClick={() => props.history.push({pathname: '/setup'})}>Новая игра</a>
             </div> 
        </div>
             
        )
    }
}

export default Results