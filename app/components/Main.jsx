var React = require('react');
var TodoList = require('TodoList');
//#2
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

    render: function () {
            var {todos} = this.state;
    return (
        <div>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    Main.jsx
                    <TodoList todos={todos}/>
                </div>
            </div>
        </div>
    );
}
});
module.exports = Main;