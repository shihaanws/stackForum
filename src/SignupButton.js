import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

const SignupButton = () => {
    const {loginWithRedirect,isAuthenticated} = useAuth0(); 
    return (
        !isAuthenticated && (
       <button  class="btn btn-primary" onClick={()=>loginWithRedirect()}>
           Signup
       </button>
    )
    )
}

export default SignupButton
