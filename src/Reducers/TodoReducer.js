export const reducer = (state, action) => {
    switch (action.type) {
      case "changeTodoTitle": {
        return {
          ...state,
          toDoTitle: action.payload,
        };
      }
      case "createTodo": {
        const newTodo = {
          id: Date.now(),
          title: action.payload,
        };
        return {
          ...state,
          toDoList: [...state.toDoList, newTodo],
          toDoTitle: "",
        };
      }
      case "editTodo": {
        const toBeEditedTodo = state.toDoList.find(
          (todo) => todo.id === action.payload.id
        );
        return {
          ...state,
          editMode: true,
          editableTodo: toBeEditedTodo,
          toDoTitle: toBeEditedTodo.title,
        };
      }
      case "updateTodo": {
        return {
          ...state,
          toDoList: state.toDoList.map((todo) => {
            if (todo.id === state.editableTodo.id) {
              return {
                ...todo,
                title: action.payload,
              };
            } else {
              return todo;
            }
          }),
          toDoTitle: "",
          editMode: false,
          editableTodo: null,
        };
      }
      case "deleteTodo": {
        return {
          ...state,
          toDoList: state.toDoList.filter((todo) => todo.id !== action.payload),
        };
      }
      default: {
        return state;
      }
    }
  };