import axios from "axios";
import "./App.css";
import SideBar from "./components/layout/sideBar/SideBar";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
function App() {
  const loginUser = JSON.parse(localStorage.getItem("userData")) || null;
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState("singin");
  const [show, setShow] = useState(false);
  const [date, setDate] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);
  useEffect(()=>{
    if(loginUser?.email.length>1){
      setShow(true)
    }
  },[])
  const userLogin = async (userEmail, userPassword) => {
    try {
      const user = await axios({
        method: "post",
        url: "https://code-builder-api.onrender.com/user/login",
        headers: {},
        data: {
          email: userEmail,
          password: userPassword,
        },
      });
      setShow(true);
      setButtonDisable(false);
      localStorage.setItem('userData', JSON.stringify(user.data))
    } catch (error) {
      setButtonDisable(false);
      alert("user not found");
    }
  };

  const userSingUp = async (
    userName,
    userEmail,
    userPassword,
    userBirthDate
  ) => {
    try {
      const user = await axios({
        method: "post",
        url: "https://code-builder-api.onrender.com/user/singup",
        headers: {},
        data: {
          name: userName,
          birthDate: {
            month: userBirthDate["$M"] + 1,
            day: userBirthDate["$D"],
            year: userBirthDate["$y"],
          },
          email: userEmail,
          password: userPassword,
        },
      });
      setButtonDisable(false);
      console.log(user);
    } catch (error) {
      alert("somthing went wrong");
      setButtonDisable(false);
    }
  };

  const inputSearch = (evt) => {
    evt.preventDefault();
    setInputValue(evt.target.value);
  };
  const handleSubmit = (e) => {
    setButtonDisable(true);
    userLogin(email, password);

    e.preventDefault();
  };
  const handleNewUser = (e) => {
    setButtonDisable(true);
    userSingUp(name, email, password, date);
    e.preventDefault();
  };
  return (
    <>
      {form === "singin" && (
        <form
          className="form"
          style={show ? { display: "none" } : {}}
          onSubmit={handleSubmit}
        >
          <TextField
            id="standard-basic"
            label="email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="password"
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!buttonDisable ? (
            <Button type="submit" variant="outlined">
              sing in
            </Button>
          ) : (
            <Typography variant="caption" display="block" gutterBottom>
              please wait....
            </Typography>
          )}
          
          <Typography
            variant="subtitle1"
            gutterBottom
            onClick={() => setForm("Sign Up")}
          >
            Don't have an account? Sign Up
          </Typography>
        </form>
      )}
      {form === "Sign Up" && (
        <form
          className="form"
          style={show ? { display: "none" } : {}}
          onSubmit={handleNewUser}
        >
          <TextField
            id="standard-basic"
            label="name"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Birth Date"
                slotProps={{ textField: { variant: "standard" } }}
                value={date}
                format="MM-DD-YYYY"
                onChange={(newValue) => setDate(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
          <TextField
            id="standard-basic"
            label="password"
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          {!buttonDisable ? (
            <Button type="submit" variant="outlined">
              sing Up
            </Button>
          ) : (
            <Typography variant="caption" display="block" gutterBottom>
              please wait...
            </Typography>
          )}
          
          <Typography
            variant="subtitle1"
            gutterBottom
            onClick={() => setForm("singin")}
          >
            Already have an account? Sign In
          </Typography>
        </form>
      )}

      {show ? <SideBar /> : null}

      {/* <input onChange={(e) => inputSearch(e)} /> */}
    </>
  );
}

export default App;
