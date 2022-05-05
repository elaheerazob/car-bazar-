import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Share/Loading/Loading';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [
      createUserWithEmailAndPassword,
      user,
      loading
    ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification :true});



  const handleEmailChange = event =>{
      setEmail(event.target.value);
  }
  const handlePasswordChange = event =>{
      setPassword(event.target.value);
  }
  const handleConfirmPasswordChange = event =>{
      setConfirmPassword(event.target.value);
  }

  const navigate = useNavigate();
  const location =useLocation();

  const navigateLogin = () => {
      navigate('/login');
  }
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
      if (user) {
          navigate(from);
      }
  }, [user])


  if(loading){
      return <Loading></Loading>
  }
  const handleCreateUser = event =>{
      event.preventDefault();
      if(password !== confirmPassword){
          setError('Your two passwords did not match');
          return;
      }
      if(password.length <6){
          setError('Password must be 6 characters or longer');
          return;
      }
      
      createUserWithEmailAndPassword(email, password);
  }

    return (
        <div>
           <div className="text-center">
        <div className="form-signin form-box-style">
          <form onSubmit={handleCreateUser}>
            {/*  <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
             */}
            <h1 className="h2  mb-3 fw-bold">Sign Up </h1>
            <div className="form-floating mb-2">
              <input
                type="email"
                className="form-control"
                onChange={handleEmailChange}
                placeholder="name@example.com"
                required
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="password"
                className="form-control"
               onChange={handlePasswordChange}
                placeholder="Password"
                required
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="password"
                className="form-control"
                onChange={handleConfirmPasswordChange}
                placeholder="Password"
                required
              />
              <label for="floatingPassword">Confirm Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <ul>
                  <a className="text-primary text-decoration-none" as={Link} to="/">
                    Forgate password
                  </a>
                </ul>
              </label>
            </div>
            <div>
              <ul>
                <p>Alredy have a account <Link to='/login' className="text-primary text-decoration-none">Login</Link></p>
              </ul>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
          </form>
          <p style={{color: 'red'}}>{error}</p>
        </div>
      </div>
        </div>
    );
};

export default SignUp;