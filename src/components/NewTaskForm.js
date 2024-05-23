import React, { useState } from "react";

function NewTaskForm(props) {
  const [data, setData] = useState({
    text: "",
    category: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onTaskFormSubmit(data);
    setData({
      text: "",
      category: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input
          type="text"
          name="text"
          value={data.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select name="category" value={data.category} onChange={handleChange}>
          <option value="">Select a category</option>
          {props.categories.map(
            (category) =>
              category !== "All" && (
                <option key={category} value={category}>
                  {category}
                </option>
              )
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
