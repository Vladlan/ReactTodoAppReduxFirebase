var React = require('react');
import Todo from 'Todo';
//Connect is a  companion to the Provider component. Connect shows Provider's children which data they like.
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
        render: function () {
            var {todos, showCompleted, searchText} = this.props;
            var renderTodos = () => {
                if (todos.length === 0) {
                    return (
                        <p className="NoTodo">No todos</p>
                    )
                }
                return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo)=> {
                    return (
                        // <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                        <Todo key={todo.id} {...todo}/>
                    )
                })
            };
            return (
                <div>
                    {renderTodos()}
                </div>
            )
        }
    });

// module.exports = connect(What...)(To ...);
export default connect(
    (state)=> {
    return state;
    }
)(TodoList);