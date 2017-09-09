var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');
//
export var Todo = React.createClass({
        render: function () {
            var {id, text, completed, createdAt, completedAt, dispatch}= this.props;
            var TodoClassName = !completed ? 'Todo' : 'TodoCompleted';
            var creatComplAtRender = () => {
                var CreatedAt = 'Created at ';
                var timeCreated = moment.unix(createdAt).format("H:mm:ss, MMMM Do YYYY");

                var CompletedAt = 'Completed at ';
                var timeCompleted = moment.unix(completedAt).format("H:mm:ss, MMMM Do YYYY");

                if (completed) {
                    return CompletedAt + timeCompleted
                }

                else {
                    return CreatedAt + timeCreated
                }
            };
            return (
                <div className="Todo" onClick={() => {
                    {/*this.props.onToggle(id)*/}
                    dispatch(actions.startToggleTodo(id, !completed));
                }}>
                        <table className={TodoClassName}>

                            <tbody>

                            <tr><td className="Todo">
                       <input type="checkbox" ref="completed" checked={completed}/>
                                {text}
                            </td></tr>

                            <tr><td className="creFinAt">
                            {creatComplAtRender()}
                            </td></tr>

                            </tbody>

                        </table>
                </div>
            )
        }
    });
//
export default connect()(Todo);

// module.exports = connect()(Todo);