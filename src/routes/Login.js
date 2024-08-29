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
                <button className='btn btn-primary p-3 fw-bold fs-4' onClick={handleLoginClick}>Login With Facebook</button>
            </center>
        </div>
    )
}

export default Login