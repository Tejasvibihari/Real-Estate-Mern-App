// import React from 'react'
import { useSelector } from 'react-redux'
import Input from '../components/Input'
import { useRef } from 'react';


export default function Profile() {
    const { currentUser } = useSelector(state => state.user)
    const fileRef = useRef(null);
    return (

        <div className="text-center mt-4 ">
            <h1>
                Profile
            </h1>

            <div className="form-container mx-auto mt-3 p-4">
                <form action="" method="POST">
                    <input type='file' ref={fileRef} hidden accept='image/*' />
                    <img onClick={() => fileRef.current.click()} src={currentUser.avatar} width="125px" className=' img-thumbnail mt-3 profile_img' alt="" />
                    <Input
                        type="text"
                        placeholder="Username"
                        name='username'
                        id='username'
                        className="form-control"
                        label="Username" />
                    <Input
                        type="email"
                        placeholder="Email"
                        name='email'
                        id='email'
                        className="form-control"
                        label="Email"
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        name='password'
                        id='password'
                        className="form-control"
                        label="Password"
                    />
                    <button className="btn btn-primary w-100" type="submit">
                        Update
                    </button>
                </form>
                <div className='d-flex justify-content-between mt-3'>
                    <span className=''>
                        <a href="/sign-in" className='text-danger cursor-pointer'>Delete Account</a>
                    </span>
                    <span>
                        <a href="/sign-in" className='text-danger-emphasis'>Log Out</a>
                    </span>
                </div>
            </div>

        </div >
    )
}
