import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ admin_login: '', admin_pwd: '' });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission (login)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        setLoading(true);
        const getAuthToken = () => {
            const token = localStorage.getItem('accessToken'); // Assuming the access token is stored in localStorage
            return token ? `Bearer ${token}` : null; // Format as Bearer token
        };

        // Example: Get the Bearer token and use it in the request
        const token = getAuthToken();
        console.log('Bearer Token:', token);

        try {
            // Send the login credentials to the backend
            const response = await axios.post(
                'http://localhost:3000/auth/login',
                formData,
                {
                    withCredentials: true,  // Ensures cookies (refreshToken) are sent
                    headers: {
                        Authorization: token,  // Add the Bearer token in the correct header
                    },
                }
            );


            // If successful, get the access token
            if (response.data.accessToken) {
                setMessage('Login successful!');
                localStorage.setItem('accessToken', response.data.accessToken);  // Store access token
                // Redirect to the next page (e.g., dashboard)
                setTimeout(() => { navigate('/') }, 1000); // Delay in milliseconds (2 seconds)            }
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
            console.log(err.response)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" container-fluid bg-dark d-flex align-items-center justify-content-center vh-100">
            <div className="card   p-2 col-md-4  rounded-5 " >
                <div className="card-header text-white  border rounded-5" style={{
                    background: "yellowgreen",
                    boxShadow: " 0px 0px 5px yellowgreen"
                }}>
                    <h3 className="text-center"> Login Here !</h3>
                </div>
                <div className="card-body">
                    {message && <div className="alert alert-success">{message}</div>}
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="admin_login" className="form-label">Username</label>
                            <input
                            
                            placeholder=' Your UserName  Here !' 
                                type="text"
                                name="admin_login"
                                className="form-control"
                                id="admin_login"
                                value={formData.admin_login}
                                onChange={handleChange}
                                required
                                style={{
                                    border: "1px solid yellowgreen"
                                }}
                            />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="admin_pwd" className="form-label">Password</label>
                            <input
                            
                            placeholder=' Your Password Here !' 
                                autoComplete="off"
                                type="password"
                                name="admin_pwd"
                                className="form-control "
                                id="admin_pwd"
                                value={formData.admin_pwd}
                                onChange={handleChange}
                                required
                                style={{
                                    border: "1px solid yellowgreen"
                                }}
                            />
                        </div>
                        <div className="mt-3 text-center     ">
                            <button type="submit" className="btn  btn-block w-50 m-2 text-light mt-3" disabled={loading} style={{
                                background: "yellowgreen",
                                boxShadow: " 0px 0px 5px yellowgreen"
                            }}>{loading ? 'Loading...' : 'Login'}</button>

                            <div className="text-center  ">
                                Do not  have an account? <a href="/signup" >Sign Up</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
