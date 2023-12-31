import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Routing from "../../../routing/Routing";
import Profile from "../../common/avatar/Profile";
import SwitchMode from "../../common/buttons/theme/SwitchMode";
import MenuList from "./MenuList";
import { Fab } from "@mui/material";
import RightSideDrawer from "../../common/drawer/RightSideDrawer";
import { MuiTheme } from "../../../redux/action/counterSlice";
import { useEffect } from "react";
import { useState } from "react";
import GeolocationCoordinates from "../../common/geolocation/GeolocationCoordinates";

export default function SideBar() {
  const loginUser = JSON.parse(sessionStorage.getItem("userData"));

  const { userTheme, muiTheme } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(MuiTheme(loginUser.muiTheme));
  }, []);

  const toggleDrawer = (isOpen) => {
    setOpen(isOpen);
  };

  const muiLight = createTheme({
    palette: {
      mode: userTheme,
      primary: {
        main: muiTheme.primary.main[userTheme],
      },
      secondary: {
        main: muiTheme.secondary.main[userTheme],
      },
      error: {
        main: "#d32f2f",
      },
      background: muiTheme.background[userTheme],
      text: muiTheme.text[userTheme],
      warning: {
        main: "rgba(237,108,2,0.97)",
      },
      info: {
        main: "rgba(2,136,209,0.98)",
      },
      success: {
        main: "rgba(46,125,50,0.97)",
      },
      divider: muiTheme.divider[userTheme],
    },
    typography: {
      h1: {
        fontSize: "4.8rem",
      },
      h2: {
        fontSize: "3.9rem",
      },
    },
  });

  return (
    <ThemeProvider theme={muiLight}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" color="inherit" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              //   color="inherit"
              aria-label="open drawer"
              onClick={() => toggleDrawer(true)}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Code Builder
            </Typography>
            <SwitchMode />

            <GeolocationCoordinates />
            {/* ------------- profile avatar -------------- */}
            <Profile />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" className={!open ? "hide" : ""} open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={() => toggleDrawer(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />

          <List component="nav" style={{ position: "none" }}>
            <MenuList onClick={toggleDrawer} sideBarIsOpen={open} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            // width:'98vw',
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Grid sx={{ m: 2 }}>
            <Routing />
          </Grid>
          <RightSideDrawer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));
