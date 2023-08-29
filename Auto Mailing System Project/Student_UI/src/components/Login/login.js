import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import config from "../config.json";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate();

  let login = () => {
    let json = {
      email: email,
      password: password,
    };

    axios.put(config.baseUrl + "/login", json).then((res) => {
      let temp = res.data;
      if (temp === "Login successful") {
        navigate("/Profile");
      }
    });
  };

  return (
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1>Log In</h1>
          <p>Hi, we are you glad you are back. Login Here.</p>
        </div>
        <div className="form">
          <div className="form_input">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form_input">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn" onClick={login}>Log In</button>
          <p>
            Forgot Password?    <NavLink to="/forget">Forgot Password</NavLink>
          </p>
          <p>
            Don't have an Account?    <NavLink to="/register">Register</NavLink>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;

// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import axios from "axios";
// import config from "../config.json";
// import "./Login.css";

// function Login() {
//   const [passShow, setPassShow] = useState(false);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   let navigate = useNavigate();

//   const validateForm = () => {
//     if (email.trim() === "" || password.trim() === "") {
//       setError("Please fill in all fields.");
//       return false;
//     }
//     setError("");
//     return true;
//   };

//   const login = () => {
//     if (validateForm()) {
//       let json = {
//         email: email,
//         password: password,
//       };

//       axios.put(config.baseUrl + "/login", json).then((res) => {
//         let temp = res.data;
//         if (temp === "Login successful") {
//           navigate("/Profile");
//         }
//       });
//     }
//   };

//   return (
//     <section>
//       <div className="form_data">
//         <div className="form_heading">
//           <h1>Log In</h1>
//           <p>Hi, we are you glad you are back. Please login.</p>
//         </div>
//         <form>
//           <div className="form_input">
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               placeholder="Enter Your Email Address"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="form_input">
//             <label htmlFor="Password">Password</label>
//             <div className="two">
//               <input
//                 type={!passShow ? "password" : "text"}
//                 id="password"
//                 placeholder="Enter Your password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <div className="showpass" onClick={() => setPassShow(!passShow)}>
//                 {!passShow ? "Show" : "Hide"}
//               </div>
//             </div>
//             {error && <p className="error">{error}</p>}
//           </div>

//           <button className="btn" onClick={login}>
//             Login
//           </button>
//           <p>
//             Forgot Passeord?{" "}
//             <NavLink to="/forget">Forgot Password</NavLink>
//           </p>
//           <p>
//             Don't have an Account? <NavLink to="/register">Register</NavLink>
//           </p>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Login;

// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom"; // Import Link instead of useNavigate
// import axios from "axios";
// import config from "../config.json";
// import "./Login.css";

// function Login() {
//   const [passShow, setPassShow] = useState(false);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const validateForm = () => {
//     if (email.trim() === "" || password.trim() === "") {
//       setError("Please fill in all fields.");
//       return false;
//     }
//     setError("");
//     return true;
//   };

//   const login = () => {
//     if (validateForm()) {
//       let json = {
//         email: email,
//         password: password,
//       };

//       axios.put(config.baseUrl + "/login", json).then((res) => {
//         let temp = res.data;
//         if (temp === "Login successful") {
//           // Use Link component to navigate to the "Profile" page
//           return <Link to="/Profile" />;
//         }
//       });
//     }
//   };

//   return (
//     <section>
//       <div className="form_data">
//         <div className="form_heading">
//           <h1>Log In</h1>
//           <p>Hi, we are glad you are back. Please log in.</p>
//         </div>
//         <form>
//           <div className="form_input">
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               placeholder="Enter Your Email Address"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="form_input">
//             <label htmlFor="Password">Password</label>
//             <div className="two">
//               <input
//                 type={!passShow ? "password" : "text"}
//                 id="password"
//                 placeholder="Enter Your password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <div className="showpass" onClick={() => setPassShow(!passShow)}>
//                 {!passShow ? "Show" : "Hide"}
//               </div>
//             </div>
//             {error && <p className="error">{error}</p>}
//           </div>

//           {/* Use Link component to navigate to the "Profile" page */}
//           <Link to="/Profile" className='btn' onClick={login}>
//             Login
//           </Link>
//           <p>Don't have an Account? <NavLink to="/register">Register</NavLink></p>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Login;
