import React from 'react'
import './Card.scss'

const Card = props => (
        <div onClick={props.thisCard} className="card" id="card">
        <div className="card_img">
         <img src={props.imgUrl} />
        </div>
        <div className="card_info">
           <div className="info_skill">
            <h3>Интеллект</h3>
            <p>{props.intelligence}</p>
           </div>
           <div className="info_skill">
            <h3>Сила</h3>
            <p>{props.strength}</p>
           </div>
           <div className="info_skill">
            <h3>Ловкость</h3>
            <p>{props.velocity}</p>
            </div>
           <div className="info_skill">
            <h3>Умения</h3>
            <p>{props.specialSkills}</p>
           </div>
           <div className="info_skill">
            <h3>Навыки</h3>
            <p>{props.fightingSkills}</p>
           </div>
           {props.special == 1 ? <div className="info_skill info_skill--special"><h3>Особая</h3></div> : <div className="info_skill info_skill--special"><h3>Обычная</h3></div>}
        </div>
       </div>
)

export default Card