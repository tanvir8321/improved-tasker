import React from "react";

const TaskTag = ({ tag }) => {
  return (
    <li>
      <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
        {tag}
      </span>
    </li>
  );
};

export default TaskTag;
