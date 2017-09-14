// var redux = require('redux');
//'*'--> grab all props and put them in the redux object since redux doesn't have default import
import * as redux from 'redux';
import thunk from 'redux-thunk';
// var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');
import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from 'reducers';

export var configure = (initialState = {}) => {
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer,
        auth: authReducer
    });

    // redxu.compose composes all our middleware
    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => {return f}
    ));

    return store;
};