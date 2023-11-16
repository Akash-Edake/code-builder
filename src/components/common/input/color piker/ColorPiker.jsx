import { Box, Button, Menu, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { MuiTheme } from "../../../../redux/action/counterSlice";
import { MuiThemeApi } from "../../../../api/api";

function ColorPiker({ color, title, lable, defaultColor }) {
  const { userTheme, muiTheme } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [colors, setColors] = useState({ hex: color });
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setColors({ hex: color });
  }, [color]);

  const updateMuiTheme = (getColor, getTitle, getLable) => {
    let updateMuiColor = JSON.parse(JSON.stringify(muiTheme));
    const titleKey = getTitle.toLowerCase();
    const lebleKey = getLable.toLowerCase();
    if ("primary" === titleKey || "secondary" === titleKey) {
      updateMuiColor[titleKey][lebleKey][userTheme] = getColor;
    }
    if ("background" === titleKey || "text" === titleKey) {
      updateMuiColor[titleKey][userTheme][lebleKey] = getColor;
    }
    if ("divider" === titleKey) {
      updateMuiColor[titleKey][userTheme] = getColor;
    }
    dispatch(MuiTheme(updateMuiColor));
    MuiThemeApi(updateMuiColor);
  };

  const colorPicker = (e, title, lable) => {
    const newColor = {
      hex: e.hex,
      // rgb: "(" + e.rgb.r + "," + e.rgb.g + "," + e.rgb.b + "," + e.rgb.a + ")",
    };
    setColors(newColor);
    updateMuiTheme(e.hex, title, lable);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
        <div
          className="color-box2"
          style={{
            backgroundColor: colors.hex,
          }}
        ></div>
        <TextField
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          InputProps={{
            readOnly: true,
          }}
          value={colors.hex}
          label={lable}
          variant="standard"
        />
        <Button
          onClick={() => colorPicker({ hex: defaultColor }, title, lable)}
        >
          reset
        </Button>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <ChromePicker
          color={colors.hex}
          onChange={(e) => colorPicker(e, title, lable)}
          disableAlpha
          renderers={false}
        />
      </Menu>
    </>
  );
}

export default ColorPiker;
