import React, { useEffect, useState } from 'react'
import authService from '../services/auth.service';

function Registration() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const initialValues = { email: "", password:"", confirm_password:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        console.log(e);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };

    // const handleSignup = async (e) => {
    //     e.preventDefault();
    // }
    
    const handleSignup = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        // console.log(formErrors);
      };

      
    const validate = (values) => {
        const errors = {};
        // errors.data = "show error";
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.password) {
            errors.password = "Password is required!";
        }
        if (!values.confirm_password) {
            errors.confirm_password = "Confirm Password is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        console.log(errors);
        return errors;
      };

      useEffect( () =>  {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          const postData = async () => {
            console.log(formValues);
            let details = {
              email: formValues.email,
              password: formValues.password,
            };
            //const detailsdata = JSON.stringify(details);
      
            try {
                await authService.signup(details.email, details.password).then(
                  (response) => {
                    // check for token and user already exists with 200
                    //   console.log("Sign up successfully", response);
                    // navigate("/home");
                    window.location.reload();
                  },
                  (error) => {
                    console.log(error);
                  }
                );
              } catch (err) {
                console.log(err);
              }
        }
        postData()
        }
      }, [formErrors]);
  return (
    <div>
      <form onSubmit={handleSignup}>
      {/* <form > */}
        <h3>Sign up</h3>
        <input
          type="text"
          placeholder="email"
          name="email"
        //   value={email}
          onChange={handleChange}
        />
         <p>{formErrors.email}</p>
        <input
          type="password"
          placeholder="password"
          name="password"
        //   value={password}
          onChange={handleChange}
        />
         <p>{formErrors.password}</p>

         <input
          type="password"
          placeholder="confirm password"
          name="confirm_password"
        //   value={password}
          onChange={handleChange}
        />
         <p>{formErrors.confirm_password}</p>
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}

export default Registration