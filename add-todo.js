
// A function that adds an item to our todo list.
const addTodo = function(todo) {
  todos.push(todo);
}

document.querySelector(".add-todo").addEventListener('click', function(){
  const todoItem = document.querySelector(".todo-input").value;
  const priorityItem = document.querySelector(".priority").value;
  let obj = {} 
  obj.text = todoItem
  obj.priority = priorityItem
  obj.complete = false
  obj.id = todos.length

  addTodo(obj);
  printTodo(obj)
})