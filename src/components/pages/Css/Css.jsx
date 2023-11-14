import CardButton from "../../common/Card/CardButton";
import CustBreadcrumb from "../../common/CustBreadcrumb/CustBreadcrumb";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
function Css() {
  
  return (
    <>
      <CustBreadcrumb pageName="Css" />
      <Grid container spacing={1}>
        <CardButton
          titles={["code", "videos", "documents"]}
          componentType="css"
        />
      </Grid>
    </>
  );
}

export default Css;
