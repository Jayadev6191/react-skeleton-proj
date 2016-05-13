import React from 'react'
import Navbar from './Navbar'
import Jumbotron from './Jumbotron'

export default React.createClass({
  getInitialState: function(){
    return{
        page: 'home'
    }
  },
  handleHomeClick: function(){
    this.setState({
      page: 'home'
    });
  },
  handleAboutClick: function(){
    this.setState({
      page: 'about'
    });
  },
  render() {
    let jumbotron;
    if(this.state.page == 'home'){
      jumbotron = <Jumbotron/>;
    }else if(this.state.page == 'about'){
      jumbotron = '';
    }
    return (
    	<div>
    		<Navbar color="dark"
                page={this.state.page}
                homeClick={this.handleHomeClick}
                aboutClick={this.handleAboutClick}
          />
        {jumbotron}
    	</div>
    )
  }
})
