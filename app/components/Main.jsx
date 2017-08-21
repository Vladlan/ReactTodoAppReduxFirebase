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
                        text: 'Find a book about AngularJS',
                        completed: false
                    },
                    {
                        id: uuid(),
                        text: 'Buy a  new computer mouse',
                        completed: true
                    },
                    {
                        id: uuid(),
                        text: 'Finish work on ReactTodoApp',
                        completed: false
                    }
                ]
        }},

    handleAddTodo: function (str) {
            this.setState({
                todos: [
                    ...this.state.todos,
                    {
                        id: uuid(),
                        text: str,
                        completed: false
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

    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map((todo)=> {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo
        });

        this.setState({todos: updatedTodos});
    },

    render: function () {
            var {todos} = this.state;
    return (
        <div>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    Main.jsx
                    <SearchTodoForm onSearch={this.handleSearch}/>
                    <TodoList todos={todos} onToggle={this.handleToggle}/>
                    <AddTodoForm onAddTodo={this.handleAddTodo}/>
                </div>
            </div>
        </div>
    );
}
});
module.exports = Main;