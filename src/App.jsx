import { useReducer } from "react";
import "./App.css";
import { reducer } from "./Reducers/TodoReducer";

const initState = {
  toDoTitle: "",
  toDoList: [],
  editMode: false,
  editableTodo: null,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div className="to-do-container">
      <div className="to-do">
        <input
          type="text"
          name="text"
          id="text"
          value={state.toDoTitle}
          onChange={(e) =>
            dispatch({
              type: "changeTodoTitle",
              payload: e.target.value,
            })
          }
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            state.editMode
              ? dispatch({ type: "updateTodo", payload: state.toDoTitle })
              : dispatch({ type: "createTodo", payload: state.toDoTitle });
          }}
          className="add-btn"
        >
          {state.editMode ? "Update-to-do" : "Add-to-do"}
        </button>
        <ul className="to-do-list">
          {state.toDoList.map((todo) => (
            <li>
              <span>{todo.title}</span>
              <button
                className="edit-btn"
                onClick={() =>
                  dispatch({
                    type: "editTodo",
                    payload: {
                      id: todo.id,
                    },
                  })
                }
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() =>
                  dispatch({
                    type: "deleteTodo",
                    payload: todo.id,
                  })
                }
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
