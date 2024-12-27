// Logout.js
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // assuming you're using React Router

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Call the logout API
    const logoutUser = async () => {
      try {
        // Send a POST request to logout API
        await axios.post('http://localhost:3000/auth/logout', {}, { withCredentials: true });
        
        // Clear any frontend authentication data (e.g., cookies, localStorage, etc.)
        localStorage.removeItem('authToken');
        sessionStorage.removeItem('authToken');
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        // // Attempt to close the tab or window
        // if (window.close) {
        //   window.close();
        // } else {
        //   alert('Window closing is not allowed by the browser. Please close it manually.');
        // }
        // Redirect to login page or home page after successful logout
        navigate('/login'); // Or navigate('/'); for home page
      } catch (error) {
        console.error('Logout failed:', error);
        // You can redirect to an error page or show an error message
      }
    };

    // Call the logout function
    logoutUser();
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
