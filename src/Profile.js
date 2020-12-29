import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
// import JSONPretty from 'react-json-pretty';
// import { blue } from '@material-ui/core/colors';



const Profile = () => {
    const {user,isAuthenticated} = useAuth0();
    const styling={
        // display: 'flex', justifyContent: 'center', alignItems: 'center', 
        color:'black',
        padding: 10,
        borderRadius: 2,
        backgroundColor: "lightblue",
    }
    return (
        isAuthenticated && (
        <div>
            <span style={styling}>Hi {user.name}!</span>
            {/* <JSONPretty data={user}/> */}
           {/* {JSON.stringify(user,null,2)}  */}
        </div>
        )
    )
}

export default Profile
