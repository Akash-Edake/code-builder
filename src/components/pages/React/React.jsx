import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import CardButton from "../../common/Card/CardButton";
import CustBreadcrumb from "../../common/CustBreadcrumb/CustBreadcrumb";
import VideoCard from "../../common/VideoCard/VideoCard";
import DocCard from "../../common/docCard/DocCard";

function React() {
  const [show, setShow] = useState("videos");
  return (
    <>
      <CustBreadcrumb pageName="React" />
      <Grid container spacing={4}>
        <CardButton title="videos" onClick={setShow} />
        <CardButton title="documents" onClick={setShow} />

        <Grid item xs={12} md={6} sm={12}>
          {show == "videos" ? (
            <Typography variant="h5">videos</Typography>
          ) : (
            <Typography variant="h5">document</Typography>
          )}
          <VideoCard />
          <DocCard />
        </Grid>
      </Grid>
    </>
  );
}

export default React;
