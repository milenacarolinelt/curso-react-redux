const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOptions({ new: true, runValidator: true });

module.exports = Todo;