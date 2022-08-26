import React from 'react';
import Register from './Register';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateComponent() {
    const auth = localStorage.getItem('user')    
    return (
        auth ? <Outlet /> : <Register />
    )
}