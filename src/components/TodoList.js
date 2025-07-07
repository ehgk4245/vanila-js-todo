function TodoList({ $target, initialState, onChange, deleteTodo }) {
  const $ul = document.createElement("ul");
  $target.appendChild($ul);

  $ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("del_btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      deleteTodo(id);
    }
  });

  $ul.addEventListener("change", (e) => {
    if (e.target.classList.contains("ck")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      onChange(id);
    }
  });

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $ul.innerHTML = this.state
      .map(
        (item) => `<li>
      <input class="ck" type="checkbox" data-id=${item.id} ${
          item.checked ? "checked" : ""
        } />
      <span>${item.id} : ${item.text}</span>
      <button class="del_btn" data-id=${item.id} type="button">X</button>
      </li>`
      )
      .join("");
  };

  this.render();
}

export default TodoList;
