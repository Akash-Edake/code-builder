import { Grid } from "@mui/material";
import CardButton from "../../common/Card/CardButton";
import CustBreadcrumb from "../../common/CustBreadcrumb/CustBreadcrumb";
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
