import { TextField, Button, Stack } from "@mui/material";
import { useState, useEffect } from "react";

function UserForm({ formData: parentFormData, onSubmit, onCancel, isEditing }) {
  const [localFormData, setLocalFormData] = useState(parentFormData);

  useEffect(() => {
    setLocalFormData(parentFormData);
  }, [parentFormData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localFormData.name && localFormData.email) {
      onSubmit({
        name: localFormData.name,
        email: localFormData.email
      });

      setLocalFormData({ name: "", email: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Stack component="form" spacing={2} maxWidth={400} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={localFormData.name}
        onChange={handleInputChange}
        required
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={localFormData.email}
        onChange={handleInputChange}
        required
      />
      <Stack direction="row" spacing={2}>
        <Button type="submit" variant="contained">
          {isEditing ? "Update User" : "Add User"}
        </Button>
        {isEditing && (
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </Stack>
    </Stack>
  );
}

export default UserForm;