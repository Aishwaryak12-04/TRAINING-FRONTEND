import React, { useState, useRef } from "react";
import "./App.css";
import UserTable from "./UserTable";

function App() {
  const formRef = useRef(null);
  const [user, setUser] = useState({
    name: "",
    age: "",
    gender: "",
    skills: [],
    dob: "",
    city: "New York",
  });

  const [errors, setErrors] = useState({});
  const [usersList, setUsersList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!user.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    if (!user.age || user.age < 1) {
      tempErrors.age = "Valid age is required";
      isValid = false;
    }
    if (!user.gender) {
      tempErrors.gender = "Select a gender";
      isValid = false;
    }
    if (user.skills.length === 0) {
      tempErrors.skills = "Select at least one skill";
      isValid = false;
    }
    if (!user.dob) {
      tempErrors.dob = "Date of birth is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setUser((prev) => ({
        ...prev,
        skills: checked ? [...prev.skills, value] : prev.skills.filter((s) => s !== value),
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (isEditing) {
      const updatedUsers = usersList.map((u, index) => (index === editIndex ? user : u));
      setUsersList(updatedUsers);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setUsersList([...usersList, user]);
    }

    resetForm();
  };

  const handleEdit = (index) => {
    setUser(usersList[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setUsersList(usersList.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setUser({ name: "", age: "", gender: "", skills: [], dob: "", city: "New York" });
    setErrors({});
    formRef.current.reset();
  };

  return (
    <div className="container">
      <form ref={formRef} className="form" onSubmit={handleSubmit}>
        <h2>{isEditing ? "Edit User" : "Add User"}</h2>

        <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}

        <input type="number" name="age" placeholder="Age" value={user.age} onChange={handleChange} />
        {errors.age && <span className="error">{errors.age}</span>}

        <div className="gender">
          <label>
            <input type="radio" name="gender" value="Male" checked={user.gender === "Male"} onChange={handleChange} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" checked={user.gender === "Female"} onChange={handleChange} />
            Female
          </label>
        </div>
        {errors.gender && <span className="error">{errors.gender}</span>}

        <div className="skills">
          <label>
            <input type="checkbox" name="skills" value="JavaScript" onChange={handleChange} />
            JavaScript
          </label>
          <label>
            <input type="checkbox" name="skills" value="React" onChange={handleChange} />
            React
          </label>
          <label>
            <input type="checkbox" name="skills" value="Node.js" onChange={handleChange} />
            Node.js
          </label>
        </div>
        {errors.skills && <span className="error">{errors.skills}</span>}

        <input type="date" name="dob" value={user.dob} onChange={handleChange} />
        {errors.dob && <span className="error">{errors.dob}</span>}

        <button type="submit" className="btn">{isEditing ? "Update" : "Submit"}</button>
      </form>

      <UserTable users={usersList} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
