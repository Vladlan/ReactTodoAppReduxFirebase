var redux = require("redux");

var startingValue = {
    showCompleted: false,
    searchText: '',
    todos: [{
        id: 11,
    text: '123',
    completed: true,
    createdAt: 100500,
    completedAt: 123}]
};

var reducer = (state = startingValue, action) => {
    return state;
};

var store = redux.createStore(reducer);

console.log('currentState', store.getState());



























