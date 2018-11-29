var React = require('react');
var ReactDOM = require('react-dom');
var Account = require('Account');
var HomePage = require('HomePage');
var Main = require('Main');
var Nav = require('Nav');
var Transaction = require('Transaction');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
var Redux = require('redux');
var {Provider} = require('react-redux');

var username = (state = null, action) => {
  switch(action.type) {
    case "LOGIN": {
      return action.username;
    }
    case "LOGOUT": {
      return null;
    }
    default:
      return state;
  }
}
var combineReducer = Redux.combineReducers({username});
var store = Redux.createStore(combineReducer);

var requireLogin = (nextState, replace, next) => {
  if (store.getState().username === null) {
    replace("/");
  }
  next();
}

//store.dispatch({type: "LOGIN", username: "ABC"})

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Router path="/" component={Main}>
      <IndexRoute component={HomePage}/>
      <Route path="account" component={Account} />
      <Route path="transaction" component={Transaction} onEnter={requireLogin}/>
    </Router>
  </Router>
  </Provider>,
  document.getElementById('root')
);
