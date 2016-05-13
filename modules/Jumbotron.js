import React from 'react'
import { render } from 'react-dom'

export default React.createClass({
  propTypes:{
    heading: React.PropTypes.string,
    text: React.PropTypes.string,
    link: React.PropTypes.string
  },
  getDefaultProps(){
    return{
      heading: 'Welcome!',
      text: 'Welcome to our shiny new website built with react components',
      link: 'http://jay-akkiraju.org'
    }
  },
  render() {
    return (
      <div className="jumbotron">
          <div className="container">
              <h1>{this.props.heading}</h1>
              <p>{this.props.text}</p>
              <p>
                <a className="btn btn-primary btn-lg" href={this.props.link} role="button">Learn more</a>
              </p>
          </div>
      </div>
    )
  }
})
