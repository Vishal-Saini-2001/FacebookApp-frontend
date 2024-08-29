import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        FB.login(function(response) {
        console.log(response);
        if (response.status === 'connected') {
             navigate('/loggedin')
           }
          });
    }

    
    function checkLoginState() {
        FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
        });
    }

    useEffect(() => {
        FB.getLoginStatus(function (response) {
            console.log(response);
            if (response.status === 'connected') { 
                navigate('/loggedin')
            } 
        });

    }, [])

    return (
        <div>
            <h1 className='text-center my-4 fw-bold'>Login Page</h1>
            <br />
            <center> 
                <fb:login-button 
                    config_id="864238035269758"
                    onlogin="checkLoginState();">
                </fb:login-button>
            </center>
        </div>
    )
}

export default Login