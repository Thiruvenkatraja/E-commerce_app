import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar({ open }) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const User = JSON.parse(localStorage.getItem("currentUser"));

  let navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("currentUser");
    let path = "/login";
    navigate(path);
    // window.location.href = "/login";
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ flexGrow: 1, background: "#03001C" }}>
        <Toolbar>
          {/* {open===false ? <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,color:'White',fontSize:'Large'}}
            onClick={() =>{
                
                collapseSidebar()
            }}
          >
            <MenuIcon/>
          </IconButton>:''} */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Righteous",
              color: "White",
            }}
          >
            <i
              className={open === false ? "fa-sharp fa-solid fa-seedling" : ""}
            ></i>
          </Typography>

          {User ? (
            <div>
              <Button onClick={handleMenu} sx={{color:'white',fontFamily:'Righteous'}} variant="outlined">
                {User.username}
              </Button>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={Logout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography
                sx={{ fontSize: "1.3rem", fontFamily: "Righteous" }}
                component="h5"
                variant="h5"
              >
                Log-in
              </Typography>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
