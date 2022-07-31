import React from 'react';
import '../styles/section.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login'
import SignUp from './signup'

function Section() {

  return (
    <div className='row col-12'>
        <div className='col-6 left-bg'>

        </div>
        <div className='col-6 right-login'>
            <Login />
            {/* <SignUp /> */}
        </div>
    </div>
    
  );
}

export default Section;
