import { Grid } from "@mui/material";
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

function Snippets({ code }) {
  return (
    <>
    <Grid item xs={12} sm={12} md={6}>
      {code.map((codesnip,index) => {
        return index%2==0 ?(
          <>
            <CopyBlock
              text={codesnip}
              language={"jsx"}
              showLineNumbers={true}
              theme={dracula}
              wrapLines={false}
              codeBlock
            />
            <br />
          </>
        ):null;
      })}
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      {code.map((codesnip,index) => {
        return index%2!==0 ?(
          <>
            <CopyBlock
              text={codesnip}
              language={"jsx"}
              showLineNumbers={true}
              theme={dracula}
              wrapLines={false}
              codeBlock
            />
            <br />
          </>
        ):null;
      })}
    </Grid>
    </>
  );
}

export default Snippets;
