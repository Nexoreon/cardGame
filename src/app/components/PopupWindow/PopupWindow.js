import React from 'react'
import './PopupWindow.scss'

class PopupWindow extends React.Component {
    state = {
      openAnim: true,
      closeAnim: false
    }

    closeAnim = () => {
      this.setState({
        closeAnim: true
      })

      setTimeout(this.props.onClick, 100)
    }

    render() {
        const openAnim = this.state.openAnim
        const closeAnim = this.state.closeAnim
        const popupCls = ['PopupWindow', openAnim ? 'PopupWindow--openAnim' : '', closeAnim ? 'PopupWindow--closeAnim' : '']
        const containerCls =['PopupWindow_Container', openAnim ? 'PopupWindow_Container--openAnim' : '', closeAnim ? 'PopupWindow_Container--closeAnim' : '']

        return(
            <div className={popupCls.join(' ')} >
              <div className={containerCls.join(' ')} onAnimationEnd={() => this.setState({ openAnim: false, closeAnim: false})}>
                <div className="PopupWindow_Content">
                  <div className="PopupWindow_Header">
                   <h4>{this.props.title}</h4> 
                   {!this.props.errorText ? <i className="far fa-times" onClick={this.props.onClick}></i> : null}
                </div>
                {this.props.errorText 
                ? <div className="PopupWindow_ErrorText"><p>{this.props.errorText}</p></div>
                : this.props.children}
                 </div>
                 {this.props.errorText ? <a className="button button--error" onClick={this.props.cFunc ? this.props.cFunc : this.closeAnim}>{this.props.cButtonTitle ? this.props.cButtonTitle : 'Закрыть'}</a> : null}
                </div>
                
            </div>
        )
    }
}

export default PopupWindow