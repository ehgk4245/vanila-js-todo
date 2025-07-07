import Header from "./components/Header.js";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

function App({ $target }) {
  let nextid = 3;
  const initialState = [
    {
      id: 1,
      text: "할일1",
    },
    {
      id: 2,
      text: "할일2",
    },
  ];

  const onSubmit = (text) => {
    todoList.setState([
      ...todoList.state,
      { id: nextid, text, checked: false },
    ]);
    nextid++;
  };

  const onChange = (selectedId) => {
    todoList.setState(
      todoList.state.map((item) =>
        item.id === selectedId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const deleteTodo = (selectedId) => {
    todoList.setState(todoList.state.filter((item) => item.id !== selectedId));
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
