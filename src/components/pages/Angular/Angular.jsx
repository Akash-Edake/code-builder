import CardButton from "../../common/Card/CardButton";
import CustBreadcrumb from "../../common/CustBreadcrumb/CustBreadcrumb";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
function Angular() {
  return (
    <>
      <CustBreadcrumb pageName="Angular" />
      <Grid container spacing={1}>
        <CardButton
          titles={["code", "videos", "documents"]}
          componentType="ts"
        />
      </Grid>
    </>
  );
}

export default Angular;
