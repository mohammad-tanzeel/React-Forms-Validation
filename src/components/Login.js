
import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import AuthService from "../services/auth.service";

function Login() {

    const initialValues = {email:"", password:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
        console.log(formValues)
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setFormErrors(validate());
    }

    const validate = (values) => {
        const errors = {};
        // errors.data = "show error";
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
          } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        }
        
        console.log(errors);
        return errors;
    };

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         // await AuthService.login()
    //         await AuthService.login(email, password).then(
    //           () => {
    //             // navigate("/home");
    //             window.location.reload();
    //           },
    //           (error) => {
    //             console.log(error);
    //           }
    //         );
    //       } catch (err) {
    //         console.log(err);
    //       }
    //     };
    
  return (
    <div>
        {/* <form onSubmit={handleLogin}> */}
        <form >
        <h3>Login</h3>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <button type="submit">Log in</button>
        <Link to={"/register"} className="nav-link">
              regisgter
            </Link>
        </form>
    </div>
  )
}

export default Login