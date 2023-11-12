import { Button, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';
import { signUpApi } from "../../../../api/api";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState(dayjs(new Date()));
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (email === "" || password === "")
      return alert("fill email and password");
    singUp(name, email, password, date);
    e.preventDefault();
  };

  const singUp = async (userName, userEmail, userPassword, userBirthDate) => {
    setLoading(true);
    try {
      signUpApi(userName, userEmail, userPassword, userBirthDate)
      navigate("/");
    } catch (error) {
      alert("somthing went wrong");
      setLoading(false);
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className="form" >
        <TextField
          label="name"
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="email"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <DemoContainer components={["DatePicker"]}> */}
            <DatePicker
              label="Birth Date"
              slotProps={{ textField: { variant: "standard" } }}
              value={date}
              format="MM-DD-YYYY"
              onChange={(newValue) => setDate(newValue)}
            />
          {/* </DemoContainer> */}
        </LocalizationProvider>
        <TextField
          label="password"
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {!loading ? (
          <Button type="submit" variant="outlined">
            sign Up
          </Button>
        ) : (
          <Typography variant="caption" display="block" gutterBottom>
            please wait...
          </Typography>
        )}

        <Link to="/">Already have an account? Sign In</Link>
      </form>
    </div>
  );
}

export default SignUp;
