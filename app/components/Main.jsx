var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var Main = React.createClass({

    getInitialState: function () {
            return {
                todos: [
                    {
                        id: 1,
                        text: 'Find a book about AngularJS'
                    },
                    {
                        id: 2,
                        text: 'Buy a  new computer mouse'
                    },
                    {
                        id: 3,
                        text: 'Finish work on ReactTodoApp'
                    }
                ]
        }},

    handleAddTodo: function (str) {
            alert(str);
    },

    render: function () {
            var {todos} = this.state;
    return (
        <div>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    Main.jsx
                    <TodoList todos={todos}/>
                    <AddTodoForm onAddTodo={this.handleAddTodo}/>
                </div>
            </div>
        </div>
    );
}
});
module.exports = Main;