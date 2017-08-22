var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', ()=> {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle prop with id onClick', () => {

        var todoData = {
            id: 11,
            text: '111',
            completed: false
        };
        var spy = expect.createSpy();
        var toDo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
        var $el = $(ReactDOM.findDOMNode(toDo));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(11);
    });
});