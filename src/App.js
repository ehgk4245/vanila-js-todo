import Header from "./components/Header.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";
import { getItem, setItem } from "./storage.js";

function App({ $target }) {
  let nextid = 2;
  const initialState = getItem("todos", [
    { id: 1, text: "할일1", checked: false },
  ]);

  const onSubmit = (text) => {
    const nextState = [...todoList.state, { id: nextid, text, checked: false }];
    todoList.setState(nextState);
    setItem("todos", JSON.stringify(nextState));
    nextid++;
  };

  const onChange = (selectedId) => {
    const nextState = todoList.state.map((item) =>
      item.id === selectedId ? { ...item, checked: !item.checked } : item
    );
    todoList.setState(nextState);
    setItem("todos", JSON.stringify(nextState));
  };

  const deleteTodo = (selectedId) => {
    const nextState = todoList.state.filter((item) => item.id !== selectedId);
    todoList.setState(nextState);
    setItem("todos", JSON.stringify(nextState));
  };

  const $page = document.createElement("div");
  $target.appendChild($page);

  const header = new Header({ $target: $page });
  header.setState("!!오늘 할 일!!");
  new TodoForm({ $target: $page, onSubmit });
  const todoList = new TodoList({
    $target: $page,
    initialState: initialState,
    onChange,
    deleteTodo,
  });
}

export default App;
