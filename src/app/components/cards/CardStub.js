import React from 'react'

const CardStub = props => {

    return (
        <React.Fragment>
         {props.showStub ? <img className="card_cover" src="./images/0.jpg" id="C1" onClick={props.hideStub} /> : null}
        </React.Fragment>
    )
}

export default CardStub