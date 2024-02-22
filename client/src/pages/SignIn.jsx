import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInFailure, signInSuccess } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setFormData({
      ...formData, [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await axios.post('/api/auth/sign-in', formData);
      console.log(res.data);
      res.data.success === false
        ? dispatch(signInFailure(res.data.message))
        : dispatch(signInSuccess(res.data)), navigate('/');


    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <>
      <div className="signup-section rounded">
        <h1 className="text-center mt-5 pt-4">SignIn</h1>
        <div className="form-container mx-auto mt-3 p-4">
          <form onSubmit={handleSubmit} action="" method="POST">
            <Input
              type="email"
              placeholder="Email"
              name='email'
              id='email'
              className="form-control"
              label="Email"
              handleChange={handleChange} />
            <Input
              type="password"
              placeholder="Password"
              name='password'
              id='password'
              className="form-control"
              label="Password"
              handleChange={handleChange} />
            <button disabled={loading} className="btn btn-primary w-100" type="submit">
              {loading ? "Please Wait..." : "Login"}
            </button>
            <OAuth />
          </form>
          <div className='mt-2'>
            <span>
              Do not have an account? <a href="/sign-up">Sign Up</a>
            </span>
          </div>
          {error ? <div className="alert alert-danger mt-3">{error}</div> : null}
        </div>
      </div>
    </>
  );
}
