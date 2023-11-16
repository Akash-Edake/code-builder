import SettingsIcon from "@mui/icons-material/Settings";
import { Fab } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import React from "react";
import DrawerAccordion from "../accordion/drawer/DrawerAccordion";
function RightSideDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };
  return (
    <div>
      <Fab
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
        aria-label={"Add"}
        color="secondary"
        size="small"
        onClick={toggleDrawer("right", true)}
      >
        <SettingsIcon fontSize="small" />
      </Fab>

      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <div style={{ marginTop: "5em", width: "25em" }}>
          <DrawerAccordion />
        </div>
        <Fab
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
          }}
          variant="extended"
          aria-label={"Add"}
          color="secondary"
          size="small"
          onClick={toggleDrawer("right", false)}
        >
          close
        </Fab>
      </Drawer>
    </div>
  );
}

export default RightSideDrawer;
