import React, { useState } from 'react';
import axios from 'axios';

const AdminRoute = () => {
    const [email,setEmail] = useState('')
    const [sucess,setSucess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        const user = {email}
        e.preventDefault()
        axios.put('https://nameless-brushlands-69236.herokuapp.com/users/admin',user)
        .then(data => {
            if(data.modifiedCount){
                setSucess(true)
            }
        })
    }
    return (
        <div>
            <h2>Make a Admin</h2>
            <form onSubmit={handleSubmit}>
                <input className='border text-black' type="email" name="" onBlur={handleOnBlur} id="" placeholder='email' />
                <button type="submit">Add Admin</button>
            </form>
        </div>
    );
};

export default AdminRoute;