import React from 'react'
import './SelectedCard.scss'

const SelectedCard = props => (
    <div className="SelectedCard">
         <div className="SelectedCard_card">
           <div className="card_img card_img--battle">
               <img src={props.imgUrl == null ? "./images/0.jpg" : props.imgUrl}></img>
           </div>
        </div>
        <div className="SelectedCard_info">
               <div className="SelectedCard_info_skill"><h3>{props.name}</h3></div>
               <div className="SelectedCard_info_skill"><h3>Интеллект</h3><p>{props.intelligence}</p></div>
               <div className="SelectedCard_info_skill"><h3>Сила</h3><p>{props.strength}</p></div>
               <div className="SelectedCard_info_skill"><h3>Ловкость</h3><p>{props.velocity}</p></div>
               <div className="SelectedCard_info_skill"><h3>Умения</h3><p>{props.specialSkills}</p></div>
               <div className="SelectedCard_info_skill"><h3>Навыки</h3><p>{props.fightingSkills}</p></div>
               <div className="SelectedCard_info_skill"><h3>{props.special == 1 ? 'Особая' : props.special == '-' ? '-' : 'Обычная'}</h3></div>
        </div>
    </div>
)

export default SelectedCard