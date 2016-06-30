import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './modules/App'
import About from './modules/About'
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router'

require("!style!css!./assets/style.css");

 render((
   <Router history={hashHistory}>
     <Route path="/" component={App}/>
     <Route path="/about" component={About}/>
   </Router>
 ), document.getElementById('app'))
