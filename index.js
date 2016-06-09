import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

require("!style!css!./assets/style.css");

 render((
   <Router history={browserHistory}>
     <Route path="/" component={App}/>
     <Route path="/about" component={About}/>
   </Router>
 ), document.getElementById('app'))
