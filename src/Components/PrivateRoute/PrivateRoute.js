import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest} ) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { return 'please wait...' }
    if(user.email){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;