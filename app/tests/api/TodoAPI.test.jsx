var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=> {
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    beforeEach(()=>{
        localStorage.removeItem('todos');
    });

    describe('setTodos', ()=> {
        var todos1 = [{
            id: 1,
            text: '12',
            completed: false
        }];

        it('it should set valid todos array', () => {
            TodoAPI.setTodos(todos1);
            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos1);
        });

        it('it should not set invalid todos array', () => {
            var invalidTodos = {id: 1};
            TodoAPI.setTodos(invalidTodos);
            var actualTodos2 = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos2).toBe(null);
        });
    });

    describe('getTodos', ()=> {
        it('should return empty array if getTodos get called with ' +
            'undefined localstorage data', () => {
            var todos2 = TodoAPI.getTodos();

            expect(todos2).toEqual([]);
            });

        it('should return proper array if getTodos get called with ' +
            'defined localstorage data', () => {
            var todos3 = [{
                id: 1,
                text: '12',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos3));
            var actualTodos = TodoAPI.getTodos();

            expect(todos3).toEqual(actualTodos);
        });
    });

});