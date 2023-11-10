import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Switch from "@mui/material/Switch";
import {
  Avatar,
  Button,
  FormControlLabel,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import Routing from "../../../routing/Routing";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function SideBar() {
  const loginUser = JSON.parse(localStorage.getItem("userData")) || null;
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState(false);
  const [profileImage, setProfileImage] = React.useState(loginUser?.profilePic);
  React.useEffect(() => {
    getTheme("").then((data) => setMode(data === "dark"));
    getProfilePic(loginUser._id, "").then((data) => {
      setProfileImage(data);
      loginUser.profilePic = data;
      localStorage.setItem("userData", JSON.stringify(loginUser));
    });
  }, []);
  const getTheme = async (themeValue) => {
    const getThemeApi = await axios({
      method: "post",
      url: import.meta.env.VITE_BASE_URL+"/user/theme",
      headers: {},
      data: {
        id: loginUser?._id,
        theme: themeValue,
      },
    });
    return getThemeApi.data.theme;
  };
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const darkTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });
  const handelChangeMode = (e) => {
    const { checked } = e.target;
    setMode(checked);
    getTheme(checked ? "dark" : "light");
  };
  const handelLogout = () => {
    localStorage.clear();
    location.reload();
  };

  const getProfilePic = async (id, picBase64) => {
    const getProfilePicApi = await axios({
      method: "post",
      url: import.meta.env.VITE_BASE_URL+"/user/profilePic",
      headers: {},
      data: {
        id: id,
        profilePic: picBase64,
      },
    });
    return getProfilePicApi.data.profilePic;
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // The result will be a base64 encoded image string
        // const base64Image = reader.result;
        // setProfileImage(base64Image);
        resizeFile(reader.result, (resizedImage) => {
          setProfileImage(resizedImage);
          loginUser.profilePic = resizedImage;
          localStorage.setItem("userData", JSON.stringify(loginUser));
          getProfilePic(loginUser._id, resizedImage);
          // You can upload the base64-encoded image using your API function here
          // createImage(resizedImage);
        });
      };

      // Read the image file as a data URL
      reader.readAsDataURL(file);
    }
  };

  const resizeFile = (base64, callback) => {
    const MAX_FILE_SIZE_BYTES = 50000; // 50KB

    const img = new Image();
    img.src = base64;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const MAX_WIDTH = 800;
      const MAX_HEIGHT = 800;

      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);

      const resizedBase64 = canvas.toDataURL("image/jpeg"); // Adjust format as needed

      if (resizedBase64.length <= MAX_FILE_SIZE_BYTES) {
        callback(resizedBase64);
      } else {
        console.error("Image size exceeds 50KB");
        alert("Image size exceeds 50KB");
        // Handle error or inform the user
      }
    };
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" color="secondary" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              //   color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
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
            <IconButton color="inherit">
              {/* <Badge badgeContent={4} color="secondary"> */}
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    sx={{ m: 1 }}
                    checked={mode}
                    onClick={handelChangeMode}
                  />
                }
                label="mode"
              />
              {/* </Badge> */}
            </IconButton>
            <label for="file-upload">
              <Avatar alt="" src={profileImage} />
            </label>
            <input
              style={{ display: "none" }}
              type="file"
              name="upload profile pic"
              id="file-upload"
              onChange={handleImageChange}
            />
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
            className="mob-view"
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <NavLink
              to="/react"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="React" />
              </ListItemButton>
            </NavLink>
            <NavLink
              to="/angular"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <JavascriptIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Angular"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                />
              </ListItemButton>
            </NavLink>
            <NavLink
              to="/javaScript"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <JavascriptIcon />
                </ListItemIcon>
                <ListItemText
                  primary="JavaScript"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                />
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/html"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <CodeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="HTML"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                />
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/css"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <CssIcon />
                </ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItemButton>
            </NavLink>
            <Button onClick={handelLogout}>
              <ListItemButton>
                <ListItemIcon>
                  <CssIcon />
                </ListItemIcon>
                <ListItemText primary="logOut" />
              </ListItemButton>
            </Button>
            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
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
          {/* <Container sx={{ mt: 4, mb: 4,ml:0,mr:0 }}> */}
          <Grid sx={{ m: 2 }}>
            <Routing />
          </Grid>
          {/* </Container> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

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
