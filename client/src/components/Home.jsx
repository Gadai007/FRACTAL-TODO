import React, { useState } from "react";
import { Link } from "react-router-dom";
import signupImg from "../images/signup.png";
import { signup } from "../auth/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Home = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setValues((preValues) => {
      return { ...preValues, [name]: value };
    });
  };

  const onSuccess = () => {
    toast.success("Account created please signin!", { autoClose: 7000 });
  };

  const onError = (error) => {
    toast.error(`${error}`);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log('submit')
    const { name, email, password } = values;
    signup({ name, email, password }).then((response) => {
      if (response.error) {
        setValues((preValues) => {
          return { ...preValues, error: response.error };
        });
        onError(response.error);
      } else {
        setValues((preValues) => {
          return {
            ...preValues,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          };
        });
        onSuccess();
      }
    });
  };

  return (
    <div className="row">
      <div className="col-6">
        <img src={signupImg} alt="home" />
      </div>
      <div className="col-6">
        <form>
          <h2 className="fs-1">Sign Up</h2>

          <input
            type="text"
            id="name"
            value={values.name}
            name="name"
            onChange={onChangeHandler}
            className="form-control"
            placeholder="Name"
            required
            autoFocus
          />

          <input
            type="email"
            id="email"
            value={values.email}
            name="email"
            onChange={onChangeHandler}
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
          />

          <input
            type="password"
            id="password"
            value={values.password}
            name="password"
            onChange={onChangeHandler}
            className="form-control"
            placeholder="Password"
            required
          />
          <button className="w-100 btn btn-lg btn-primary" onClick={onSubmitHandler}>
            Sign up
          </button>
          <span className="fs-6 text-muted">
            if account already exist please <Link to="/signin">signin</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Home;
