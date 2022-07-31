import React from 'react';
import '../styles/section.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login'
import SignUp from './signup'

function Section() {

  return (
    <div className='row col-12'>
        <div className='col-6 right-login'>
            <Login />
            {/* <SignUp /> */}
        </div>
        <div className='col-6 left-bg container'>
            <div className='box'></div>
            <div className='box1'></div>
            <div className='box2'></div>
            <div className='left-text'>
                <h1>Swift Payment</h1>
                <h2>It's tiring to write a different description for each shot</h2>
            </div>
            <div className='dots'>
                <div className='dot dota'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>
        </div>
    </div>
    
  );
}

export default Section;
