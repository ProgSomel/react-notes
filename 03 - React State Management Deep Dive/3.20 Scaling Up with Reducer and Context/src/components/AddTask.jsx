import React, { useContext, useState } from "react";
import { TaskContext, TaskDispatchContext } from "../contexts/TaskContext";
import { getNextID } from "../utils/getNextID";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TaskDispatchContext);
  const tasks = useContext(TaskContext);

  return (
    <>
      <input
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: getNextID(tasks),
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
}
