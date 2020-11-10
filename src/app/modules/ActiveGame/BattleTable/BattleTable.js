import React from 'react'
import './BattleTable.scss'
import SelectedCard from './SelectedCard/SelectedCard'
import StatusContainer from './StatusContainer/StatusContainer'

const BattleTable = props => (
   <div className="table_battleTable">

    <StatusContainer 
    error={props.status.errorMessage}
    message={props.status.message} 
    />

    <SelectedCard
    imgUrl={props.FPcardInfo.imgUrl} 
    name={props.FPcardInfo.name} 
    intelligence={props.FPcardInfo.intelligence} 
    strength={props.FPcardInfo.strength} 
    velocity={props.FPcardInfo.velocity} 
    specialSkills={props.FPcardInfo.velocity} 
    fightingSkills={props.FPcardInfo.fightingSkills} 
    special={props.FPcardInfo.special} 
    />
    
       <div className="battleTable_btn">
        <a className="button" onClick={props.startGame}>Продолжить</a>
       </div>

    <SelectedCard
    imgUrl={props.SPcardInfo.imgUrl} 
    name={props.SPcardInfo.name} 
    intelligence={props.SPcardInfo.intelligence} 
    strength={props.SPcardInfo.strength} 
    velocity={props.SPcardInfo.velocity} 
    specialSkills={props.SPcardInfo.velocity} 
    fightingSkills={props.SPcardInfo.fightingSkills} 
    special={props.SPcardInfo.special} 
    />

  </div>
)



export default BattleTable