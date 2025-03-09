"use client";
import axios from "axios";

const TodoList = ({ todos, fetchTodos }) => {
  const handleToggle = async (id, completed) => {
    try {
      await axios.put(`http://localhost:5000/api/todos/${id}`, { completed: !completed });
      fetchTodos();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li key={todo._id} className="flex justify-between items-center p-2 border rounded">
          <span
            onClick={() => handleToggle(todo._id, todo.completed)}
            className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
          >
            {todo.task}
          </span>
          <button onClick={() => handleDelete(todo._id)} className="bg-red-500 cursor-pointer text-white px-2 py-1 rounded">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
