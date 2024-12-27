import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SuperAdmin from '../Pages/SuperAdmin';
import ManagerAdmin from '../Pages/ManagerAdmin';
import UnAuthorizedAdmin from '../Pages/UnAuthorizedAdmin';
const Dashboard = () => {
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserRole = async () => {
      const getAuthToken = () => {
        const token = localStorage.getItem('accessToken');
        return token ? `Bearer ${token}` : null;
      };

      const token = getAuthToken();

      if (!token) {
        console.log('No token found, redirecting to login');
        navigate('/login');
        return;
      }

      try {
        const response = await axios.post(
          'http://localhost:3000/auth/refreshToken',
          {}, // Pass an empty body if no payload is needed
          {
            withCredentials: true,
            headers: {
              Authorization: token,
            },
          }
        );
        console.log('API response:', response.data);
        const { admin_type, accessToken } = response.data;

        // Update user role and store new access token
        setUserRole(admin_type || 'Unauthorized');
         if (accessToken) {
          localStorage.setItem('accessToken', accessToken);
        }

        console.log('User role:', admin_type || 'Role not found');
      } catch (error) {
        console.error('Error fetching user details:', error.message);
        navigate('/login');
      }
    };

    fetchUserRole();
  }, [navigate]);

  return (
    <div>
      {userRole === 'super_admin' ? (
        <div>
      <SuperAdmin />
      
    </div>    
    // ManagerAdminist
      ) : userRole === 'moderator' ? (
<div>
      <ManagerAdmin />
      
    </div>        ) : (


        <div>
      <UnAuthorizedAdmin/>
      
    </div> 
      )}
    </div>
  );
};

export default Dashboard;
