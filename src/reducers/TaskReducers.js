const initialState = {
  tasks: [],
  taskModal: false,
  editTask: null,
  searchText: "",
  searchedTasks: [],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "TASK_TOGGLE":
      return {
        ...state,
        taskModal: !state.taskModal,
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        taskModal: !state.taskModal,
      };
    case "FAVOURITE_TOGGLE":
      const newTasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, isFavourite: !task.isFavourite }
          : task
      );
      return {
        ...state,
        tasks: newTasks,
      };
    case "UPDATE_TASK":
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
      return {
        ...state,
        tasks: updatedTasks,
        taskModal: !state.taskModal,
        editTask: null,
      };
    case "TASK_EDIT":
      return {
        ...state,
        editTask: action.payload,
        taskModal: !state.taskModal,
      };
    case "TASK_SEARCH":
      const searchTasks = state.tasks.filter((task) =>
        task.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        searchText: action.payload,
        searchedTasks: searchTasks,
      };
    case "TASK_REMOVED":
      const removedTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return {
        ...state,
        tasks: removedTasks,
      };
    case "ALL_TASK_REMOVED":
      return {
        ...state,
        tasks: [],
      };

    default:
      return state;
  }
};

export { initialState, taskReducer };
