import React from 'react'
import Navbar from './Navbar'
// import Jumbotron from './Jumbotron'

export default React.createClass({
  render() {
    return (
    	<div>
    		<Navbar color="dark"/>
        <Jumbotron heading="hello"/>
    	</div>
    )
  }
})
