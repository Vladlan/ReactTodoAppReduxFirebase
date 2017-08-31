var expect = require('expect');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

// var SearchTodoForm = require('SearchTodoForm');
import {SearchTodoForm} from 'SearchTodoForm';

describe('SearchTodoForm', () => {
    it('should exist', ()=> {
        expect(SearchTodoForm).toExist();
    });

    // it('should call onSearch with entered input text', () => {
    //     var spy = expect.createSpy();
    //     var searchTodoForm = TestUtils.renderIntoDocument(<SearchTodoForm onSearch={spy}/>);
    //
    //     searchTodoForm.refs.searchText.value = 'Finish app';
    //     TestUtils.Simulate.change(searchTodoForm.refs.searchText);
    //
    //     expect(spy).toHaveBeenCalledWith(false, 'Finish app');
    // });

    it('should dispatch SET_SEARCH_TEXT on input change', () => {

        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Finish app'
        };

        var spy = expect.createSpy();
        var searchTodoForm = TestUtils.renderIntoDocument(<SearchTodoForm dispatch={spy}/>);
        searchTodoForm.refs.searchText.value = 'Finish app';
        TestUtils.Simulate.change(searchTodoForm.refs.searchText);
        expect(spy).toHaveBeenCalledWith(action);
    });

    // it('should call onSearch with proper check value', () => {
    //     var spy = expect.createSpy();
    //     var searchTodoForm = TestUtils.renderIntoDocument(<SearchTodoForm onSearch={spy}/>);
    //
    //     searchTodoForm.refs.showCompleted.checked = true;
    //     searchTodoForm.refs.searchText.value = 'Finish app';
    //     TestUtils.Simulate.change(searchTodoForm.refs.showCompleted);
    //
    //     expect(spy).toHaveBeenCalledWith(true, 'Finish app');
    // });

    it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {

        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };

        var spy = expect.createSpy();
        var searchTodoForm = TestUtils.renderIntoDocument(<SearchTodoForm dispatch={spy}/>);

        searchTodoForm.refs.showCompleted.checked = true;
        searchTodoForm.refs.searchText.value = 'Finish app';
        TestUtils.Simulate.change(searchTodoForm.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(action);
    });

});