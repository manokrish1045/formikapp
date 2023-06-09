import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import Button from '@mui/material/Button'
const Home = () => {
  const history = useHistory();
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(
      `https://60decafeabbdd9001722d05c.mockapi.io/users/${id}`
    );
    loadUsers();
  };

  const loadUsers = async () => {
    const result = await axios.get(
      `https://60decafeabbdd9001722d05c.mockapi.io/users`
    );
    setUser(result.data);
  };
  return (
    <div className="home-page">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th >#</th>
            <th >Name</th>
            <th >User Name</th>
            <th >Email Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th >{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <Button
                variant="contained"
                onClick={() => history.push(`/user/${user.id}`)}
              >
                View
              </Button>
              {/* <Link class="btn btn-outline-primary mr-2" to={`./edituser/${user.id}`}>Edit</Link> */}
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push(`/edituser/${user.id}`)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </Button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
