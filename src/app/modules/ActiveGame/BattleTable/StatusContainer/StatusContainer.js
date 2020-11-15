import React from 'react'
import './StatusContainer.scss'

const StatusContainer = props => {
    const cls = ['StatusContainer']
    if (props.errorMessage) {
        cls.push('StatusContainer--error')
    }

    return(
        <div className={cls.join(' ')}>
          <i className="fa fa-info StatusContainer_icon" aria-hidden="true"></i>
          <p>{props.message}</p>
        </div>
    )
}

export default StatusContainer