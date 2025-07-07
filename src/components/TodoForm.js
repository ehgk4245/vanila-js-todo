function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement("form");
  $target.appendChild($form);

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    const $input = $form.querySelector("input");

    if ($input.value.length > 0) {
      onSubmit($input.value);
    }
  });

  this.render = () => {
    $form.innerHTML = `
        <input type="text" />
        <button>등록</button>
    `;
  };

  this.render();
}

export default TodoForm;
