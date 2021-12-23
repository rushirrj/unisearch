import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function NavBar() {
  const date = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

   return dd + "/" + mm + "/" + yyyy;
  };
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar style={{backgroundColor:"#3f51b5",color:"white"}}>
          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AccountBalanceIcon />
            <Typography>UniSearch</Typography>
          </IconButton>
          

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rushikesh 
          </Typography>
          <Button color="inherit">{date()}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
