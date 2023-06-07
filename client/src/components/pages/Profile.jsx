import React, { useCallback, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Typography,
  Container,
  Button,
  TextField,
  Grid,
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
  const user = location?.state?.user;
  const todo = location?.state?.todo;

  const [todos, setTodos] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const changeStatus = (task) => {
    task.status = !task.status;
    axios
      .put(`http://localhost:8080/todo/tasks/${task._id}`, JSON.stringify(task), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          fetchAllTasks();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchAllTasks = useCallback(() => {
    axios
      .get(`http://localhost:8080/todo/tasks/${user._id}`)
      .then((res) => {
        if (res.status === 200) {
          console.log("Fetch All Todos");
          setTodos(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?._id]);

  const clearForm = useCallback(() => {
    setName("");
    setDescription("");
  }, []);

  useEffect(() => {
    fetchAllTasks();
    clearForm();
  }, [clearForm, fetchAllTasks, todo, user]);

  const createTask = (event) => {
    event.preventDefault();

    const taskBody = {
      name,
      description,
      status: false,
      todo: todo?._id,
    };
    console.log("taskBody", taskBody);

    axios
      .post(`http://localhost:8080/todo/tasks`, JSON.stringify(taskBody), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.status === 201) {
          console.log("Task was added successfully");
          fetchAllTasks();
          clearForm();
        } else console.log("Task was failed");
      });
  };

  return (
    <Container maxWidth="md" style={styles.container}>
      <Typography variant="h2" color="indigo" align="center" style={styles.heading}>
        Welcome, {user.name}!
      </Typography>
      <Typography variant="h4" color="indigo" align="left">
        Here is your TODO list:
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
              <TableHead style={{ backgroundColor: "#a5b5f5" }}>
                <TableRow>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Description</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todos?.tasks?.map((task) => (
                  <TableRow
                    hover
                    key={task._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {task.name}
                    </TableCell>
                    <TableCell align="center">{task.description}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color={task.status ? "inherit" : "error"}
                        onClick={() => changeStatus(task)}
                      >
                        {task.status ? "Completed" : "Not Done"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={createTask}>
            <Typography variant="h3" color="indigo" style={{ fontSize: "30px" }}>
              <strong>Add new task todo:</strong>
            </Typography>
            <TextField
              onChange={(event) => setName(event.target.value)}
              id="name"
              label="Task Name"
              variant="filled"
              value={name}
              style={{ backgroundColor: "#a5b5f5", borderRadius: "5px", marginBottom: "10px" }}
              fullWidth
            />
            <TextField
              onChange={(event) => setDescription(event.target.value)}
              id="description"
              label="Task Description"
              variant="filled"
              value={description}
              style={{ backgroundColor: "#a5b5f5", borderRadius: "5px", marginBottom: "10px" }}
              fullWidth
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit
            </Button>
            <Button variant="contained" color="primary" fullWidth>
              <Link to={"/"} style={styles.link}>
                Go Back
              </Link>
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
