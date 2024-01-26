import React from "react";

const TaskFormErrorShow = ({ error }) => {
  return error && <p className="text-red-500 text-sm mt-1">{error}</p>;
};

export default TaskFormErrorShow;
