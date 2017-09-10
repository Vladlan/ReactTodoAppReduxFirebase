import React from 'react';
import * as Redux from 'react-redux';

import AddTodoForm from 'AddTodoForm';
import TodoList from 'TodoList';
import SearchTodoForm from 'SearchTodoForm';
import * as actions from 'actions';

export var Main = React.createClass({

    onLogout(e) {
        var {dispatch} = this.props;
        e.preventDefault();
        dispatch(actions.startLogout());
    },

    // getInitialState: function () {
    //         return {
    //             showCompleted: false,
    //             searchText: '',
    //             todos: TodoAPI.getTodos()
    //     }},

    // componentDidUpdate: function () {
    //   TodoAPI.setTodos(this.state.todos);
    // },

    // handleAddTodo: function (str) {
    //         this.setState({
    //             todos: [
    //                 ...this.state.todos,
    //                 {
    //                     id: uuid(),
    //                     text: str,
    //                     completed: false,
    //                     createdAt: moment().unix(),
    //                     completedAt: undefined
    //                 }
    //             ]
    //         })
    // },

    // handleSearch: function (showCompleted, searchText) {
    //     this.setState({
    //         showCompleted: showCompleted,
    //         searchText: searchText.toLowerCase(),
    //     });
    //     // console.log(searchText);
    // },

    //With Redux we do not need id !
    // handleToggle: function (id) {
    //     var updatedTodos = this.state.todos.map((todo)=> {
    //         if (todo.id === id) {
    //             todo.completed = !todo.completed;
    //             todo.completedAt = todo.completed ? moment().unix() : undefined;
    //         }
    //         return todo
    //     });
    //
    //     this.setState({todos: updatedTodos});
    // },

    render() {
            // var {todos, showCompleted, searchText} = this.state;
            // var filtredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
        <div>
            <div className="page-actions">
                <a href="#" onClick={this.onLogout}>Logout</a>
            </div>
            <h1 className="MainTitle">React Todo App</h1>
                    {/*Main.jsx*/}
                    <SearchTodoForm/>
                    {/*<TodoList todos={filtredTodos} onToggle={this.handleToggle}/>*/}
                    <TodoList/>
                    <AddTodoForm/>
        </div>
    );
}
});

export default Redux.connect()(Main);
// module.exports = Main;