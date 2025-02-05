import React from "react";

function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="table-container">
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Skills</th>
              <th>DOB</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.skills.join(", ")}</td>
                <td>{user.dob}</td>
                <td>{user.city}</td>
                <td>
                  <button className="edit-btn" onClick={() => onEdit(index)}>Edit</button>
                  <button className="delete-btn" onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserTable;
