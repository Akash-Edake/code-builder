import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CardButton from "../../common/Card/CardButton";
import Snippets from "../../common/Code snippets/Snippets";
import CustBreadcrumb from "../../common/CustBreadcrumb/CustBreadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { codeApi, snippetsThemeApi } from "../../../api/api";
import { CodeStorage } from "../../../redux/action/counterSlice";
function React() {
  return (
    <>
      <CustBreadcrumb pageName="React" />

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
