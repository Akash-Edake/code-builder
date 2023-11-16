import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ColorPiker from "../../input/color piker/ColorPiker";
import { useSelector } from "react-redux";

function DrawerAccordion() {
  const { userTheme, muiTheme } = useSelector((state) => state.counter);

  const [expanded, setExpanded] = useState(false);

  const sideDrower = [
    {
      title: "Background",
      content: [
        {
          label: "Default",
          color: muiTheme.background[userTheme].default,
          defaultColor: userTheme==="dark"?"black":"#fff",
        },
        {
          label: "Paper",
          color: muiTheme.background[userTheme].paper,
          defaultColor: userTheme==="dark"?"black":"#fff",
        },
      ],
    },
    {
      title: "Text",
      content: [
        {
          label: "Primary",
          color: muiTheme.text[userTheme].primary,
          defaultColor: userTheme==="dark"?"#fff":"rgba(0,0,0,0.89)"
        },
        {
          label: "Secondary",
          color: muiTheme.text[userTheme].secondary,
          defaultColor: userTheme==="dark"?"#fff":"rgba(0, 0, 0, 0.6)"
        },
        {
          label: "Disabled",
          color: muiTheme.text[userTheme].disabled,
          defaultColor: userTheme==="dark"?"#fff":"rgba(0,0,0,0.39)"
        },
        {
          label: "Hint",
          color: muiTheme.text[userTheme].hint,
          defaultColor: userTheme==="dark"?"#22194D":"#22194D"
        },
      ],
    },
    {
      title: "primary",
      content: [
        {
          label: "Main",
          color: muiTheme.primary.main[userTheme],
          defaultColor: userTheme==="dark"?"#1976d2":"#1976d2",
        },
      ],
    },
    {
      title: "secondary",
      content: [
        {
          label: "Main",
          color: muiTheme.secondary.main[userTheme],
          defaultColor: userTheme==="dark"?"#9c27b0":"#9c27b0"
        },
      ],
    },
    {
      title: "Divider",
      content: [
        {
          label: "Divider",
          color: muiTheme.divider[userTheme],
          defaultColor: userTheme==="dark"?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.12)"
        },
      ],
    },
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return sideDrower.map((main) => {
    return (
      <Accordion
        key={main}
        expanded={expanded === main.title}
        onChange={handleChange(main.title)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {main.title || "Loading..."}
          </Typography>
          <Typography sx={{ color: "text.secondary", display: "flex" }}>
            {main.content.map((sub) => {
              return (
                <div
                  key={sub.label}
                  className="color-box1"
                  style={{
                    backgroundColor: sub.color,
                  }}
                ></div>
              );
            })}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {main.content.map((sub) => {
            return (
              <ColorPiker
                key={sub.label}
                defaultColor={sub.defaultColor}
                color={sub.color}
                title={main.title}
                lable={sub.label}
              />
            );
          })}
        </AccordionDetails>
      </Accordion>
    );
  });
}

export default DrawerAccordion;
