import React, { useState } from "react";
import {
  Menu,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  MenuItem,
} from "@mui/material";

import ReactSwitch from "react-switch";
import { useTheme } from "../context/ThemeContextProvider";

import { Menu as MenuIcon } from "@material-ui/icons";
import { AllInclusive } from "@material-ui/icons";
import useStyles from "./Styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const classes = useStyles();
  const { theme, toggleTheme } = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [
    <Link id={theme} to="/">
      Home
    </Link>,
    <Link id={theme} to="/about">
      About
    </Link>,
    <Link id={theme} to="/projects">
      Projects
    </Link>,
    <Link id={theme} to="/resume">
      Resume
    </Link>,
  ];

  return (
    <div className={classes.appbar}>
      <AppBar  id={theme}  position="fixed">
        <Container maxWidth="xl">
          <Toolbar className={classes.toolbar} disableGutters>
            <AllInclusive sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Link  to="/">
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1.5rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                ML.DEV
              </Typography>
            </Link>

            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1.5rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ML.DEV
            </Typography>

            <div className={classes.grow} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={Math.random()}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block", color: "yellow" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                className={classes.mobilemenu}
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={Math.random()} onClick={handleCloseNavMenu}>
                    <Typography
                      style={{ textDecoration: "none" }}
                      textAlign="center"
                      variant="inherit"
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box>
              <ReactSwitch onChange={toggleTheme} checked={theme === "Light"} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default Navbar;
