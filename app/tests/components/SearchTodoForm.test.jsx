var expect = require('expect');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

var SearchTodoForm = require('SearchTodoForm');

describe('SearchTodoForm', () => {
    it('should exist', ()=> {
        expect(SearchTodoForm).toExist();
    });
    it('should call onSearch with entered input text', () => {
        var spy = expect.createSpy();
        var searchTodoForm = TestUtils.renderIntoDocument(<SearchTodoForm onSearch={spy}/>);

        searchTodoForm.refs.searchText.value = 'Finish app';
        TestUtils.Simulate.change(searchTodoForm.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, 'Finish app');
    });

    it('should call onSearch with proper check value', () => {
        var spy = expect.createSpy();
        var searchTodoForm = TestUtils.renderIntoDocument(<SearchTodoForm onSearch={spy}/>);

        searchTodoForm.refs.showCompleted.checked = true;
        searchTodoForm.refs.searchText.value = 'Finish app';
        TestUtils.Simulate.change(searchTodoForm.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, 'Finish app');
    });

});