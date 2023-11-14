import CssIcon from "@mui/icons-material/Css";
import HdrAutoIcon from "@mui/icons-material/HdrAuto";
import HtmlIcon from "@mui/icons-material/Html";
import JavascriptIcon from "@mui/icons-material/Javascript";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider, Tooltip } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Fade from "@mui/material/Fade";

function MenuList({ onClick }) {
  const navigate = useNavigate();
  const handelLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <>
      {sideBarList.map((list) => {
        return (
          <Tooltip
            key={list.title}
            title={list.title}
            arrow
            placement="right"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <NavLink
              to={list.href}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              onClick={() => onClick(false)}
            >
              <ListItemButton className="onhover1">
                <ListItemIcon>{list.icon}</ListItemIcon>
                <ListItemText primary={list.title} />
              </ListItemButton>
            </NavLink>
          </Tooltip>
        );
      })}
      <Tooltip
        title="Log out"
        arrow
        placement="right"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
      >
        <ListItemButton onClick={() => handelLogout()} className="onhover1">
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Log out" style={{ color: "#0000EE" }} />
        </ListItemButton>
      </Tooltip>
      <Divider sx={{ my: 1 }} />
    </>
  );
}

export default MenuList;

const sideBarList = [
  {
    href: "/",
    icon: (
      <svg
        width="24px"
        height="24px"
        viewBox="-10.5 -9.45 21 18.9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="text-sm me-0 w-10 h-10 text-link dark:text-link-dark flex origin-center transition-all ease-in-out"
      >
        <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
        <g stroke="currentColor" stroke-width="1" fill="none">
          <ellipse rx="10" ry="4.5"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
        </g>
      </svg>
    ),
    title: "React",
  },
  {
    href: "/angular",
    icon: <HdrAutoIcon />,
    title: "Angular",
  },
  {
    href: "/javaScript",
    icon: <JavascriptIcon />,
    title: "JavaScript",
  },
  {
    href: "/html",
    icon: <HtmlIcon />,
    title: "HTML",
  },
  {
    href: "/css",
    icon: <CssIcon />,
    title: "CSS",
  },
];
