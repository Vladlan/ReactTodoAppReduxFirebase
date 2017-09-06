var $ = require('jQuery');

module.exports = {
    // getTodos: function () {
    //     var todos = [];
    //     var stringTodos = localStorage.getItem('todos');
    //
    //     try {
    //         todos = JSON.parse(stringTodos);
    //     }
    //     catch (e)
    //     {
    //         console.log(e);
    //     }
    //     return $.isArray(todos) ? todos : [];
    //
    // },
    // setTodos: function (todos) {
    //     if ($.isArray(todos)) {
    //         localStorage.setItem('todos', JSON.stringify(todos));
    //     }
    //     return todos;
    // },

    filterTodos: function (todos, showCompleted, searchText) {
        var filtredTodos = todos;

        //filter by checkbox 'showcompleted'
        filtredTodos = filtredTodos.filter((todo)=>{
            return !todo.completed || showCompleted
        });

        //filter by searchText
        filtredTodos = filtredTodos.filter((todo)=>{
            if (searchText.length === 0 ||
                todo.text.toLowerCase().indexOf(searchText) !== (-1)) {
            return true;
            }
            else {return false}

        });
        //filter by completed property of todos
        filtredTodos = filtredTodos.sort((a,b)=>{
            if (!a.completed && b.completed) {
                return -1
            }
            else if (a.completed && !b.completed) {
                return 1
            }
            else {
                return 0
            }
        });

        return filtredTodos;
    }
};