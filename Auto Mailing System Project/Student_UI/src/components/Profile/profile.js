import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import config from "../config.json";
// import { NavLink } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  let navigate = useNavigate();

  let logout = () => {
    sessionStorage.clear();
    navigate("/Login");
  };

  return (
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1>Student Profile</h1>
          <p style={{ textAlign: "center" }}>Welcome to CDAC Bengaluru..</p>
        </div>
        <div className="profile-info">
          {/* <p>
          <strong>Name:</strong> 
        </p>
        <p>
          <strong>Email:</strong> 
        </p> */}
        </div>
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </div>
    </section>
  );
};

export default Profile;
