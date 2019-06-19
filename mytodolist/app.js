var filter = { all: 0, active: 1, complete: 2, removed: 3 };
var model = { todos: [], filter: filter.all };
var input = document.getElementById('input');


init();

// ========================================================================================================

function init() {

    model = JSON.parse(localStorage.getItem('localtodos'));
    input.focus();
    doRender();
}

function add() {
    var value = input.value;
    if (!value) return;
    input.value = "";
    model.todos.push({ title: value, done: false, removed: false });
    doRender();
    return false;

}

function remove(todo) {
    todo.removed = true;
    doRender();
}

function toggleComplete(todo) {
    todo.done = !todo.done;
    doRender();
}

function applyFilter(value) {
    model.filter = filter[value];
    doRender();
}


function doRender() {
    localStorage.setItem('localtodos', JSON.stringify(model));

    var filteredTodos = model.todos.filter(function (t) {
        switch (model.filter) {
            case filter.all: return !t.removed;
            case filter.active: return !t.removed && !t.done;
            case filter.complete: return !t.removed && t.done;
            case filter.removed: return t.removed;
        }

    });
    render(filteredTodos, remove, toggleComplete);


}

