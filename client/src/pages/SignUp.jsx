// import React from 'react'
import Input from '../components/Input'
// import { useState } from 'react';
export default function SignUp() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const res = await fetch('api/auth/signup', formData);
    }
    return (
        <>
            <div className='signup-section rounded'>
                <h1 className="text-center mt-5 pt-4">SignUp</h1>
                <div className='form-container mx-auto mt-3 p-4'>
                    <form onSubmit={handleSubmit} action="" method='POST'>
                        <Input type="text" placeholder="username" label="Username" id="username" name='username' />
                        <Input type="email" placeholder="example.com" label="Email" id="email" name='email' />
                        <Input type="password" placeholder="Password" label="Password" id="password" name='password' />
                        <button className='btn btn-primary w-100' type="submit">Sign Up</button>
                        <button className='btn btn-danger w-100 mt-3' type="submit">Sign Up With Google</button>
                    </form>
                    <div className='mt-2'>
                        <span>
                            Already have an account? <a href="/sign-in">Sign In</a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}