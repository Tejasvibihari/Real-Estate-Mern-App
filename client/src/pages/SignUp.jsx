// import React from 'react'
import Input from '../components/Input'
export default function SignUp() {
    return (
        <>
            <div className='signup-section rounded'>
                <h1 className="text-center mt-5 pt-4">SignUp</h1>
                <div className='form-container mx-auto mt-3 p-4'>
                    <form action="" method='POST'>
                        <Input type="text" placeholder="username" label="Username" id="floatingUsername" name='username' />
                        <Input type="email" placeholder="example.com" label="Email" id="floatingEmail" name='email' />
                        <Input type="password" placeholder="Password" label="Password" id="floatingPassword" name='password' />
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