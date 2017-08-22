var $ = require('jQuery');

module.exports = {
    getTodos: function () {
        var todos = [];
        var stringTodos = localStorage.getItem('todos');

        try {
            todos = JSON.parse(stringTodos);
        }
        catch (e)
        {
            console.log(e);
        }
        return $.isArray(todos) ? todos : [];

    },
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
        return todos;
    }
};