import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import React from "react";
import Drawal from "../Drawal";
import Search from "../Search/Search";
import "./Mobile.css";
import { Link } from "react-router-dom";

const MobileApp = ({ match }) => {
  return (
    <AppBar position="fixed" sx={{ background: "white" }}>
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "white",
          }}
        >
          <Drawal />

          <div className="logo-name">

            <IconButton className="logo-icon">
              <ViewCarouselIcon />
            </IconButton>
            <div className="logo">
            <Link to='/'> <h3> HEYWHY</h3> </Link>
            
            </div>


          </div>
         

          <Search />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MobileApp;
