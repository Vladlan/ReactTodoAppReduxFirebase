var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
        render: function () {
            var {id, text, completed, createdAt, completedAt}= this.props;
            var TodoClassName = !completed ? 'Todo' : 'TodoCompleted'
            var creatComplAtRender = () => {
                var CreatedAt = 'Created at ';
                var time = moment.unix(createdAt).format("H:mm:ss, MMMM Do YYYY");

                var CompletedAt = 'Completed at ';
                var time2 = moment.unix(completedAt).format("H:mm:ss, MMMM Do YYYY");

                if (completed) {
                    return CompletedAt + time2
                }
                else {
                    return CreatedAt + time
                }
            };
            return (
                <div className="Todo" onClick={() => {this.props.onToggle(id)}}>
                        <table className={TodoClassName}>
                            <tbody>
                            <label>
                            <tr><td className="Todo">
                       <input type="checkbox" ref="completed" checked={completed}/>
                                {text}</td></tr>
                            <tr><td className="creFinAt">
                            {creatComplAtRender()}
                            </td></tr>
                            </label>
                            </tbody>
                        </table>
                </div>
            )
        }
    });
module.exports = Todo;