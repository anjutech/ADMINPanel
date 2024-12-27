import  { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    admin_login: "",
    admin_pwd: "",
    admin_name: "",
    admin_mobile: "",
    admin_email: "",
    is_active: true,
    admin_type: "",
  });

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/auth/register", formData);
      setMessage({ type: "success", text: response.data.message });
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.message || "Something went wrong!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <div className=" container-fluid bg-dark d-flex align-items-center justify-content-center vh-100">
      {message && (
        <div
          className={`alert ${
            message.type === "success" ? "alert-success" : "alert-danger"
          }`}
        >
          {message.text}
        </div>
      )}
      <div className="card  col-md-5 border rounded-5  "
      style={{
        border: "1px solid yellowgreen"
    }}>
        <div className="card-header text-center m-1 text-white border rounded-5"  style={{
                            background:"yellowgreen",
                            boxShadow: " 0px 0px 5px yellowgreen",
                            border:"1px solid yellowgreen"
                        }}><h3>
            Admin SignUp !
          </h3></div>
      <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div >
        <label htmlFor="admin_login" className="form-label">
            
          </label>
          <input
          placeholder=" Admin Login"
            type="text"
            className="form-control"
            id="admin_login"
            name="admin_login"
            value={formData.admin_login}
            onChange={handleChange}
            required
            style={{
              border: "1px solid yellowgreen"
          }}
          />
        </div>

        <div>
          <label htmlFor="admin_pwd" className="form-label">
            
          </label>
          <input
                    placeholder=" Password Here !"

          autoComplete="auto"
            type="password"
            className="form-control"
            id="admin_pwd"
            name="admin_pwd"
            value={formData.admin_pwd}
            onChange={handleChange}
            required
            style={{
              border: "1px solid yellowgreen"
          }}
          />
        </div>

        <div >
          <label htmlFor="admin_name" className="form-label">
            
          </label>
          <input
                              placeholder=" Admin Name  Here !"

            type="text"
            className="form-control"
            id="admin_name"
            name="admin_name"
            value={formData.admin_name}
            onChange={handleChange}
            required
            style={{
              border: "1px solid yellowgreen"
          }}
          />
        </div>

        <div >
          <label htmlFor="admin_mobile" className="form-label">
            
          </label>
          <input
                              placeholder=" Your Phone Number  Here !"

            type="text"
            className="form-control"
            id="admin_mobile"
            name="admin_mobile"
            value={formData.admin_mobile}
            onChange={handleChange}
            required
            style={{
              border: "1px solid yellowgreen"
          }}
          />
        </div>

        <div >
          <label htmlFor="admin_email" className="form-label">
            
          </label>
          <input
            placeholder=" Your Email  Here !"
            type="email"
            className="form-control"
            id="admin_email"
            name="admin_email"
            value={formData.admin_email}
            onChange={handleChange}
            required
            style={{
              border: "1px solid yellowgreen"
          }}
          />
        </div>

        <div >
          <label htmlFor="admin_type" className="form-label">
            
          </label>
          <select
            className="form-select "
            id="admin_type"
            name="admin_type"
            value={formData.admin_type}
            onChange={handleChange}
            required
            style={{
              border: "1px solid yellowgreen"
          }}
          >
            <option value="" disabled  style={{
              border: "1px solid yellowgreen",
              background: "yellowgreen"
          }}>
              Choose Your Admin Type Here...
            </option>
            <option value="SuperAdmin"  style={{
              border: "1px solid yellowgreen"
          }}>Super Admin</option>
            <option value="ManagerAdmin"  style={{
              border: "1px solid yellowgreen"
          }}>Manager Admin</option>
          </select>
        </div>
        <div className="mt-3 text-center     ">

        <button type="submit" className="btn  btn-block w-50 m-2  mt-3  text-white border rounded-5 " disabled={isLoading} style={{
                            background:"yellowgreen",
                            boxShadow: " 0px 0px 5px yellowgreen"
                        }}>{isLoading ? 'Loading...' : 'Login'}</button>
                        </div>
        <div className=" text-center card-footer  bg-dark text-white border rounded-5  " >
        
            
  
                            <div className="text-center  ">
                                Do not  have an account? <a href="/login" >Login</a>
                            </div>
                        </div>
      </form>
      </div>
      </div>
    </div>

  );
};

export default Register;
