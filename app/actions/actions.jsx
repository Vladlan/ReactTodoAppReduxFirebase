import firebase, {firebaseRef, githubProvider} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};

export var addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    };
};

export var startAddTodos = () => {
    return (dispatch, getState) => {
        var todosRef = firebaseRef.child('todos');

        //getting value from firebase
        return todosRef.once('value').then((snapshot) => {
            console.log('snapshot.val(): ', snapshot.val());
            var todos = snapshot.val() || {};
            var parsedTodos = [];

            Object.keys(todos).forEach((todoId) => {
                parsedTodos.push({
                    id: todoId,
                    //and grab object whos key equals todoId
                    ...todos[todoId]
                });
            });

            //And take our array and update redux store which update display
            dispatch(addTodos(parsedTodos));
        });
    };
};

export var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };
        var todoRef = firebaseRef.child('todos').push(todo);

        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    };
};


export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

export var updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    };
};


export var startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        var todoRef = firebaseRef.child(`todos/${id}`);
        var updates = {
            // completed: completed,  <-- ES5 syntax
            completed,
            completedAt: completed ? moment().unix() : null
        };

        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        });
    };
};

export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    };
};

export var startLogin = () => {
    return (dispatch, getState) => {
        console.log('Start signInWithPopup');
        firebase.auth().signInWithPopup(githubProvider).then((authData) => {
            debugger;


            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            var token = authData.credential.accessToken;
            console.log('token: ', token);
            // The signed-in user info.
            var user = authData.user;
            console.log('user: ', user);
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log('error.code: ', error.code);
            console.log('error.message: ', error.message);
            console.log('error.email: ', error.email);
            console.log('error.credential: ', error.credential)
        });

        // var provider = new firebase.auth.GithubAuthProvider();
        // firebase.auth().signInWithRedirect(provider);
        // firebase.auth().getRedirectResult().then(function(authData) {
        //     console.log(authData);
        // }).catch(function(error) {
        //     console.log(error);
        // });
    }
};

export var startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            console.log('Logged out!');
        });
    };
};