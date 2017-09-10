var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var configureStore = require('configureStore');
import TodoList from 'TodoList'
import {Main} from 'Main';
var Todo = require('Todo');
var TodoAPI = require ('TodoAPI');

describe('Main', ()=> {
    it('should exist', () => {
        expect(Main).toExist();
    });

    it('should render TodoList', ()=> {
        var store = configureStore.configure();
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
            <Main/>
            </Provider>
        );

        var main = TestUtils.scryRenderedComponentsWithType(provider, Main)[0];
        var todoList = TestUtils.scryRenderedComponentsWithType(main, TodoList);

        expect(todoList.length).toEqual(1);

    });


    // it('should render one Todo component for each todo item', ()=> {
    //     var todos = [{
    //         id: 1,
    //         text: 'ss',
    //         completed: false
    //     },{
    //         id: 2,
    //         text: 'Check mail',
    //         completed: false
    //     },{
    //         id: 2,
    //         text: 'Check mail',
    //         completed: false
    //     }];
    //     var todoList = TestUtils.renderIntoDocument(<Main/>);
    //     var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    //
    //     TodoAPI.setTodos(todos);
    //
    //     console.log('todosComponents: ' + todosComponents);
    //     console.log('todos: ' + todos);
    //     expect(todosComponents.length).toBe(todos.length);
    // });

    // it('should added todo to todoList on handleAddTodo', ()=> {
    //
    //     var todoList = TestUtils.renderIntoDocument(<Main/>);
    //     todoList.setState({todos:[]});
    //     todoList.handleAddTodo('Wag the dog');
    //
    //     expect(todoList.state.todos[0].text).toBe('Wag the dog');
    //     expect(todoList.state.todos[0].createdAt).toBeA('number');
    //
    // });

    // it('should toggle completed property on onToggle ', ()=> {
    //
    //     var todoData = [{
    //         id: 11,
    //         text: '123',
    //         completed: false,
    //         createdAt: 100500,
    //         completedAt: undefined
    //     }];
    //     var todoList = TestUtils.renderIntoDocument(<Main/>);
    //     todoList.setState({todos: todoData});
    //
    //     expect(todoList.state.todos[0].completed).toBe(false);
    //     todoList.handleToggle(11);
    //     expect(todoList.state.todos[0].completed).toBe(true);
    //     expect(todoList.state.todos[0].completedAt).toBeA('number');
    //
    // });

    // it('should toggle todo from completed to incompleted ', ()=> {
    //
    //     var todoData = [{
    //         id: 11,
    //         text: '123',
    //         completed: true,
    //         createdAt: 100500,
    //         completedAt: 123
    //     }];
    //     var todoList = TestUtils.renderIntoDocument(<Main/>);
    //     todoList.setState({todos: todoData});
    //
    //     expect(todoList.state.todos[0].completed).toBe(true);
    //     todoList.handleToggle(11);
    //     expect(todoList.state.todos[0].completed).toBe(false);
    //     expect(todoList.state.todos[0].completedAt).toNotExist();
    //
    // });
});