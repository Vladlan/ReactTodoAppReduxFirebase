var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodoForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var todoText = this.refs.todoText.value;

        if (todoText) {
            this.refs.todoText.value = '';
            dispatch(actions.addTodo(todoText));
            // this.props.onAddTodo(todoText);
        }
        else {
            this.refs.todoText.focus();
        }
    },
   render: function () {
       return (
           <div>
               <form ref="form" onSubmit={this.onSubmit} className="AddTodoForm">
                   <input className="AddTodo" type="text" ref="todoText"
                          placeholder="Enter todo"/>
                   <button className="button expanded">Submit</button>
               </form>
           </div>
       )
   }
});

export default connect()(AddTodoForm);