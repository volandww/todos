function renderToDoLists() {
  var toDoLists = JSON.parse(localStorage.getItem('toDoLists'));
  var toDoTasks = document.getElementById('tasks');

  toDoTasks.innerHTML = '';

  for (var i = 0; i < toDoLists.length; i++) {
    var id = toDoLists[i].id;
    var value = toDoLists[i].value;
    var status = toDoLists[i].status;

    toDoTasks.innerHTML +=  '<section>'+
                            '<ul class="todo-list">'+
                            '<li>'+
                            '<div class="view">'+
                            '<input type="checkbox" onclick="checkedTask(\''+ id +'\')" class="toggle"></input>'+
                            '<label ondblclick="changeValue(\''+ value +'\', \''+ id +'\')">' + value + '</label>'+
                            '<button onclick="deleteTask(\''+ id +'\')" class="destroy"></button>'+
                            '</div>'+
                            '<input id="' + id + '" class="edit" type="text">'+
                            '</li>'+
                            '</ul>'+
                            '</section>';
  }
}
