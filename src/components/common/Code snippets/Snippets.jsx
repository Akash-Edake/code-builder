import {
  Autocomplete,
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  CopyBlock,
  a11yDark,
  a11yLight,
  anOldHope,
  androidstudio,
  arta,
  atomOneDark,
  atomOneLight,
  codepen,
  dracula,
  far,
  github,
  googlecode,
  hopscotch,
  hybrid,
  irBlack,
  monoBlue,
  monokaiSublime,
  monokai,
  nord,
  noctisViola,
  obsidian,
  ocean,
  paraisoDark,
  paraisoLight,
  pojoaque,
  purebasic,
  railscast,
  rainbow,
  shadesOfPurple,
  solarizedDark,
  solarizedLight,
  sunburst,
  tomorrowNightBlue,
  tomorrowNightBright,
  tomorrowNightEighties,
  tomorrowNight,
  tomorrow,
  vs2015,
  xt256,
  zenburn,
} from "react-code-blocks";
import { codeApi, snippetsThemeApi } from "../../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { CodeStorage } from "../../../redux/action/counterSlice";

let snippetTheme = {
  a11yDark,
  a11yLight,
  anOldHope,
  androidstudio,
  arta,
  atomOneDark,
  atomOneLight,
  codepen,
  dracula,
  far,
  github,
  googlecode,
  hopscotch,
  hybrid,
  irBlack,
  monoBlue,
  monokaiSublime,
  monokai,
  nord,
  noctisViola,
  obsidian,
  ocean,
  paraisoDark,
  paraisoLight,
  pojoaque,
  purebasic,
  railscast,
  rainbow,
  shadesOfPurple,
  solarizedDark,
  solarizedLight,
  sunburst,
  tomorrowNightBlue,
  tomorrowNightBright,
  tomorrowNightEighties,
  tomorrowNight,
  tomorrow,
  vs2015,
  xt256,
  zenburn,
};
function Snippets({ fileType }) {
  const loginUser = JSON.parse(sessionStorage.getItem("userData")) || null;

  const { userTheme, snippetsTheme, codeStorage } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();

  const [theme, setTheme] = useState("dracula");
  const [code, setCode] = useState([]);
  const [isDataAvailable, setIsDataAvailable] = useState("");

  useEffect(() => {
    if (codeStorage.length > 1) {
      const filterData = codeStorage.filter(
        (data) => data.fileType == fileType
      );
      setCode(filterData);
      setIsDataAvailable(filterData.length ? "" : "Data Not Found");
      return;
    }
    codeApi()
      .then((data) => {
        const filterData = data.filter((data) => data.fileType == fileType);
        setCode(filterData);
        setIsDataAvailable(filterData.length ? "" : "Data Not Found");
        dispatch(CodeStorage(data));
        console.log(filterData);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setTheme(loginUser.snippetsTheme[userTheme]);
  }, [userTheme]);
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
          code
        </Typography>
        <Autocomplete
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
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        {code.length ? (
          code.map((codesnip, index) => {
            return index % 2 == 0 ? (
              <>
                <Card
                  variant="outlined"
                  sx={{
                    boxShadow: 2,
                    borderRadius: 2,
                  }}
                >
                  <CardActionArea>
                    <Typography
                      gutterBottom
                      variant="body1"
                      sx={{ ml: 2, mt: 1 }}
                      component="div"
                    >
                      {index + 1}. {codesnip.title}
                    </Typography>
                    <Divider />
                    <CopyBlock
                      text={codesnip.content}
                      language={"jsx"}
                      showLineNumbers={true}
                      theme={snippetTheme[theme || "dracula"]}
                      wrapLines={false}
                      codeBlock
                    />
                  </CardActionArea>
                </Card>
                <br />
              </>
            ) : null;
          })
        ) : (
          <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
            {isDataAvailable ? (
              isDataAvailable
            ) : (
              <CircularProgress color="success" />
            )}
          </Stack>
        )}
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        {code.map((codesnip, index) => {
          return index % 2 !== 0 ? (
            <>
              <Card
                variant="outlined"
                sx={{
                  boxShadow: 2,
                  borderRadius: 2,
                }}
              >
                <CardActionArea>
                  <Typography
                    gutterBottom
                    variant="body1"
                    sx={{ ml: 2, mt: 1 }}
                    component="div"
                  >
                    {index + 1}. {codesnip.title}
                  </Typography>
                  <Divider />
                  <CopyBlock
                    text={codesnip.content}
                    language={"jsx"}
                    showLineNumbers={true}
                    theme={snippetTheme[theme || "dracula"]}
                    wrapLines={false}
                    codeBlock
                  />
                </CardActionArea>
              </Card>
              <br />
            </>
          ) : null;
        })}
      </Grid>
    </>
  );
}

export default Snippets;
