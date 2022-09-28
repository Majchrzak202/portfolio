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
  Switch,
} from "@mui/material";
import Logo from "./../../assets/Logo.png";
import { useTheme } from "../context/ThemeContextProvider";
import { Menu as MenuIcon } from "@material-ui/icons";
import useStyles from "./Styles";
import { Link } from "react-router-dom";
import { Link as SmoothLink } from "react-scroll";

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
    <SmoothLink to="home" spy={true} smooth={true} offset={0} duration={500} id={theme} >
      Home
    </SmoothLink>,
     <SmoothLink to="about" spy={true} smooth={true} offset={-30} duration={500} id={theme} >
     About
   </SmoothLink>,
     <SmoothLink to="projects" spy={true} smooth={true} offset={50} duration={500} id={theme} >
     Projects
   </SmoothLink>,
     <SmoothLink to="resume" spy={true} smooth={true} offset={80} duration={500} id={theme} >
     Resume
   </SmoothLink>,
  ];

  return (
    <div className={classes.appbar}>
      <AppBar id={theme} position="fixed">
        <Container maxWidth="xl">
          <Toolbar className={classes.toolbar} disableGutters>
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                style={{ width: "200px", height: "50px" }}
              />
            </Link>

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
              <Switch onChange={toggleTheme}></Switch>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default React.memo(Navbar);
