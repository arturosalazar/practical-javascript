//hold todo list and related todo list methods in an object
let todoList = {
  todos: [],
  //console.log the todoText for each element in our array of todos
  //display if the todo is completed or not
  displayTodos: function() {
    //test if array is empty
    if (this.todos.length === 0) {
      console.log(`You don't have any todos!`);
    } else {
      console.log("My todos:");
      for (let todo of this.todos) {
        //change display depending on if the todo is completed
        if (todo.completed === true) {
          console.log(`(X) ${todo.todoText}`);
        } else {
          console.log(`( ) ${todo.todoText}`);
        }
      }
    }
  },
  //update to add a todo object with text + completed property instead of just text
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  // update so that function changes the todoText property on todo objects
  changeTodo: function(index, newVal) {
    this.todos[index].todoText = newVal;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  // create function to toggle completed property on todo objects
  toggleCompleted: function(position) {
    //create a variable to hold a reference to particular todo in question
    //less clutter and easier to read code
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
