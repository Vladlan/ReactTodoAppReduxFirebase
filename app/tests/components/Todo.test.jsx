var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import {Todo} from 'Todo';
// var {Todo} = require('Todo');

describe('Todo', ()=> {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should dispatch UPDATE_TODO action onClick', () => {

        var todoData = {
            id: 11,
            text: '111',
            completed: false
        };
        var action = actions.startToggleTodo(todoData.id, !todoData.completed);

        var spy = expect.createSpy();
        {/*var toDo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);*/}
        var toDo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(toDo));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });
});