import React, { useState } from "react";
import signinImg from "../images/signin.png";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { signin, authenticate, isAuthenticate } from "../auth/index";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    redirect: false,
  });

  const { user } = isAuthenticate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setValues((preValues) => {
      return { ...preValues, [name]: value };
    });
  };

  const onError = (error) => {
    toast.error(`${error}`);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const { email, password } = values;
    signin({ email, password })
      .then((response) => {
        if (response.error) {
          setValues((preValues) => {
            return { ...preValues, error: response.error };
          });
          onError(response.error);
        } else {
          authenticate(response, () => {
            setValues((preValues) => {
              return {
                ...preValues,
                email: "",
                password: "",
                error: "",
                redirect: true,
              };
            });
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const signunForm = () => {
    return (
      <form>
        <h2 className="fs-1">Sign In</h2>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={onChangeHandler}
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
        />
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={onChangeHandler}
          className="form-control"
          placeholder="Password"
          required
        />
        <button
          className="w-100 btn btn-lg btn-primary"
          onClick={onSubmitHandler}
        >
          Sign in
        </button>
      </form>
    );
  };

  const performRedirect = () => {
    if (values.redirect) {
      if (user) {
        return <Redirect to="/bucket" />;
      }
    } else {
      <Redirect to="/" />;
    }
  };

  return (
    <div className="row">
      <div className="col-6">
        <img src={signinImg} alt="signin" />
      </div>
      <div className="col-6">
        {signunForm()}
        {performRedirect()}</div>
    </div>
  );
};

export default Signin;
