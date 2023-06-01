import React from "react";
import { useLocation } from "react-router-dom";

const Profile = (props) => {
    const location = useLocation();
    const user = location.state.user;    
    console.log(user)

    return(
        <div>
            <h1>Wellcome {user.name}</h1>
        </div>
    )
}

export default Profile
