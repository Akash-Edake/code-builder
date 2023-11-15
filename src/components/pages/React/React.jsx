import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CardButton from "../../common/Card/CardButton";
import Snippets from "../../common/Code snippets/Snippets";
import CustBreadcrumb from "../../common/CustBreadcrumb/CustBreadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { codeApi, snippetsThemeApi } from "../../../api/api";
import { CodeStorage } from "../../../redux/action/counterSlice";
import { ChromePicker } from "react-color";
import RightSideDrawer from "../../common/drawer/RightSideDrawer";
function React() {
  const [colors, setColors] = useState(null);
  const colorPicker = (e) => {
    const newColor = {
      hex: e.hex,
      rgb: "(" + e.rgb.r + "," + e.rgb.g + "," + e.rgb.b + "," + e.rgb.a + ")",
    };
    setColors(newColor);
  };
  // console.log(colors.hex, colors.rgb)

  return (
    <>
      <CustBreadcrumb pageName="React" />
      <div style={{ display: "none" }}>
        <ChromePicker
        style={{ display: "none" }}
          color={colors !== null && colors.hex}
          onChange={(e) => colorPicker(e)}
          disableAlpha
          renderers={false}
        />
      </div>
      <Grid container spacing={1}>
        <CardButton
          titles={["code", "videos", "documents"]}
          componentType="jsx"
        />
      </Grid>
    </>
  );
}

export default React;
