var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
//Provider provides access to the store for all its children
var {Provider} = require('react-redux');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=> {
    console.log('Naw state: ', store.getState())
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

// Load FOundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('style!css!sass!applicationStyles');

ReactDOM.render(
<Provider store={store}>
    <Main/>
</Provider>,
    document.getElementById('app')
);

// require('./redux-example');
// require('./redux-todo-example');

