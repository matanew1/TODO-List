import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Button, TextField, Container, Typography } from "@mui/material";
import axios from "axios";
import styles from "../styles/styles.jsx";
import queryString from "query-string";

const Signup = () => {
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  console.log(queryParams);

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();

    const body = {
      name,
      password,
      email,
    };

    axios
      .post("http://localhost:8080/users", JSON.stringify(body), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.status === 201) {
          console.log("User signup");
          navigate("/profile", { state: { user: res.data } });
        }
      })
      .catch((err) => {
        if (err.response.status === 409) {
          setError("User already exists");
        } else {
          setError("Something went wrong");
        }
      });
  };

  return (
    <Container maxWidth="sm" style={styles.container}>
      <Typography variant="h2" color="primary" style={styles.heading}>
        Sign Up
      </Typography>
      <form onSubmit={handleSignup}>
        <TextField
          label="Username"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          fullWidth
          margin="normal"
          style={styles.textField}
          InputLabelProps={{
            style: styles.inputLabel,
          }}
          InputProps={{
            style: styles.input,
          }}
        />
        <TextField
          label="Password"
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          fullWidth
          margin="normal"
          style={styles.textField}
          InputLabelProps={{
            style: styles.inputLabel,
          }}
          InputProps={{
            style: styles.input,
          }}
        />
        <TextField
          label="Email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          fullWidth
          margin="normal"
          style={styles.textField}
          InputLabelProps={{
            style: styles.inputLabel,
          }}
          InputProps={{
            style: styles.input,
          }}
        />
        <Button variant="contained" color="secondary" style={styles.button}>
          <Link to={"/"}>Go Back</Link>
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={styles.button}
        >
          Submit
        </Button>
        {error ? (
          <Typography variant="h6" color="error" style={styles.heading}>
            Error: {error}
          </Typography>
        ) : null}
      </form>
    </Container>
  );
};

export default Signup;
