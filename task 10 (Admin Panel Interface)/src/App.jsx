import { useState } from 'react';
import AdminLayout from "./components/AdminLayout";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";
import ChartSection from "./components/ChartSection";
import ConfirmModal from "./components/ConfirmModel";
import { initialUsers, chartData } from "./data";

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [nextId, setNextId] = useState(initialUsers.length + 1);

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [editingId, setEditingId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Test function to verify modal works
  const testModal = () => {
    console.log("Test modal function called");
    setIsModalOpen(true);
  };

  const handleAddUser = (newUser) => {
    const user = {
      id: nextId,
      ...newUser
    };
    setUsers([...users, user]);
    setNextId(nextId + 1);
    setFormData({ name: "", email: "" });
  };

  const handleEditUser = (id, updatedUser) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, ...updatedUser } : user
    ));
    setFormData({ name: "", email: "" });
    setEditingId(null);
  };

  const handleDeleteUser = () => {
    console.log("Deleting user with ID:", deleteId);
    setUsers(users.filter(user => user.id !== deleteId));
    setIsModalOpen(false);
    setDeleteId(null);
  };

  const startEdit = (user) => {
    setFormData({ name: user.name, email: user.email });
    setEditingId(user.id);
  };

  const startDelete = (id) => {
    console.log("Delete requested for user ID:", id);
    console.log("Setting deleteId to:", id);
    console.log("Setting isModalOpen to: true");
    setDeleteId(id);
    setIsModalOpen(true);
    console.log("Modal state should be updated now");
  };

  const cancelEdit = () => {
    setFormData({ name: "", email: "" });
    setEditingId(null);
  };

  return (
    <AdminLayout testModal={testModal}>
      <UserForm
        formData={formData}
        onSubmit={editingId ? (data) => handleEditUser(editingId, data) : handleAddUser}
        onCancel={cancelEdit}
        isEditing={!!editingId}
      />
      <UserTable
        rows={users}
        onEdit={startEdit}
        onDelete={startDelete}
      />
      <ChartSection data={chartData} />
      <ConfirmModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDeleteUser}
      />
    </AdminLayout>
  );
}

export default App
