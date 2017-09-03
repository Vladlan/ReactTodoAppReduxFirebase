var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
// *--> catches all props, actions and puts them on in object that we can access them from
import * as actions from 'actions';

//Below is not connected to the store
var {AddTodoForm} = require('AddTodoForm');

describe('AddTodoForm', () => {
    it('should exist', ()=> {
        expect(AddTodoForm).toExist();
    });
    it('should dispatch ADD_TODO when valid text entered', () => {
        var action = actions.startAddTodo('Finish app for shear resistance in ironforced concrete');
        var spy = expect.createSpy();
        var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodoForm));

        addTodoForm.refs.todoText.value = 'Finish app for shear resistance in ironforced concrete';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid todo text', () => {
        var spy = expect.createSpy();
        var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodoForm));

        addTodoForm.refs.todoText.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

});