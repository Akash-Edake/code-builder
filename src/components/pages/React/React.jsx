import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CardButton from "../../common/Card/CardButton";
import Snippets from "../../common/Code snippets/Snippets";
import CustBreadcrumb from "../../common/CustBreadcrumb/CustBreadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { codeApi, snippetsThemeApi } from "../../../api/api";
import { CodeStorage } from "../../../redux/action/counterSlice";

const options = ["Option 1", "Option 2"];
function React() {
  const loginUser = JSON.parse(sessionStorage.getItem("userData")) || null;

  const { userTheme, snippetsTheme, userData, codeStorage } = useSelector(
    (state) => state.counter
  );

  const dispatch = useDispatch();

  const [show, setShow] = useState("code");
  const [value, setValue] = useState("dracula");
  const [demoCode, setDemoCode] = useState([]);

  useEffect(() => {
    if (codeStorage.length > 1) {
      setDemoCode(codeStorage);
      return;
    }
    codeApi()
      .then((data) => {
        setDemoCode(data);
        dispatch(CodeStorage(data));
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setValue(loginUser.snippetsTheme[userTheme]);
  }, [userTheme]);

  const tab = {
    code: (
      <>
        <Snippets code={demoCode} theme={value} />
      </>
    ),
    videos: "",
    documents: "",
  };
  return (
    <>
      <CustBreadcrumb pageName="React" />

      <Grid container spacing={1}>
        <CardButton title="code" onClick={setShow} />
        <CardButton title="videos" onClick={setShow} />
        <CardButton title="documents" onClick={setShow} />
        <Grid
          xs={12}
          md={12}
          sm={6}
          sx={{ mt: 4, mb: 1 }}
          display={"flex"}
          alignItems={"end"}
        >
          <Typography variant="h5" sx={{ mr: 5, ml: 1 }}>
            {show}
          </Typography>
          {show === "code" && (
            <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
                loginUser.snippetsTheme[userTheme] = newValue;
                sessionStorage.setItem("userData", JSON.stringify(loginUser));
                snippetsThemeApi(loginUser?._id, userTheme, newValue);
              }}
              options={snippetsTheme}
              sx={{ width: 200 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="snippets theme"
                  variant="standard"
                />
              )}
            />
          )}
        </Grid>

        {tab[show]}
      </Grid>
    </>
  );
}

export default React;
