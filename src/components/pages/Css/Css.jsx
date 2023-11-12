import CardButton from "../../common/Card/CardButton";
import CustBreadcrumb from "../../common/CustBreadcrumb/CustBreadcrumb";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
function Css() {
  const [show, setShow] = useState("videos");
  return (
    <>
      <CustBreadcrumb pageName="Css" />
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

export default Css;
