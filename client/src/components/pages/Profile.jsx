import React, { useCallback, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Typography, Container, Button, TextField, Grid } from "@mui/material";
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

  const [todos, setTodos] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const changeStatus = (task) => {
    task.status = !task.status;
    setTodos({ ...todos });
  };

  const getTodos = useCallback(() => {
    axios
      .get(`http://localhost:8080/todo/tasks/${user._id}`)
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
  },[user._id]);

  useEffect(() => {
    getTodos();
    updateTodos();
  }, [getTodos]);

  const createTask = (name, description) => {
    const taskBody = {
      name,
      description,
    };

    axios
      .post(
        `http://localhost:8080/todo/tasks/64785b773e20c471d6f75d3a`,
        JSON.stringify(taskBody),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          console.log("Task was added successfully");
        } else console.log("Task was failed");
      });
  };

  const updateTodos = () => {};

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
          <TableHead style={{ backgroundColor: "#a5b5f5" }}>
            <TableRow>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Description&nbsp;</TableCell>
              <TableCell align="center">Status&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: "#b5d2f3" }}>
            {todos?.tasks?.map((task) => (
              <TableRow
                hover
                key={task._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {task.name}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {task.description}
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color={task.status ? "inherit" : "error"}
                    onClick={() => changeStatus(task)}
                  >
                    {task.status ? "Completed" : "NotDone"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Grid container>
        <form onSubmit={createTask(name, description)}>
          <TextField
            onChange={(event) => setName(event.target.value)}
            id="name"
            label="Task Name"
            variant="filled"
            value={name}
            style={{ backgroundColor: "#a5b5f5" }}
          />
          &nbsp; &nbsp;
          <TextField
            onChange={(event) => setDescription(event.target.value)}
            id="description"
            label="Take Description"
            variant="filled"
            value={description}
            style={{ backgroundColor: "#a5b5f5" }}
          />
          <Button varient="contained" color="error" type="submit">
            Submit
          </Button>
        </form>
      </Grid>

      <Button variant="contained" color="primary" style={styles.button}>
        <Link to={"/"} style={styles.link}>
          Go Back
        </Link>
      </Button>
    </Container>
  );
};

export default Profile;
