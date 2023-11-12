import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (email === "" || password === "")
      return alert("fill email and password");
    singIn(email, password);
    e.preventDefault();
  };

  const singIn = async (userEmail, userPassword) => {
    setLoading(true)
    try {
      const user = await axios({
        method: "post",
        url: import.meta.env.VITE_BASE_URL + "/user/login",
        headers: {},
        data: {
          email: userEmail,
          password: userPassword,
        },
      });
      localStorage.setItem("userData", JSON.stringify(user.data));
      navigate("/");
    } catch (error) {
      setLoading(false);
      alert("user not found");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        label="email"
        variant="standard"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="password"
        type="password"
        variant="standard"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {!loading ? (
        <Button type="submit" variant="outlined">
          sign in
        </Button>
      ) : (
        <Typography variant="caption" display="block" gutterBottom>
          please wait....
        </Typography>
      )}

      <Link to="/signUp" >
        Don't have an account? Sign Up
      </Link>
    </form>
  );
}

export default SignIn;