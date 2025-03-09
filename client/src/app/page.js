"use client";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function Home () {
  const [todos, setTodos] = useState([]);

  const fetchTodos = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/todos");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <main className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do App</h1>
      <TodoForm fetchTodos={fetchTodos} />
      <TodoList todos={todos} fetchTodos={fetchTodos} />
    </main>
  );
};
