function TodoForm({ $target }) {
  const $form = document.createElement("form");
  $form.innerHTML = `<input/><button>등록</button>`;
  $target.appendChild($form);
}

export default TodoForm;
