import CardButton from "../../common/Card/CardButton";
import CustBreadcrumb from "../../common/CustBreadcrumb/CustBreadcrumb";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
function Html() {
  return (
    <>
      <CustBreadcrumb pageName="Html" />
      <Grid container spacing={1}>
        <CardButton
          titles={["code", "videos", "documents"]}
          componentType="html"
        />
      </Grid>
    </>
  );
}

export default Html;
