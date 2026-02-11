import { useState } from "react";
import { useTasks } from "./context/taskContext.jsx";

const STATUS = ["all", "pending", "in-progress", "completed"];
const PRIORITY = ["all", "low", "medium", "high"];

export default function App() {
  const { tasks, loading, error, addTask, editTask, removeTask } = useTasks();

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
  });

  const [editingId, setEditingId] = useState(null);

  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    if (editingId) {
      await editTask(editingId, form);
      setEditingId(null);
    } else {
      await addTask(form);
    }

    setForm({ title: "", description: "", status: "pending", priority: "medium" });
  };

  const startEdit = (task) => {
    setEditingId(task._id);
    setForm({
      title: task.title,
      description: task.description || "",
      status: task.status,
      priority: task.priority,
    });
  };

  const filteredTasks = tasks.filter((t) => {
    const statusMatch = statusFilter === "all" || t.status === statusFilter;
    const priorityMatch = priorityFilter === "all" || t.priority === priorityFilter;
    return statusMatch && priorityMatch;
  });

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <h5>Title</h5>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <h5>Description</h5>
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <h5>Status</h5>
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          {STATUS.filter((s) => s !== "all").map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <h5>Priority</h5>
        <select
          value={form.priority}
          onChange={(e) => setForm({ ...form, priority: e.target.value })}
        >
          {PRIORITY.filter((p) => p !== "all").map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <button type="submit">{editingId ? "Update Task" : "Add Task"}</button>
      </form>
      <h5>Status filter</h5>
      <div className="filters">
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          {STATUS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <h5>Priority filter</h5>

        <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
          {PRIORITY.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      {loading && <p>Loading tasks...</p>}
      {error && <p className="error">{error}</p>}

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Priority: {task.priority}</p>
            <button onClick={() => startEdit(task)}>Edit</button>
            <button onClick={() => removeTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
