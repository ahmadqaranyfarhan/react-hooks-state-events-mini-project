import React from "react";
import Task from "./Task";

function TaskList(props) {
  return (
    <div className="tasks">
      {props.tasks.map((task, index) => (
        <Task key={index} task={task} onDeleteTask={props.onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
