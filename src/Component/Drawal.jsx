import {
  IconButton,
  Box,
  InputBase,
  List,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {NavLink} from 'react-router-dom';
import './Drawal.css'
import React, { useState } from "react";


const Drawal = () => {
  const [openDrawal, setOpenDrawal] = useState(false);
  const handleOpen = () => setOpenDrawal(!openDrawal);
  const handleClose = () => setOpenDrawal(false);

  return (
    <React.Fragment>
      <SwipeableDrawer open={openDrawal} onClose={handleClose}>
        <IconButton onClick={handleClose}>
          <CloseIcon
            sx={{
              color: "green",
              fontSize: "3rem",
              position: "absolute",
              top: 5,
              left: 150,
              zIdex: 999,
            }}
          />
        </IconButton>
        <List className="mmmm" sx={{ mt: "30px" }}>
          <ListItemButton  onClick={handleClose}>
            <ListItemText> <NavLink to='/' className='menu-menu'> Home</NavLink>  <Divider /></ListItemText>
          </ListItemButton>
          <ListItemButton onClick={handleClose}>
            <ListItemText><NavLink to='/designs' className='menu-menu'> Designs</NavLink>  <Divider /></ListItemText>
          </ListItemButton>
          <ListItemButton  onClick={handleClose}>
            <ListItemText><NavLink to='/contact' className='menu-menu'> Contact Us </NavLink> <Divider /></ListItemText>
          </ListItemButton>
          <ListItemButton onClick={handleClose}>
            <ListItemText><NavLink to='/aboutus' className='menu-menu'> About Us</NavLink>  <Divider /></ListItemText>
          </ListItemButton>
     
          <ListItemText>
            <Box
              sx={{
                mx: "auto",
                width: "80%",
                background: "#F4F6F6",
                borderRadius: "10px",
                border: "1px solid green ",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SearchIcon sx={{ color: "#02933d", background: "#EBEDEF " }} />
              <InputBase placeholder="Search…" />
            </Box>
          </ListItemText>
        </List>
      </SwipeableDrawer>

      <IconButton onClick={handleOpen}>
        <MenuIcon sx={{ color: "#02933d", fontSize: "1.8rem" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default Drawal;
