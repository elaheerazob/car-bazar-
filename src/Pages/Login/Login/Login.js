import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";
import auth from "../../../firebase.init";
import Loading from "../../../Share/Loading/Loading";

const Login = () => {

  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
  const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;
  const from = location.state?.from?.pathname || '/';

  const handelEmailChange = e =>{
    setEmail(e.target.value);
}

const handelPasswordChange = e =>{
    setPassword(e.target.value);
}

useEffect( () =>{
  if (user) {
      navigate(from, {replace: true});
  }
},[user])

if (loading || sending) {
  return <Loading></Loading>
}

if (error) {
  errorElement = <p className='text-danger'>Error: {error?.message}</p>
}


const handelLogin = e =>{
  e.preventDefault();
  signInWithEmailAndPassword(email,password);
}
const resetPassword = async () => {
        
  if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
  }
  else{
      toast('please enter your email address');
  }
}

  return (
    <div className="bg-color">
      <div className="text-center ">
        <div className="form-signin form-box-style">
          <form onSubmit={handelLogin}>
            {/*  <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
             */}
            <h1 className="h2  mb-3 fw-bold">Login </h1>
            <div className="form-floating mb-2">
              <input
                type="email"
                onChange={handelEmailChange}
                className="form-control"
                placeholder="name@example.com"
                required
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="password" onChange={handelPasswordChange} className="form-control"placeholder="Password" required/>
              <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              
              <label>
                <ul>
                  <a className="text-primary text-decoration-none" onClick={resetPassword} href="">Forgot password?</a>
                </ul>
              </label>
            </div>
            {errorElement}
            <div>
              <ul>
                <p> Not a member? <Link to='/signup' className="text-primary text-decoration-none">SignUP Now</Link> </p>
              </ul>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Login
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
