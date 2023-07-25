import { useState } from "react";
import "./App.css";

function App() {
  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableTodo, setEditableTdo] = useState(null);

  const createTodoHAndler = () => {
    if (toDoTitle) {
      const newTodo = {
        id: Date.now(),
        title: toDoTitle,
      };
      setToDoList([...toDoList, newTodo]);
      setToDoTitle("");
    } else {
      alert("please enter a valid content");
    }
  };

  const deleteTodoHandler = (id) => {
    const newTodoList = toDoList.filter((item) => item.id !== id);
    setToDoList(newTodoList);
    setToDoTitle("");
  };

  const editTodoHandler = (id) => {
    const toDoBeEdit = toDoList.find((item) => item.id === id);
    setEditMode(true);
    setEditableTdo(toDoBeEdit);
    setToDoTitle(toDoBeEdit.title);
  };

  const updateTodoHandler = () => {
    setToDoList(
      toDoList.map((todo) => {
        if (todo.id === editableTodo.id) {
          todo.title = toDoTitle;
          return todo;
        }
        return todo;
      })
    );
    setEditMode(false);
    setToDoTitle("");
    setEditableTdo(null);
  };

  return (
    <div className="to-do-container">
      <div className="to-do">
        <input
          type="text"
          name="text"
          id="text"
          value={toDoTitle}
          onChange={(e) => setToDoTitle(e.target.value)}
        />
        <button
          onClick={() => {
            editMode ? updateTodoHandler() : createTodoHAndler();
          }}
          className="add-btn"
        >
          {editMode ? "Update-to-do" : "Add-to-do"}
        </button>
        <ul className="to-do-list">
          {toDoList.map((todo) => (
            <li>
              <span>{todo.title}</span>
              <button
                className="edit-btn"
                onClick={() => editTodoHandler(todo.id)}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteTodoHandler(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
