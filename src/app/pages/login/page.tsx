"use client";

import { useState } from 'react';
import { userLogin } from '../../services/api';
import './styles.css';
import { Button } from '@mui/material';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');

    return (
        <div className='container'>
            <div className='login-form'>
                <h2>Login</h2>

                <form>
                    <div className='box-user'>
                        <label htmlFor="login-email">Email</label>
                        <input type="text" id='login-email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    
                    <div className='box-user'>
                        <label htmlFor="login-password">Password</label>
                        <input type="text" id='login-password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
    
                    <Button className='submit-btn' type='button' onClick={userLogin} variant='outlined' size='large'>Sign In</Button>
                </form>
            </div>
    
            <div id='response'>{response}</div>
        </div>
    )
}

export default UserLogin;