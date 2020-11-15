import React from 'react'
import Game from './Game/Game'

const Games = props => {
   const renderGamesList = () => {
        const games = [
            {name: 'Человек Паук. Герои и Злодеи', id: 'SMCards', img: 'url(./images/games/sm.jpg)'},
            {name: 'Гвинт: Ведьмак. Карточная игра', id: 'gwent', img: 'url(./images/games/gwent.jpg)'}
        ]
    
        return games.map((game, index) => {
            const cls = ['games_item']
            if (props.chosenGame == game.id) {
                cls.push('games_item--selected')
            }
    
            return(
                <Game key={index} name={game.name} id={game.id} className={cls.join(' ')} onClick={props.onClick} img={game.img} />
            )
        })
    }

    return(
        <div className="params_games">
            <h3>Выберите игру</h3>
            <div className="games">
                {renderGamesList()}
                <p id="otherCards" className="games_item games_item--moreGamesSoon">Больше игр в будущем</p>
            </div>
        </div>
    )
}

export default Games