import axios from "axios";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import config from "../config.json";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  let navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!fullName) {
      newErrors.fullName = "Full name is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  let signUp = () => {
    if( validateForm()){
      let json = {
        fullName: fullName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };
  
      axios.post(config.baseUrl + "/register", json).then((res) => {
        let temp = res.data;
        if (temp === "User registration successful") {
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("password", password);
          navigate("/VerifyOtp");
        } else if (temp === "User Already Exist"){
          alert("User Already Exist")
        }
        else if (temp === "User Email Already Exist"){
          alert("User Email Already Exist")
        }
      })
      .catch=(e) => {
        console.log("Error", e);
      };
    }
  };

  return (
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1>Register</h1>
          <p style={{ textAlign: "center" }}>
            Welcome to CDAC Bengaluru, register here..
          </p>
        </div>

        <div className="form">
          <div className="form_input">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && <div className="error">{errors.fullName}</div>}
          </div>

          <div className="form_input">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="form_input">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <div className="form_input">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
          </div>

          <button className="btn" onClick={signUp}>
            Register
          </button>
          <p>
            Already have an account? <NavLink to="/Login">Log In</NavLink>
          </p>
          
        </div>
      </div>
    </section>
  );
}

export default Register;

// import axios from "axios";
// import { NavLink, useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import config from "../config.json";
// import "./Register.css";

// function Register() {
//   const [passShow, setPassShow] = useState(false);
//   const [cpassShow, setCPassShow] = useState(false);

//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [cpassword, setCPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   let navigate = useNavigate();

//   const validateForm = () => {
//     let formIsValid = true;
//     const newErrors = {};

//     if (!fullName) {
//       newErrors.fullName = "Full name is required";
//       formIsValid = false;
//     }

//     if (!email) {
//       newErrors.email = "Email is required";
//       formIsValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = "Email is invalid";
//       formIsValid = false;
//     }

//     if (!password) {
//       newErrors.password = "Password is required";
//       formIsValid = false;
//     } else if (password.length < 6) {
//       newErrors.password = "Password must be atleast 6 characters.";
//     }

//     if (password !== cpassword) {
//       newErrors.cpassword = "Passwords do not match";
//       formIsValid = false;
//     } else if (cpassword.length < 6) {
//       newErrors.cpassword = "Password must be atleast 6 characters.";
//     }

//     setErrors(newErrors);
//     return formIsValid;
//   };

//   let signUp = () => {
//     // if (validateForm()) {
//       let json = {
//         fullName: fullName,
//         email: email,
//         password: password
//       };

//       axios.post(config.baseUrl + "/register", json).then((res) => {
//         let temp = res.data;
//         if (temp === "User registration successful") {
//           sessionStorage.setItem("email", email);
//           navigate("/VerifyOtp");
//         }
//       });
//     // }
//   };

// let signUp = () => {
//   if (validateForm()) {
//     let json = {
//       fullName: fullName,
//       email: email,
//       password: password,
//     };

//     axios
//       .post(config.baseUrl + "/register", json)
//       .then((res) => {
//         let temp = res.data;
//         console.log("Registration Response:", temp);
//         if (temp === "User registration successful") {
//           console.log("Setting email in session storage:", email);
//           sessionStorage.setItem("email", email);
//          console.log("Email in session storage:", sessionStorage.getItem("email"));
//           navigate("/VerifyOtp");

//         }
//       })
//       .catch((error) => {
//         console.error("Registration Error:", error);
//       });
//   }
// };

//   return (
//     <section>
//       <div className="form_data">
//         <div className="form_heading">
//           <h1>Register</h1>
//           <p style={{ textAlign: "center" }}>Welcome, register here..</p>
//         </div>
//         <form>
//           <div className="form_input">
//             <label>Full Name</label>
//             <input
//               type="text"
//               placeholder="Enter Your Name."
//               onChange={(e) => setFullName(e.target.value)}
//             />
//             {errors.fullName && <div className="error">{errors.fullName}</div>}
//           </div>

//           <div className="form_input">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter Your Email."
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errors.email && <div className="error">{errors.email}</div>}
//           </div>

//           <div className="form_input">
//             <label>Password</label>
//             <div className="two">
//               <input
//                 type={!passShow ? "password" : "text"}
//                 placeholder="Enter Your Password."
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <div className="showpass" onClick={() => setPassShow(!passShow)}>
//                 {!passShow ? "Show" : "Hide"}
//               </div>
//             </div>
//             {errors.password && <div className="error">{errors.password}</div>}
//           </div>

//           <div className="form_input">
//             <label >Confirm Password</label>
//             <div className="two">
//               <input
//                 type={!cpassShow ? "password" : "text"}
//                 placeholder="Confirm Your Password"
//                 onChange={(e) => setCPassword(e.target.value)}
//               />
//               <div
//                 className="showpass"
//                 onClick={() => setCPassShow(!cpassShow)}>
//                 {!cpassShow ? "Show" : "Hide"}
//               </div>
//             </div>
//             {errors.cpassword && (
//               <div className="error">{errors.cpassword}</div>
//             )}
//           </div>

//           <button type="submit" className="btn" onClick={signUp}>
//             Register
//           </button>
//           <p>
//             Already have an account? <NavLink to="/Login">Log In</NavLink>
//           </p>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Register;

// let signUp = () => {
//   if (validateForm()) {
//     let json = {
//       fullName: fullName,
//       email: email,
//       password: password,
//     };

//     axios
//       .post(config.baseUrl + "/register", json)
//       .then((res) => {
//         let temp = res.data;
//         console.log("Registration Response:", temp);
//         if (temp === "User registration successful") {
//           sessionStorage.setItem("email", email);
//           console.log(
//             "Session Storage Email:",
//             sessionStorage.setItem("email", email)
//           );
//           Link("/VerifyOtp");
//         }
//       })
//       .catch((error) => {
//         console.error("Registration Error:", error);
//       });
//   }
// };
