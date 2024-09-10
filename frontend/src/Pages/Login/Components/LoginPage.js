import React from 'react'
import LoginForm from './LoginForm';
import "../Styles/login.styles.css"
export default function LoginPage() {

    const handleLogin = (credentials) => {
        // Add your login logic here (e.g., call an API, validate credentials)
        console.log('Login credentials:', credentials);
      };

  return (
    <div className="login-page-flex">
        <div className="login-grid-wrapper">
            <div className="login-grid">

                <div className="login-left">
                    <div className='login-left-flex'>
                        <h2> Get Started</h2>
                        <hr style={{maxWidth:"300px"}}></hr>
                        <p>Getting the help you need, made accessible</p>
                        <span>Don't have an account ? You can </span><span><a href=''style={{display:'inline-block'}}>Signup</a></span><span> for free.</span>
                    </div>
                </div>

                <div className="black-divider">

                </div>
                
                <div className="loginform">
                    <div className="login-flex">
                        <h2 style={{marginBottom:"2rem"}}>Login</h2>
                        <LoginForm onLogin={handleLogin}/>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
