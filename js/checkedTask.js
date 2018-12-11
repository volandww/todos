function checkedTask(id) {
  var toDoLists = JSON.parse(localStorage.getItem('toDoLists'));

  for (var i = 0; i < toDoLists.length; i++) {
    if (toDoLists[i].id == id) {
      toDoLists[i].status = changeStatus(toDoLists[i].status);
      break;
    }
  }

  localStorage.setItem('toDoLists', JSON.stringify(toDoLists));

  renderToDoLists();

  }

function changeStatus(status) {
    var active = 'active';
    var completed = 'completed';

    if (status == active) {
      return completed;
    } else {
      return active;
    }
}
