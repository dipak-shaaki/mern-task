import { createContext, useContext, useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api/taskApi.js";

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (task) => {
    const newTask = await createTask(task);
    setTasks((prev) => [newTask, ...prev]);
  };

  const editTask = async (id, updates) => {
    const updated = await updateTask(id, updates);
    setTasks((prev) => prev.map((t) => (t._id === id ? updated : t)));
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <TasksContext.Provider
      value={{ tasks, loading, error, addTask, editTask, removeTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}
