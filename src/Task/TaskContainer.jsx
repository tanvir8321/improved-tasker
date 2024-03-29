import React from "react";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

const TaskContainer = () => {
  return (
    <>
      <section className="mb-20" id="tasks">
       
        <div className="container">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions />
            <TaskList />
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskContainer;
