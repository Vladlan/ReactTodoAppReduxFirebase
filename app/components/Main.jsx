var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var SearchTodoForm = require('SearchTodoForm');
var uuid = require('node-uuid');
var Main = React.createClass({

    getInitialState: function () {
            return {
                showCompleted: false,
                searchText: '',
                todos: [
                    {
                        id: uuid(),
                        text: 'Find a book about AngularJS'
                    },
                    {
                        id: uuid(),
                        text: 'Buy a  new computer mouse'
                    },
                    {
                        id: uuid(),
                        text: 'Finish work on ReactTodoApp'
                    }
                ]
        }},

    handleAddTodo: function (str) {
            this.setState({
                todos: [
                    ...this.state.todos,
                    {
                        id: uuid(),
                        text: str
                    }
                ]
            })
    },

    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase(),
        });
        console.log(searchText);
    },

    render: function () {
            var {todos} = this.state;
    return (
        <div>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    Main.jsx
                    <SearchTodoForm onSearch={this.handleSearch}/>
                    <TodoList todos={todos}/>
                    <AddTodoForm onAddTodo={this.handleAddTodo}/>
                </div>
            </div>
        </div>
    );
}
});
module.exports = Main;