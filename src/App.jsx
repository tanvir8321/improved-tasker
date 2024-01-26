import { useReducer } from "react";
import "./App.css";
import Page from "./Page";
import { initialState, taskReducer } from "./reducers/TaskReducers";
import { TaskContext } from "./context";

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <>
      <TaskContext.Provider value={{ state, dispatch }}>
        <Page />
      </TaskContext.Provider>
    </>
  );
}

export default App;
