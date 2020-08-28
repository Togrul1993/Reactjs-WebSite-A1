import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import SignUpItem from '../pagesitem/SingUpItem';

const SignUp=()=> {
  return (
    <>
      <div className='sign-up'>
        <div className="sign-item">
            <SignUpItem />
        </div>
      </div>
      <Footer />
      
    </>
    
  ) 
}

export default SignUp;