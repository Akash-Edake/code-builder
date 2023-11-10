import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import CardButton from "../../common/Card/CardButton";
import CustBreadcrumb from "../../common/CustBreadcrumb/CustBreadcrumb";
import VideoCard from "../../common/VideoCard/VideoCard";
import DocCard from "../../common/docCard/DocCard";
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
function React() {
  const [show, setShow] = useState("videos");
  const [codeTheme, setCodeTheme] = useState("dracula");

  let codetheme = [
    "a11yDark",
    "a11yLight",
    "anOldHope",
    "androidstudio",
    "arta",
    "atomOneDark",
    "atomOneLight",
    "codepen",
    "dracula",
    "far",
    "github",
    "googlecode",
    "hopscotch",
    "hybrid",
    "irBlack",
    "monoBlue",
    "monokaiSublime",
    "monokai",
    "nord",
    "noctisViola",
    "obsidian",
    "ocean",
    "paraisoDark",
    "paraisoLight",
    "pojoaque",
    "purebasic",
    "railscast",
    "rainbow",
    "shadesOfPurple",
    "solarizedDark",
    "solarizedLight",
    "sunburst",
    "tomorrowNightBlue",
    "tomorrowNightBright",
    "tomorrowNightEighties",
    "tomorrowNight",
    "tomorrow",
    "vs2015",
    "xt256",
    "zenburn",
  ];

  const demoCode = [
    `var array =[0,1,1,0,1,1,0]
console.log("zero",array.filter(e=>e===0))
console.log("one",array.filter(e=>e===1))
let abc = {...array.filter(e=>e===0)}
console.log(abc)`,
    `function addNum(data) {
  const NuminString = "" + data;
  const stringinNUm = NuminString.split("").map((e) => parseInt(e));
  const final = stringinNUm.reduce((a, b) => a + b);
  if (final > 9) {
    addNum(final);
  } else {
    console.log("final", final);
  }
}
addNum(5421);`,
    `const a = ["red", "yellow", "mango", "green"];
let newarray = [];
a.map((item) => {
  let b = item.split("");
  let c = b.reverse();
  let d = c.join();
  let e = d.replace(/,/g, "");
  newarray.push(e);
});
console.log(newarray.reverse()); //[ 'neerg', 'ognam', 'wolley', 'der' ]`,
    `let person = {
  name: "akash",
  tech: "react-dev",
  details: function () {
    console.log('hi, im {this.name} and work on {this.tech}');
  },
};
person.details();`,
    `import { useState } from "react";
export default function App() {
  const error = "ur age is less than 18";
  const error1 = "ur age is more than 18";
  const [text, settext] = useState("");
  const [isError, setError] = useState(false);

  const fun1 = (e) => {
    console.log(e.target.value);
    settext(e.target.value);
    if (e.target.value < 18) {
      setError(true);
    }
  };
  return (
    < div className="App">
      < input value={text} onChange={fun1} />
      {isError ? error : error1}
    </ div>
  );
}`,
    `const a=['red','yellow','mango','green']
let newarray=[]
a.map((item)=>{
let b=item.split('')
let c= b.reverse()
let d = c.join()
let e= d.replace (/,/g, "")
newarray.push(e)
})
console.log(newarray.reverse())//[ 'neerg', 'ognam', 'wolley', 'der' ]`,
    `let a = "Tushar Sagar Frank Tedd Mark Rahul Rohan Rohit Amir Akash";
let split = a.toLowerCase().split(" ");

for (let i = 0; i < split.length; i++) {
  var b = split[i].includes("d");
  if (b == true) {
    var result = i;
  }

  if (b == true) {
    var sample = split[result];
    function repeatFinder(str) {
      let repeat = "";
      for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
          if (
            str.charAt(i) == str.charAt(j) &&
            repeat.indexOf(str.charAt(j)) == -1
          ) {
            repeat += str;
          }
        }
      }
      return repeat;
    }
    if (repeatFinder(sample).length > 0) {
      console.log(repeatFinder(sample));
    }
  }
}`,
  ];
  const defaultProps = {
    options: codetheme,
    getOptionLabel: (option) => option,
  };
  return (
    <>
      <CustBreadcrumb pageName="React" />
      <Grid container spacing={1}>
        <CardButton title="videos" onClick={setShow} />
        <CardButton title="documents" onClick={setShow} />

        <Grid  xs={12} md={12} sm={6}>
          {show == "videos" ? (
            <Typography variant="h5">videos</Typography>
          ) : (
            <Typography variant="h5">document</Typography>
          )}
          {/* <VideoCard />
          <DocCard /> */}
           {/* <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        onInputChange={(event, newValue) => {
          setCodeTheme(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="disableCloseOnSelect" variant="standard" />
        )}
      />
      <br/> */}
          
        </Grid>
        {demoCode.map((codesnip) => {
            return (
              <Grid item xs={6}  >
                <CopyBlock
                  text={codesnip}
                  language={"jsx"}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines={false}
                  codeBlock
                />
                <br />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}

export default React;
