import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="bg-color">
      <div className="text-center ">
        <div className="form-signin form-box-style">
          <form>
            {/*  <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
             */}
            <h1 className="h2  mb-3 fw-bold">Login </h1>
            <div className="form-floating mb-2">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="password"className="form-control"placeholder="Password"/>
              <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
              <label>
                <ul>
                  <a className="text-primary text-decoration-none" href="">Forgot password?</a>
                </ul>
              </label>
            </div>
            <div>
              <ul>
                <p> Not a member? <Link to='/signup' className="text-primary text-decoration-none">SignUP Now</Link> </p>
              </ul>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Login
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
