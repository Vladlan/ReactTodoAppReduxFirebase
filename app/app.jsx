var React = require('react');
var ReactDOM = require('react-dom');
var { hashHistory} = require('react-router');
//Provider provides access to the store for all its children
var {Provider} = require('react-redux');
import router from 'app/router/';
var actions = require('actions');
var store = require('configureStore').configure();

import firebase from 'app/firebase/';

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(actions.login(user.uid));
        //working with our router:
        hashHistory.push('/todos');
    }
    else {
        store.dispatch(actions.logout());

        hashHistory.push('/');
    }
});

// import './../Sandbox/firebase/index';
// import './../Sandbox/spread';

// store.subscribe(()=> {
//     var state = store.getState();
//     console.log('Naw state: ', state);
//     TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

// Load FOundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
// Load local styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('app')
);

// require('./redux-example');
// require('./redux-todo-example');

