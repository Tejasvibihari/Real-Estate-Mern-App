// import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            const userGoogleProfile = { name: result.user.displayName, email: result.user.email, photo: result.user.photoURL };
            const res = await axios.post('/api/auth/google', userGoogleProfile);
            dispatch(signInSuccess(res.data));
            navigate("/");
        } catch (error) {
            console.log(`Can Not Sign in to google ${error}`);
        }
    }
    return (
        <button onClick={handleGoogleClick} className='btn btn-danger w-100 mt-3' type="button">Sign Up With Google</button>
    )
}
