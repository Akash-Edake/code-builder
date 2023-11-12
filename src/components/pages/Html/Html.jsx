import CardButton from "../../common/Card/CardButton";
import CustBreadcrumb from "../../common/CustBreadcrumb/CustBreadcrumb";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
function Html() {
  const [show, setShow] = useState("videos");
  return (
    <>
      <CustBreadcrumb pageName="Html" />
      <Grid container spacing={1}>
        <CardButton title="videos" onClick={setShow} />
        <CardButton title="documents" onClick={setShow} />
        <Grid xs={12} md={12} sm={6}>
          <br />
          <Typography variant="h5">{show}</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Html;
