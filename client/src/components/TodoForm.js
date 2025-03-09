"use client";
import { useState } from "react";
import axios from "axios";

const TodoForm = ({ fetchTodos }) => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    try {
      await axios.post("http://localhost:5000/api/todos", { task });
      setTask("");
      fetchTodos(); // Refresh the list
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <button type="submit" className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
