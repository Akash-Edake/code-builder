import CardButton from "../../common/Card/CardButton";
import CustBreadcrumb from "../../common/CustBreadcrumb/CustBreadcrumb";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";

function JavaScript() {
  return (
    <>
      <CustBreadcrumb pageName="JavaScript" />
      <Grid container spacing={1}>
        <CardButton
          titles={["code", "videos", "documents"]}
          componentType="js"
        />
      </Grid>
    </>
  );
}

export default JavaScript;
