function deleteTask(id) {
  var toDoLists = JSON.parse(localStorage.getItem('toDoLists'));

  for (var i = 0; i < toDoLists.length; i++) {
    if (toDoLists[i].id == id) {
      toDoLists.splice(i, 1);
    }
  }

  localStorage.setItem('toDoLists', JSON.stringify(toDoLists));

  renderToDoLists();
}
