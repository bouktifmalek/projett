import React from 'react';
import './login.css';





const Login = () => {
  return (
        <div>  




<div className='form'>
  <h2>Login Here</h2>
  <input type='email' name='email' placeholder='Enter Email Here'></input>
  <input type='password' name='' placeholder='Enter Password Here'></input>
  <button className='btnn'><a href='#'>Login</a></button>


   <p className='link'>Don't have accont<br />
  
  
  <a href='#'> Register</a>Here</p> 
  <p className='liw'>Log in with</p>
</div>                        
        </div>
  );
}

export default Login;
