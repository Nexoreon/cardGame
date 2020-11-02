import React from 'react'
import Mode from './Mode/Mode'

const Modes = props => {
    const renderModesList = () => {
        const modes = [
            {title: 'Два игрока', id: 'twoPlayers'},
            {title: 'Один игрок', id: 'singleplayer'}
        ]

       return modes.map((mode, index) => {
           const cls = ['modes_item']
           if (!props.botStatus && mode.id == 'twoPlayers' || props.botStatus && mode.id == 'singleplayer') {
               cls.push('modes_item--selected')
           }

           return(
               <Mode key={index} title={mode.title} id={mode.id} className={cls.join(' ')} onClick={props.onClick} />
           )
        })
    }


    return(
        <div className="params_mode">
            <h3>Режим</h3>
            <div className="modes">
                     { renderModesList() }
            </div>
        </div>
    )

}

export default Modes