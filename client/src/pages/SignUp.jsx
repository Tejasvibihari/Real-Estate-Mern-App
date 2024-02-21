import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch('/api/auth/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            const data = await res.json()

            console.log(data);
            if (data.success === false) {
                setLoading(false);
                setError(data.message);
                return;
            }
            setLoading(false);
            setError(null);
            navigate('/sign-in');

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
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="username" placeholder="username" name="username" onChange={handleChange} />
                            <label>Username</label>
                        </div> <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="email" placeholder="Email" name="email" onChange={handleChange} />
                            <label>Email</label>
                        </div> <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="password" placeholder="Password" name="password" onChange={handleChange} />
                            <label>Password</label>
                        </div>
                        <button disabled={loading} className="btn btn-primary w-100" type="submit">
                            {loading ? "Please Wait..." : "Create Account"}
                        </button>
                        <button className='btn btn-danger w-100 mt-3' type="submit">Sign Up With Google</button>
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
