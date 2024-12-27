import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Auth/SignUp';
import Login from './Auth/Login';
import  Dashboard  from './Pages/DashBoard';
import Logout from './Auth/Logout';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
      
      </Routes>
    </Router>
  );
}

export default App;
