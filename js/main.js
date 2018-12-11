var input = document.getElementById('todoInput');

// Press Enter in the input and input not empty
input.addEventListener('keyup', function(event) {
  // Number 13 is the "Enter" key
  if (event.keyCode === 13 && input.value !== '') {
    saveInputToDo();
  }
})

// save in localStorage user input
function saveInputToDo() {
  var inputStatus = 'active';
  var inputValue = input.value;
  var inputId = chance.guid();

  var toDoList = {
    id: inputId,
    value: inputValue,
    status: inputStatus
  }

// if toDoLists (in localStorage) empty create it
// else add toDoList to toDoLists
  if (localStorage.getItem('toDoLists') == null) {
    var toDoLists = [];
    toDoLists.push(toDoList);
    localStorage.setItem('toDoLists', JSON.stringify(toDoLists));
  } else {
    toDoLists = JSON.parse(localStorage.getItem('toDoLists'));
    toDoLists.push(toDoList);
    localStorage.setItem('toDoLists', JSON.stringify(toDoLists));
  }

  document.getElementById('todoInput').value = '';

  renderToDoLists();

}
