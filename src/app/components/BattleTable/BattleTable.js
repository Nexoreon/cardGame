import React from 'react'

const BattleTable = props => (
    <React.Fragment>
    <div className={props.status.errorMessage ? "table_battleTable-status table_battleTable-status--error" : 'table_battleTable-status'}>
        <i className="fa fa-info table_battleTable-status-icon" aria-hidden="true"></i>
        <p id="currentStatus">{props.status.message}</p>
    </div>

    <div className="card_ready">
         <div className="card card_chosen">
           <div className="card_img card_img--battle"><img src={props.FPcardInfo.imgUrl == null ? "./images/0.jpg" : props.FPcardInfo.imgUrl}></img>
            </div></div>
            <div className="current_card_info">
               <div className="info_skill info_skill--battle"><h3>{props.FPcardInfo.name}</h3></div>
               <div className="info_skill info_skill--battle"><h3>Интеллект</h3><p>{props.FPcardInfo.intelligence}</p></div>
               <div className="info_skill info_skill--battle"><h3>Сила</h3><p>{props.FPcardInfo.strength}</p></div>
               <div className="info_skill info_skill--battle"><h3>Ловкость</h3><p>{props.FPcardInfo.velocity}</p></div>
               <div className="info_skill info_skill--battle"><h3>Умения</h3><p>{props.FPcardInfo.specialSkills}</p></div>
               <div className="info_skill info_skill--battle"><h3>Навыки</h3><p>{props.FPcardInfo.fightingSkills}</p></div>
               <div className="info_skill info_skill--battle"><h3>{props.FPcardInfo.special == 1 ? 'Особая' : props.FPcardInfo.special == '-' ? '-' : 'Обычная'}</h3></div>
            </div>
       </div>
    
       <div className="interactive-area">
        <a className="button--cardGame" onClick={props.startGame}>Продолжить</a>
       </div>

       <div className="card_ready">
         <div className="card card_chosen">
           <div className="card_img card_img--battle"><img src={props.SPcardInfo.imgUrl == null ? "./images/0.jpg" : props.SPcardInfo.imgUrl}></img></div>
         </div>
         <div className="current_card_info">
             <div className="info_skill info_skill--battle"><h3>{props.SPcardInfo.name}</h3></div>
             <div className="info_skill info_skill--battle"><h3>Интеллект</h3><p>{props.SPcardInfo.intelligence}</p></div>
             <div className="info_skill info_skill--battle"><h3>Сила</h3><p>{props.SPcardInfo.strength}</p></div>
             <div className="info_skill info_skill--battle"><h3>Ловкость</h3><p>{props.SPcardInfo.velocity}</p></div>
             <div className="info_skill info_skill--battle"><h3>Умения</h3><p>{props.SPcardInfo.specialSkills}</p></div>
             <div className="info_skill info_skill--battle"><h3>Навыки</h3><p>{props.SPcardInfo.fightingSkills}</p></div>
             <div className="info_skill info_skill--battle"><h3>{props.SPcardInfo.special == 1 ? 'Особая' : props.SPcardInfo.special == '-' ? '-' : 'Обычная'}</h3></div>
         </div>
       </div>

       </React.Fragment>
)



export default BattleTable