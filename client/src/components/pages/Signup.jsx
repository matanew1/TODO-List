import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {

    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    
    const handleSignup = (event) => {
        event.preventDefault();

        const body ={
            name,
            password,
            email
        }

        console.log(body)

        axios.post('http://localhost:8080/users', JSON.stringify(body), {
            headers : {'Content-Type': 'application/json'}
        }).then((res) => {
            if (res.status === 201) {
                console.log('User signup');
                navigate('/profile', {state: {user: res.data}});
            } 
            else if (res.status === 409) {
                alert(res.statusText);
            }

        }).catch((err) => {
            console.log(err)
        });
    }

    return(
        <div>
            <form onSubmit={handleSignup}>
                <label>Username:</label>
                <input type="text" required value={name} onChange={(event) => setName(event.target.value)} />
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

export default Signup