import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError ,signInWithGoogle} = useAuth();
    const location = useLocation();
    const navigate = useNavigate()
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
      };
      const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
      };
    return (
        <div className="login py-8 px-3 w-2/5 mx-auto">
           <h2 className="text-4xl mb-8 font-bold text-center">Login Form</h2>
            <div className="login-details">
                <form onSubmit={handleLoginSubmit}>
                <div className="data mb-4">
                    <label className="text-xl font-bold">Email</label>
                    <input className="border border-black w-full h-11 mt-3 px-2 log-input" name="email"
                    type="email" onChange={handleOnChange} required/>
                    
                </div>
                <div className="data mb-4">
                    <label className="text-xl font-bold">Password</label>
                    <input className="border w-full h-11 mt-3 border-black px-3 log-input" name="password" type="password" onChange={handleOnChange}   required/>
                </div>
                
                <div className="inner mb-8">
                    <input className="inner-btn px-10 py-3 font-bold text-white bg-yellow-500" type="submit" value="Login"/>
                </div>
                {user?.email && <h2 className='text-green-600'>Add successfully</h2>}
              {authError && <h2 className='text-red-600'>{authError}</h2>}
                </form>

                {
                    <div className="register-iform">
                    <p className="text-lg">Don't have an account? <Link className="register-l font-bold" to="/register">Register Now</Link></p>
                    </div>
                }
            
            </div>
        </div>
    );
};

export default Login;

