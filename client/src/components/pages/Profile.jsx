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
  const user = location?.state?.user;
  const todo = location?.state?.todo;

  const [todos, setTodos] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const changeStatus = (task) => {
    console.log(task);
    task.status = !task.status;
    // axios.put('http://')
    setTodos({ ...todos });
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
    console.log('taskBody', taskBody);

    axios.post(`http://localhost:8080/todo/tasks`, JSON.stringify(taskBody), {
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 201) {
        console.log("Task was added successfully");
        fetchAllTasks();
        clearForm();
      } else console.log("Task was failed");
    });
  };


  return (
    <Container maxWidth="md" style={styles.container}>
      <Typography variant="h2" color="primary" align="center" style={styles.heading}>
        Welcome, {user.name}!
      </Typography>
      <Typography variant="h4" color="primary" align="left">
        Here is your TODO list:
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
      <Grid container sx={{minHeight: "150px", gap: "3px"}}>
        <form onSubmit={createTask}>
          <Typography variant="h7" color="indigo">
            <strong>Add new task todo:</strong>
          </Typography>
          &nbsp; &nbsp;
          <TextField 
            onChange={(event) => setName(event.target.value)}
            id="name"
            label="Task Name"
            variant="filled"
            value={name}
            style={{ backgroundColor: "#a5b5f5", borderRadius: "5px" }}
          />
          &nbsp; &nbsp;
          <TextField
            onChange={(event) => setDescription(event.target.value)}
            id="description"
            label="Task Description"
            variant="filled"
            value={description}
            style={{ backgroundColor: "#a5b5f5", borderRadius: "5px"  }}
          />
          &nbsp; &nbsp;
          <Button sx={{ minHeight: "55px", minWidth: "55px" }} variant="contained" color="primary" type="submit">
            Submit
          </Button>
          &nbsp; &nbsp;
          <Button sx={{ minHeight: "55px", minWidth: "55px" }} variant="contained" color="primary">
            <Link to={"/"} style={styles.link}>
              Go Back
            </Link>
          </Button>
        </form>
      </Grid>
    </Container>
  );
};

export default Profile;
