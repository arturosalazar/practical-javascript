//hold todo list and related todo list methods in an object
let todoList = {
  todos: ['item1', 'item2', 'item3'],

  displayTodos: function() {
    console.log(`My Todos: `, this.todos);
  },

  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },

  changeTodo: function(index, newVal) {
    this.todos[index] = newVal;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
