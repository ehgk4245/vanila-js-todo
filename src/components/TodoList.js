function TodoList({ $target }) {
  const $ul = document.createElement("ul");
  let liHtml = "";
  for (let i = 1; i < 4; i++) {
    liHtml += `<li>할일${i}</li>`;
  }
  $ul.innerHTML = liHtml;
  $target.appendChild($ul);
}

export default TodoList;
