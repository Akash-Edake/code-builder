import { Grid, Typography } from "@mui/material";
function VideoCard() {
  return (
    <>
      <Grid
        xs={12}
        md={12}
        sm={12}
        sx={{ mt: 1, mb: 1 }}
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        alignItems={"end"}
      >
        <Typography variant="h5" sx={{ ml: 1 }}>
          videos
        </Typography>
        {/* <Autocomplete
          value={theme}
          onChange={(event, newValue) => {
            setTheme(newValue);
            loginUser.snippetsTheme[userTheme] = newValue;
            sessionStorage.setItem("userData", JSON.stringify(loginUser));
            snippetsThemeApi(loginUser?._id, userTheme, newValue);
          }}
          options={snippetsTheme}
          sx={{ width: 200, mr: 1 }}
          renderInput={(params) => (
            <TextField {...params} label="snippets theme" variant="standard" />
          )}
        /> */}
      </Grid>
    </>
  );
}

export default VideoCard;
