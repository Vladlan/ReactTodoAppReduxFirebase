var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

//df provide functionality that not let us add another prop to action obj like `action.smth = 2;`
//it will cause an error
describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'sheet'
            };
            var res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });

        it('should return flipped showCompleted status', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var res = reducers.showCompletedReducer(df(false), df(action));

            expect(res).toNotEqual(false);
            expect(res).toEqual(true);
        });

        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                todo: {
                    id: 123,
                    text: 'Smth to do',
                    completed: false,
                    createdAt: 92384275
                }
            };
            var res = reducers.todosReducer(df([]), df(action));

            // assertions:
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);

        });

        it('should change completed and completedAt props onToggle', () => {
            var todos = [{
                id: 1,
                text: '111',
                completed: true,
                createdAt: 100500,
                completedAt: null
            }];
            var updates = {
                completed: false,
                createdAt: 100500,
                completedAt: null
            };
            var action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            };
            var res = reducers.todosReducer(df(todos), df(action));

            console.log(res);
            console.log(res.length);
            console.log(res[0].completed);
            // console.log((moment.unix(res[0].completedAt)).format("H:mm:ss, MMMM Do YYYY"));

            expect(res.length).toEqual(1);
            expect(res[0].completed).toEqual(false);
            expect(res[0].text).toEqual(todos[0].text);
            // expect(res[0].completedAt).toNotEqual(undefined);

        });

        it('should add existing todos', () => {
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
            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });

    });
});