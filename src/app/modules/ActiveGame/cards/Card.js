import React from 'react'
import './Card.scss'

class Card extends React.Component {

   state = {
      cardCheckAnim: true, // Manages animation for confirmation overlay
      increaseScale: false,
      informationOverlay: false, // Manages information overlay
      confirmationOverlay: false, // Manages confirmation overlay
   }

   handleShowInfo = () => { // handles if information overlay opened or not
      this.setState({
         informationOverlay: !this.state.informationOverlay
      })
   }

   handleIncreaseCardScale = () => {
      this.setState({
         increaseScale: !this.state.increaseScale,
         informationOverlay: false
      })
   }

   handleProvideData = () => {
      this.setState({
         confirmationOverlay: true,
         informationOverlay: false,
         cardCheckAnim: true
      })

      setTimeout(() => {this.setState({
      cardCheckAnim: false,
      })}, 600)

      this.props.thisCard()
   }

   render() {
      const showInfoBtnCls = ['card_showInfo_infoBtn', this.state.informationOverlay ? 'card_showInfo_infoBtn--active' : '']
      const cardCheckCls = ['card_cardCheck', this.state.cardCheckAnim ? 'card_cardCheck--openAnim' : 'card_cardCheck--closeAnim']
      const cardCls = ['card', this.state.increaseScale ? 'card--increased' : '']


      return(
         <div className={cardCls.join(' ')} id="card" onMouseLeave={this.state.increaseScale ? () => this.setState({increaseScale: false}) : null}>
         <div onClick={this.handleProvideData} className="card_img">
          <img src={this.props.imgUrl} />
         </div>
         <div className="card_showInfo">
            <a className={showInfoBtnCls.join(' ')} onClick={this.handleShowInfo}><i className="fa fa-info"></i></a>
            {this.state.informationOverlay ? <a style={{cursor: 'not-allowed'}} className="card_showInfo_increaseBtn" onClick={this.handleIncreaseCardScale}><i className="fa fa-search-plus"></i></a> : null}
         </div>
        {this.state.informationOverlay
        ? <div onClick={this.handleProvideData} className="card_info">
           <div className="card_info_container">
            <div className="info_skill">
             <h3>Интеллект</h3>
             <p>{this.props.intelligence}</p>
            </div>
            <div className="info_skill">
             <h3>Сила</h3>
             <p>{this.props.strength}</p>
            </div>
            <div className="info_skill">
             <h3>Ловкость</h3>
             <p>{this.props.velocity}</p>
             </div>
            <div className="info_skill">
             <h3>Умения</h3>
             <p>{this.props.specialSkills}</p>
            </div>
            <div className="info_skill">
             <h3>Навыки</h3>
             <p>{this.props.fightingSkills}</p>
            </div>
            <div className="info_skill">
               <h3>Редкость</h3>
               <p className="info_skill--special">{this.props.special == 1 ? 'Особая' : 'Обычная'}</p>
             </div>
           </div>
         </div>
         : null}
         {this.state.confirmationOverlay && this.props.thisCardID == this.props.cardID
         ? <div className={cardCheckCls.join(' ')} onAnimationEnd={!this.state.cardCheckAnim ? () => this.setState({confirmationOverlay: false}) : null} >
            <p><i className="fa fa-check"></i></p>
            <h3>Выбрано</h3>
         </div>
         : null}
        </div>
    )
   }
}

export default Card