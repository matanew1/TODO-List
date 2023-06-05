import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Typography, Container, Button } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import styles from "../styles/styles.jsx";
import axios from "axios";

const Profile = () => {
  const location = useLocation();
  const user = location.state.user;

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    axios
      .get(`http://localhost:8080/todo/tasks/64785b773e20c471d6f75d3a`)
      .then((res) => {
        if (res.status === 200) {
          console.log("Fetch All Todos");
          console.log(res.data);
          setTodos(res.data);
        }
      })
      .catch((err) => {
        console.log("Something went wrong");
      });
  };

  return (
    <Container maxWidth="md" style={styles.container}>
      <Typography
        variant="h2"
        color="primary"
        align="center"
        style={styles.heading}
      >
        Welcome, {user.name}!
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Description&nbsp;</TableCell>
              <TableCell align="right">Status&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((task) => (
              <TableRow
                key={task._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {task.name}
                </TableCell>
                <TableCell align="right">{task.description}</TableCell>
                <TableCell>
                  <Button />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" color="primary" style={styles.button}>
        <Link to={"/"} style={styles.link}>
          Go Back
        </Link>
      </Button>
    </Container>
  );
};

export default Profile;
