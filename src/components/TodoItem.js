function TodoItem({ $target, item, onChange, deleteTodo }) {
  const $li = document.createElement("li");
  $target.appendChild($li);

  this.render = () => {
    $li.innerHTML = `
      <input class="ck" type="checkbox" data-id=${item.id} ${
      item.checked ? "checked" : ""
    } />
      <span>${item.id} : ${item.text}</span>
      <button class="del_btn" data-id=${item.id} type="button">X</button>
      `;
  };

  $target.addEventListener("click", (e) => {
    if (e.target.classList.contains("del_btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      deleteTodo(id);
    }
  });

  $target.addEventListener("change", (e) => {
    if (e.target.classList.contains("ck")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      onChange(id);
    }
  });

  this.render();
}

export default TodoItem;
