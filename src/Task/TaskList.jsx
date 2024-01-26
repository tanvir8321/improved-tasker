import React, { useContext } from "react";
import { TaskContext } from "../context";
import TaskRow from "./TaskRow";

const TaskList = () => {
  const { state } = useContext(TaskContext);
  console.log(state);
  const displayTasks = state.searchText ? state.searchedTasks : state.tasks;
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]" />
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              Title
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              Description
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              Tags
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Priority
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {displayTasks.length === 0 ? (
            <tr>
              <td className="text-center" colSpan={5}>
                Task List is empty!
              </td>
            </tr>
          ) : (
            displayTasks.map((task) => <TaskRow key={task.id} task={task} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
