import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

function App({ $target }) {
  const $page = document.createElement("div");
  $target.appendChild($page);

  new TodoForm({ $target: $page });
  new TodoList({ $target: $page });
}

export default App;
