var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');


import {configure} from 'configureStore';
// import TodoList from 'TodoList'
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', ()=> {
    it('should exist', () => {
        expect(TodoList).toExist();
    });
    it('should render one Todo component for each todo item', () => {
        var todos = [{
            id: 1,
            text: 'Do something',
            completed: false,
            completedAt: undefined,
            createdAt: 500
        },
            {
                id: 2,
                text: 'Check mail',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            }];
        var store = configure({
            todos: todos
        });
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
            <ConnectedTodoList/>
            </Provider>
        );
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todosComponents.length).toBe(todos.length);
    });
    it('should render empty message if no todos', () => {
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/> );
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.NoTodo').length).toBe(1);
    });
});