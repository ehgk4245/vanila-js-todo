import TodoItem from "./TodoItem.js";

function TodoList({ $target, initialState, onChange, deleteTodo }) {
  const $ul = document.createElement("ul");
  $target.appendChild($ul);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $ul.innerHTML = "";
    this.state.forEach((item) => {
      new TodoItem({ $target: $ul, item, onChange, deleteTodo });
    });
  };

  this.render();
}

export default TodoList;
