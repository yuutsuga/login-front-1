"use client";

import { useState } from 'react';
import { userRegister } from '@/app/services/api';
import './styles.css';
import { Button } from '@mui/material';

const UserRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    return (
            <div className='register-form'>
                <h2>Sign up</h2>

                    <div className='box-user'>
                        <label htmlFor="register-name">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div className='box-user'>
                        <label htmlFor="register-email">Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className='box-user'>
                        <label htmlFor="register-password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    <Button type='button' onClick={() => userRegister(name, email, password)} variant='outlined' size='large'>
                        Sign Up
                    </Button>
            </div>
    );
}

export default UserRegister;