import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SwitchMode from "../buttons/theme/SwitchMode";
import { AccountCircle } from "@mui/icons-material";
import { Fab, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import SettingsIcon from "@mui/icons-material/Settings";
function RightSideDrawer() {
  const { userTheme, muiTheme } = useSelector((state) => state.counter);

  const [state, setState] = React.useState({
    right: false,
  });
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Background
              </Typography>
              <Typography sx={{ color: "text.secondary", display: "flex" }}>
                <div
                  className="color-box1"
                  style={{
                    backgroundColor: muiTheme.background[userTheme].default,
                  }}
                ></div>
                <div
                  className="color-box1"
                  style={{
                    backgroundColor: muiTheme.background[userTheme].paper,
                  }}
                ></div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <div
                  className="color-box2"
                  style={{
                    backgroundColor: muiTheme.background[userTheme].default,
                  }}
                ></div>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={muiTheme.background[userTheme].default}
                  label="Default"
                  variant="standard"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end", mt: 1 }}>
                <div
                  className="color-box2"
                  style={{
                    backgroundColor: muiTheme.background[userTheme].paper,
                  }}
                ></div>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={muiTheme.background[userTheme].paper}
                  label="Paper"
                  variant="standard"
                />
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>Text</Typography>
              <Typography sx={{ color: "text.secondary", display: "flex" }}>
                <Typography
                  sx={{ border: "1px solid " }}
                  className="color-box1"
                  style={{ backgroundColor: muiTheme.text[userTheme].primary }}
                ></Typography>
                <div
                  className="color-box1"
                  style={{
                    backgroundColor: muiTheme.text[userTheme].secondary,
                  }}
                ></div>
                <div
                  className="color-box1"
                  style={{ backgroundColor: muiTheme.text[userTheme].disabled }}
                ></div>
                <div
                  className="color-box1"
                  style={{ backgroundColor: muiTheme.text[userTheme].hint }}
                ></div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <div
                  className="color-box2"
                  style={{ backgroundColor: muiTheme.text[userTheme].primary }}
                ></div>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={muiTheme.text[userTheme].primary}
                  label="primary"
                  variant="standard"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end", mt: 1 }}>
                <div
                  className="color-box2"
                  style={{
                    backgroundColor: muiTheme.text[userTheme].secondary,
                  }}
                ></div>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={muiTheme.text[userTheme].secondary}
                  label="secondary"
                  variant="standard"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end", mt: 1 }}>
                <div
                  className="color-box2"
                  style={{ backgroundColor: muiTheme.text[userTheme].disabled }}
                ></div>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={muiTheme.text[userTheme].disabled}
                  label="Disabled"
                  variant="standard"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end", mt: 1 }}>
                <div
                  className="color-box2"
                  style={{ backgroundColor: muiTheme.text[userTheme].hint }}
                ></div>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={muiTheme.text[userTheme].hint}
                  label="Hint"
                  variant="standard"
                />
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "primary"}
            onChange={handleChange("primary")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                primary
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                <div
                  className="color-box1"
                  style={{ backgroundColor: muiTheme.primary.main[userTheme] }}
                ></div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <div
                  className="color-box2"
                  style={{ backgroundColor: muiTheme.primary.main[userTheme] }}
                ></div>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={muiTheme.primary.main[userTheme]}
                  label="Main"
                  variant="standard"
                />
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "secondary"}
            onChange={handleChange("secondary")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                secondary
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                <div
                  className="color-box1"
                  style={{
                    backgroundColor: muiTheme.secondary.main[userTheme],
                  }}
                ></div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <div
                  className="color-box2"
                  style={{
                    backgroundColor: muiTheme.secondary.main[userTheme],
                  }}
                ></div>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={muiTheme.secondary.main[userTheme]}
                  label="Main"
                  variant="standard"
                />
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "divider"}
            onChange={handleChange("divider")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                divider
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                <div
                  className="color-box1"
                  style={{ backgroundColor: muiTheme.divider[userTheme] }}
                ></div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <div
                  className="color-box2"
                  style={{ backgroundColor: muiTheme.divider[userTheme] }}
                ></div>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  value={muiTheme.divider[userTheme]}
                  label="Divider"
                  variant="standard"
                />
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
      </Drawer>
    </div>
  );
}

export default RightSideDrawer;
