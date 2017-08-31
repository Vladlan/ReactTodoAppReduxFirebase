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

        it('should add todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'Wag the dog'
            };
            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);

        });

        it('should change completed and completedAt props onToggle', () => {
            var action = {
                type: 'TOGGLE_TODO',
                id: 1
            };
            var res = reducers.todosReducer(df([{
                id: 1,
                text: '111',
                completed: false,
                createdAt: 100500,
                completedAt: undefined
            }]), df(action));

            console.log(res);
            console.log(res.length);
            console.log(res[0].completed);
            // console.log((moment.unix(res[0].completedAt)).format("H:mm:ss, MMMM Do YYYY"));

            expect(res.length).toEqual(1);
            expect(res[0].completed).toEqual(true);
            // expect(res[0].completedAt).toNotEqual(undefined);

        });

    });
});