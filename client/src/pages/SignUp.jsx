import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import OAuth from '../components/OAuth';
export default function SignUp() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (event) => {
        setFormData({
            ...formData, [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post('/api/auth/sign-up', formData);
            console.log(res.data);
            res.data.success === false
                ? (setLoading(false), setError(res.data.message))
                : (setLoading(() => false), setError(null), navigate('/sign-in'));


        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };
    return (
        <>
            <div className="signup-section rounded">
                <h1 className="text-center mt-5 pt-4">SignUp</h1>
                <div className="form-container mx-auto mt-3 p-4">
                    <form onSubmit={handleSubmit} action="" method="POST">
                        <Input
                            type="text"
                            placeholder="Username"
                            name='username'
                            id='username'
                            className="form-control"
                            handleChange={handleChange}
                            label="Username" />
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
                            {loading ? "Please Wait..." : "Create Account"}
                        </button>
                        <OAuth />
                    </form>
                    <div className='mt-2'>
                        <span>
                            Already have an account? <a href="/sign-in">Sign In</a>
                        </span>
                    </div>
                    {error ? <div className="alert alert-danger mt-3">{error}</div> : null}
                </div>
            </div>
        </>
    );
}
