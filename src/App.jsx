import { useState } from "react";
import "./App.css";

function App() {
  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const createTodoHAndler = () => {
    if (toDoTitle) {
      const newTodo = {
        id: Date.now(),
        title: toDoTitle,
        isComplete: false,
      };
      setToDoList([...toDoList, newTodo]);
      setToDoTitle("");
    } else {
      alert("please enter a valid content");
    }
  };

  const deleteTodoHandler = (id) => {
    const newTodoList = toDoList.filter((item) => item.id !== id);
    setToDoList(newTodoList)
  };

  const editTodoHandler = (id) => {
    
  }

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
        <button onClick={createTodoHAndler}>Add to-do</button>
        <ul className="to-do-list">
          {toDoList.map((todo) => (
            <li>
              <span>{todo.title}</span>
              <button>Edit</button>
              <button onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
