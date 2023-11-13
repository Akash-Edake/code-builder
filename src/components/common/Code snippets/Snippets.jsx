import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
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

function Snippets({ code, theme }) {
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
  return (
    <>
      <Grid item xs={12} sm={12} md={6}>
        {code.map((codesnip, index) => {
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
                    {codesnip.title}
                  </Typography>
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
                    {codesnip.title}
                  </Typography>
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
