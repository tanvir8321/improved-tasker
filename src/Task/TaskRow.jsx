import React, { useContext } from "react";
import TaskTag from "./TaskTag";
import { FaStar } from "react-icons/fa";
import { TaskContext } from "../context";
import { toast } from "react-toastify";

const TaskRow = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  const favouriteToggle = (id) => {
    dispatch({
      type: "FAVOURITE_TOGGLE",
      payload: id,
    });
    toast.success(
      `Task ${task.isFavourite ? "unf" : "f"}avourite successfully!`
    );
  };
  const onRemove = (id) => {
    dispatch({
      type: "TASK_REMOVED",
      payload: id,
    });
    toast.success("Task successfully removed!");
  };
  const onEdit = (task) => {
    dispatch({
      type: "TASK_EDIT",
      payload: task,
    });
  };
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td className="cursor-pointer" onClick={() => favouriteToggle(task.id)}>
        <FaStar fill={task.isFavourite ? "gold" : "white"} />
      </td>
      <td>{task.title}</td>
      <td>
        <div>{task.description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task.tags.split(",").map((tag, index) => (
            <TaskTag key={index + 1} tag={tag} />
          ))}
        </ul>
      </td>
      <td className="text-center">{task.priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button onClick={() => onRemove(task.id)} className="text-red-500">
            Delete
          </button>
          <button onClick={() => onEdit(task)} className="text-blue-500">
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TaskRow;
