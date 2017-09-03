var expect = require('expect');
var actions = require('actions');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

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

    it('should generate todo action', () => {
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

    it('toggleTodo', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: +1
        };
        var res = actions.toggleTodo(action.id);

        expect(res).toEqual(action);
    })
});