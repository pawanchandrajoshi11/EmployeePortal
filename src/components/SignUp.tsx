import { useState, FC } from "react";

import { useNavigate } from "react-router-dom";
const SignUp: FC = () => {
  const [users, setUsers] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // <Link to={"/home"}/>
    localStorage.setItem(users.email, JSON.stringify(users));
    navigate("/Home");
    console.log(users);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUsers((prev): any => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup Page</h1>
      <div>
        <input
          type="text"
          name="firstName"
          required
          placeholder="First Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          required
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="email"
          required
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default SignUp;

// import React, { SyntheticEvent, useState } from 'react';
// import chooseSubmit from '../Functions/chooseSubmit';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Signup: React.FC = () => {

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleSubmit = (event: SyntheticEvent) => {
//     event.preventDefault();
//     if(password === confirmPassword) {
//       const newUser = {
//         firstName,
//         lastName,
//         email,
//         password
//       };
//       localStorage.setItem(email, JSON.stringify(newUser));
//       // const currentUser = localStorage.getItem(email);
//       // if(currentUser){
//       //   const user = JSON.parse(currentUser);
//       // }
//       let fullName = firstName + " " + lastName;
//       chooseSubmit(location.pathname, navigate, fullName);
//     }
//     else{
//       alert("Password should match Confirm Password.");
//     }

//   };

//   return (
//     <div className="Component">
//       <h2 className='Heading'>Sign UP component</h2>
//       <form onSubmit={handleSubmit}>
//         <label>First Name</label><br />
//         <input type='text' value={firstName} placeholder='First Name'
//         onChange={(e) => setFirstName(e.target.value)}  required /><br />

//         <label>Last Name</label><br />
//         <input type='text' value={lastName} placeholder='Last Name'
//         onChange={(e) => setLastName(e.target.value)} required /><br />

//         <label>Email</label><br />
//         <input type='text' value={email} placeholder='Enter Email'
//         onChange={(e) => setEmail(e.target.value)} required /><br />

//         <label>Password</label><br />
//         <input type='password' value={password} placeholder='Enter Password'
//         onChange={(e) => setPassword(e.target.value)} required /><br />

//         <label>Confirm Password</label><br />
//         <input type='password' value={confirmPassword} placeholder='Confirm Password'
//         onChange={(e) => setConfirmPassword(e.target.value)} required /><br />

//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;
