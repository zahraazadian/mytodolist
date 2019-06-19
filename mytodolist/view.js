var todoListUl = document.getElementById('todoList');
var filterButtons = [
    document.getElementById('all'),
    document.getElementById('active'),
    document.getElementById('complete'),
    document.getElementById('removed')];

function render(todos, removeFn, completeFn) {
    
    filterButtons.forEach(function (b, i) {
        b.className = i === model.filter ? 'btn-filter-selected' : 'btn-filter';
    });

    todoListUl.innerHTML = '';
    if (todos.length == 0) {
        var emptyLi = document.createElement('li');
        emptyLi.textContent = 'thers is no todo to show!';
        todoListUl.appendChild(emptyLi);
        return;
    }
    // todos.forEach ( limaker=Text =>{
    //     var li= document.createElement('li')
    // li.textContent=text 
    // ul.appendChild(li)
    // })
    todos.forEach(function (todo) {
        var li = document.createElement('li');
        var titleSpan = document.createElement('span');
        var removeBtn = document.createElement('button');
        var completeBtn = document.createElement('button');
        li.appendChild(titleSpan);
        li.appendChild(removeBtn);
        li.appendChild(completeBtn);

        titleSpan.textContent = todo.title;
        removeBtn.textContent = 'X';
        completeBtn.textContent = todo.done ? '-' : '+';

        titleSpan.className = todo.done ? 'todo-complete' : 'todo-active';

        removeBtn.onclick = function () {
            removeFn(todo);
        }

        completeBtn.onclick = function () {
            completeFn(todo);
        }

        todoListUl.appendChild(li);
    });
}
