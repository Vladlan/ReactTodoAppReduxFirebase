var expect = require('expect');
var actions = require('actions');
//Fake store
import configureMockStore from 'redux-mock-store';

import thunk from 'redux-thunk';
import firebase, {firebaseRef} from "app/firebase/";

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    it('should generate search text action', ()=> {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some'
        };
        var res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);

    });

    it('should generate add todo action object', () => {
        var action = {
            type: 'ADD_TODO',
            todo: {
                id: '123',
                text: '123',
                completed: false,
                createdAt: 0
            }
        };
        var res = actions.addTodo(action.todo);

        expect(res.todo).toEqual(action.todo);
        expect(res.todo).toEqual(action.todo);
    });

    it('toggleShowCompleted', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED',
        };
        var res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

    it('should generate add todos action object', () => {
        var todos = [{
            id: '111',
            text: "1134",
            completed: false,
            completedAt: undefined,
            createdAt: 3211414
        }];
        var action = {
            type: 'ADD_TODOS',
            todos
        };
        var res = actions.addTodos(todos);

        expect(res).toEqual(action);
    });

    it('should generate login action object', () => {
        const action = {
            type: 'LOGIN',
            uid: '123123'
        };
        var res = actions.login(action.uid);

        expect(res).toEqual(action);
    });

    it('should generate logout action object', () => {
        const action = {
            type: 'LOGOUT'
        };
        var res = actions.logout();

        expect(res).toEqual(action);
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});
        const todoText = 'Some text in test';

        store.dispatch(actions.startAddTodo(todoText)).then(()=>{
            const actions = store.getActions();
            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            });
            expect(actions[0].todo).toInclude({
                text: todoText
            });
            done();
        }).catch(done);
    });

    it('should generate update todo action', () => {
        var action = {
            type: 'UPDATE_TODO',
            id: 1,
            updates: {
                completed: false
            }
        };
        var res = actions.updateTodo(action.id, action.updates);

        expect(res).toEqual(action);
    });



    describe('Tests with firebase todos', () => {
        var testTodoRef;

        beforeEach((done) => {
            var todosRef = firebaseRef.child('todos');

            todosRef.remove().then(() => {
                testTodoRef = firebaseRef.child('todos').push();

                return testTodoRef.set({
                    text: 'Smth todo',
                    completed: false,
                    createdAt: 2312323
                })
            })
                .then(()=> done())
                .catch(done);
        });

        afterEach((done) => {
            testTodoRef.remove().then(()=> done());
        });

        it('should toggle todo and dispatch UPDATE_TODO action', (done)=> {
            const store = createMockStore({});
            const action = actions.startToggleTodo(testTodoRef.key, true);

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key,
                });
                expect(mockActions[0].updates).toInclude({
                    completed: true
                });
                expect(mockActions[0].updates.completedAt).toExist();
                done();

            }, done);
            });

        it('should populate todos and dispatch ADD_TODOS', (done) => {
            const store = createMockStore({});
            const action = actions.startAddTodos();

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0].type).toEqual('ADD_TODOS');
                expect(mockActions[0].todos.length).toEqual(1);
                expect(mockActions[0].todos[0].text).toEqual('Smth todo');

                done();
            }, done)
        })
    });
});