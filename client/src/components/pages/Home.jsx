import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className='Home'>
            <main>
                <Link className='login-button' to={'/login'}>
                    <h1>Login</h1>
                </Link>
            </main>
        </div>
    )
}

export default Home