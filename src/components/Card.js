import React from 'react'


export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    if (this.props.click != null) {
      window.open(this.props.click);
    }
  }
  render() {
    return (
      <div className={this.props.act}>
          <div className = "card__body" onClick = {() => {this.handleClick()}}>
              <div className='title'>{this.props.title}</div>
              <img src = {this.props.image} className= "card__image"></img>
              <p className='desc'>{this.props.desc}</p>
          </div>
          <div className='card__links'>
              {this.props.tags}
              {this.props.git}
          </div>
      </div>
    )
  }
}

