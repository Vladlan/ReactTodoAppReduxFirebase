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
    switch (action.type) {
        case 'CHANGE_searchText':
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state
    }
};

var store = redux.createStore(reducer, redux.compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => {return f}
));
console.log('currentState', store.getState());

var action = {
    type: 'CHANGE_searchText',
    searchText: 'New search text'
};
store.dispatch(action);
console.log('searchText has been changed', store.getState());

var stopStartSubscribe = store.subscribe(()=> {
    var state = store.getState();
    console.log('Search text now is: ', state.searchText);
});

store.dispatch({
    type: 'CHANGE_searchText',
    searchText: 'New search text1'
});
store.dispatch({
    type: 'CHANGE_searchText',
    searchText: 'New search text2'
});

stopStartSubscribe();

store.dispatch({
    type: 'CHANGE_searchText',
    searchText: 'New search text3'
});
store.dispatch({
    type: 'CHANGE_searchText',
    searchText: 'New search text4'
});

























