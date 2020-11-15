import React from 'react'

const CardStub = props => {
  const stubCls = ['card_cover']
  if (props.checkAI) {
    stubCls.push('card_cover--AI')
  }

  return(
     <React.Fragment>
        {props.showStub 
        ? <a className={stubCls.join(' ')} onClick={props.hideStub}>
            <img src="./images/0.jpg" id="C1" />
          </a> 
        : null}
    </React.Fragment>
  )
}

export default CardStub