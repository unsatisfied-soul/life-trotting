import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
   
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
      };
    const handleLoginSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
          alert("Your password did not match");
          return;
        }
        registerUser(loginData.email,loginData.password,loginData.name)
        
        e.preventDefault();
    };
    if(user.email){
        navigate('/')
    }
    return (
        <div className="register py-6 w-2/5 mx-auto">
        <h2 className="text-4xl mb-8 font-bold text-center">Register Now</h2>
        <div className="register-details">
        {!isLoading &&
            <form onSubmit={handleLoginSubmit}>
            <div className="data mb-4">
                <label className="text-xl font-bold">Name</label>
                <input onBlur={handleOnBlur} className="border border-black w-full h-11 mt-3 px-2" name="name" type="text" required/>
            </div>
            <div className="data mb-4">
                <label className="text-xl font-bold">Email</label>
                <input onBlur={handleOnBlur} className="border border-black w-full h-11 mt-3 px-2" name='email' type="email" required/>
            </div>
            <div className="data mb-4">
                <label className="text-xl font-bold">Password</label>
                <input onBlur={handleOnBlur}  className="border border-black w-full h-11 mt-3 px-2" name='password' type="password"  required/>
            </div>
            <div className="data mb-4">
                <label className="text-xl font-bold">Retype your Password</label>
                <input onBlur={handleOnBlur}  className="border border-black w-full h-11 mt-3 px-2" name='password2' type="password"  required/>
            </div>
            <div className="inner mb-8">
                <input className="inner-btn px-10 py-3 font-bold text-white bg-yellow-500" type="submit" value="Register"/>
            </div>

            </form>

        }
         
            {isLoading && `it's loading` }
            <div className="register-iform">
                <p className="text-lg">Already have an account? <Link className="register-l font-bold" to="/login">Log in</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Registration;