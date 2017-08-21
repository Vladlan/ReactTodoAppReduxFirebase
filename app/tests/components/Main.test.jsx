var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Main = require('Main');
var Todo = require('Todo');

describe('Main', ()=> {
    it('should exist', () => {
        expect(Main).toExist();
    });

    it('should render one Todo component for each todo item', ()=> {
        var todos = [{
            id: 1,
            text: 'ss'
        },{
            id: 2,
            text: 'Check mail'
        },{
            id: 2,
            text: 'Check mail'
        }];
        var todoList = TestUtils.renderIntoDocument(<Main todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);
    });

    it('should added todo to todoList on handleAddTodo', ()=> {

        var todoList = TestUtils.renderIntoDocument(<Main/>);
        todoList.setState({todos:[]});
        todoList.handleAddTodo('Wag the dog');

        expect(todoList.state.todos[0].text).toBe('Wag the dog');
    });
});