import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
import axios from 'axios'

const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        const body = {
            username,
            password,
            email
        }

        axios.post('http://localhost:8080/login', JSON.stringify(body), {
            headers: { 'Content-Type': 'application/json' }
        }).then((res) => {
            if (res.data !== "") {
                console.log('User logged in');
                navigate('/profile');
            } 
            else {
                alert("Invalid data");
            }

        }).catch((err) => {
            console.log(err)

        });
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>Username:</label>
                <input type="text" required value={username} onChange={(event) => setUsername(event.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} />
                <br />
                <label>Email:</label>
                <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div >
    )
}

export default Login;