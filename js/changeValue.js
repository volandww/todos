function changeValue(value, id) {
  var input = document.getElementById(id);
  var toDoLists = JSON.parse(localStorage.getItem('toDoLists'));

  input.className = 'editing';
  input.value = value;
  input.focus();

  input.addEventListener('focusout', function() {
    for (var i = 0; i < toDoLists.length; i++) {
      if (toDoLists[i].id == id && toDoLists[i].value !== '') {
        toDoLists[i].value = input.value;
        break;
      } else if (toDoLists[i].value == '') {
        deleteTask(id);
        break;
      }
    }
    localStorage.setItem('toDoLists', JSON.stringify(toDoLists));

    renderToDoLists();

    input.className = 'edit';
  })

  input.addEventListener('keyup', function(event) {
    // Number 13 is the "Enter" key
    if (event.keyCode === 13 && input.value !== '') {

      for (var i = 0; i < toDoLists.length; i++) {
        if (toDoLists[i].id == id) {
          toDoLists[i].value = input.value;
          break;
        }
      }

      localStorage.setItem('toDoLists', JSON.stringify(toDoLists));

      renderToDoLists();

    } else if (event.keyCode === 13 && input.value == '') {
      deleteTask(id);
    }
  })
}
