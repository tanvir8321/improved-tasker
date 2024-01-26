const initialState = {
  tasks: [],
  taskModal: false,
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

    default:
      return state;
  }
};

export { initialState, taskReducer };
