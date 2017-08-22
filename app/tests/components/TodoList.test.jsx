var React = require('react');
var expect = require('expect');

var TodoList = require('TodoList');

describe('TodoList', ()=> {
    it('should exist', () => {
        expect(TodoList).toExist();
    });
});