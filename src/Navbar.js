import React from "react";
import { useHistory } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'



const Navbar = () => {
  const history = useHistory();
  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => history.push("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => history.push("/about")}>
            About
          </Button>
          <Button color="inherit" onClick={() => history.push("/adduser")}>
            AddUser
          </Button>
          <Button color="inherit" onClick={() => history.push("/edituser")}>
            EditUser
          </Button>
          <Button color="inherit" onClick={() => history.push("/contact")}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
