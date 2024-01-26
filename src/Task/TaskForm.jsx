import React, { useState } from "react";
import TaskFormErrorShow from "./TaskFormErrorShow";

const TaskForm = ({ state, dispatch }) => {
  const [formErrors, setFormErrors] = useState({});
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    tags: "",
    priority: "",
  });

  const validateField = (fieldName, value) => {
    if (!value.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: `${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        } is required`,
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    Object.keys(formState).forEach((fieldName) => {
      if (!formState[fieldName].trim()) {
        errors[fieldName] = `${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        } is required`;
      }
    });

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const onChangeHandler = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;

    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));

    validateField(fieldName, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(state);

    if (validateForm()) {
      console.log(formState);

      dispatch({
        type: "ADD_TASK",
        payload: formState,
      });

      // setTitle("");
      // setDescription("");
      // setTags("");
      // setPriority("");
    }
  };

  {
    formErrors.title && (
      <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>
    );
  }
  console.log(state);
  return (
    <>
      <div className="bg-black bg-opacity-70 h-full w-full z-100 absolute top-0 left-0"></div>
      <form
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-0 lg:p-11 absolute z-100 top-1/4 left-1/3"
        onSubmit={onSubmit}>
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Add New Task
        </h2>
        {/* inputs */}
        <div className="space-y-9 text-white lg:space-y-10">
          {/* title */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              value={formState.title}
              onChange={onChangeHandler}
            />
            <TaskFormErrorShow error={formErrors.title} />
          </div>
          {/* description */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              value={formState.description}
              onChange={onChangeHandler}
            />
            <TaskFormErrorShow error={formErrors.description} />
          </div>
          {/* input group */}
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            {/* tags */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                value={formState.tags}
                onChange={onChangeHandler}
              />
              <TaskFormErrorShow error={formErrors.tags} />
            </div>
            {/* priority */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                value={formState.priority}
                onChange={onChangeHandler}>
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <TaskFormErrorShow error={formErrors.priority} />
            </div>
          </div>
        </div>
        {/* inputs ends */}
        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80">
            Create new Task
          </button>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
