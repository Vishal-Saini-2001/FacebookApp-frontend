import React, { useEffect } from 'react'

const Login = () => {

    useEffect(() => {
        // const loginBtN = () => {
        //     (function (d, s, id) {
        //         var js, fjs = d.getElementsByTagName(s)[0];
        //         if (d.getElementById(id)) { return; }
        //         js = d.createElement(s); js.id = id;
        //         js.src = "https://connect.facebook.net/en_US/sdk.js";
        //         fjs.parentNode.insertBefore(js, fjs);
        //     }(document, 'script', 'facebook-jssdk')
        //     );


        //     window.fbAsyncInit = function () {
        //         FB.init({
        //             appId: '1946793312448448',
        //             xfbml: true,
        //             version: 'v20.0'
        //         });
        //         // < !--If you are logged in, automatically get your name and email adress, your public profile information-- >
        //         FB.login(function (response) {
        //             if (response.authResponse) {
        //                 console.log('Welcome! Fetching your information.... ');
        //                 FB.api('/me', { fields: 'name, email' }, function (response) {
        //                     alert(response.name, response.email)
        //                 });
        //             } else {
        //                 // < !--If you are not logged in, the login dialog will open for you to login asking for permission to get your public profile and email-- >
        //                 alert('User cancelled login or did not fully authorize.');
        //             }
        //         });

        //     };
        // }

    }, [])

    return (
        <div>
            <div id="fb-root"></div>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v20.0&appId=1946793312448448" nonce="z9CY1eia"></script>
            <h1 className='text-center my-4 fw-bold'>Login Page</h1>
            <br />
            <center>
                <div class="fb-login-button" data-width="" data-size="" data-button-type="" data-layout="" data-auto-logout-link="false" data-use-continue-as="true"></div>
            </center>

        </div>
    )
}

export default Login