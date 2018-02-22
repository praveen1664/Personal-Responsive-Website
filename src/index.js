import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Provider } from "react-redux"
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
import store from  './stores/store'
import App from    './views/App'
import Home from   './views/Home'

render((
<Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
</Provider>
), document.getElementById('app'))
