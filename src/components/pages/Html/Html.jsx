import CardButton from "../../common/Card/CardButton";
import CustBreadcrumb from "../../common/CustBreadcrumb/CustBreadcrumb";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
function Html() {
  const [show, setShow] = useState("videos");
  return (
    <>
      <CustBreadcrumb pageName="Html" />
      <Grid container spacing={4}>
        <CardButton title="videos" onClick={setShow} />
        <CardButton title="documents" onClick={setShow} />
        <Grid item xs={6}>
          {show == "videos" ? (
            <Typography variant="h5">videos</Typography>
          ) : (
            <Typography variant="h5">document</Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Html;
