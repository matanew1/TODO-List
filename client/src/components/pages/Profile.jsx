import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Typography, Container, Button } from "@mui/material";
import styles from '../styles/styles.jsx'

const Profile = () => {
  const location = useLocation();
  const user = location.state.user;

  return (
    <Container maxWidth="sm" style={styles.container}>
      <Typography variant="h2" color="primary" align="center" style={styles.heading}>
        Welcome, {user.name}!
      </Typography>
      <Button variant="contained" color="primary" style={styles.button}>
        <Link to={"/"} style={styles.link}>
          Go Back
        </Link>
      </Button>
    </Container>
  );
};

export default Profile;
