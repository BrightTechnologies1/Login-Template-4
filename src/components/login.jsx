import React from 'react';
import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/lojj.svg'

function Login() {

  return (
    <div className=''>
        <form>
            <div className='form-img'>
                <img src={Logo} alt='' />
            </div>
            <div className="login">
                <div className='login-text'>
                    <h1>Welcome back!</h1>
                </div>

                <div className='form'>
                    <div className='row col-12 form-input'>
                        <div className='details row'>
                            <label>
                                Email
                                <input className='col-12' type='email' placeholder='Email' required />
                            </label>
                            <label>
                                Password
                                <input className='col-12' type='password' placeholder='Password' required />
                            </label>
                            <button className='form-button' type='submit'>Login</button>
                        </div>
                        <h2>New member? Sign up</h2>
                        <h3>Forgotten password? Reset here</h3>
                    </div>
                </div>
            </div>
            <div className=''>
                
            </div>
        </form>
    </div>
    
  );
}

export default Login;
