import React, { useRef, useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { FaRegUser } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import '../styles/loginpage.css'
import { Box, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CustomCTA from './customComponents/CustomCTA';
import axios from 'axios';
import toast from 'react-hot-toast';

const LOGIN_URL = 'http://localhost:3001/api/v1/auth/login'

const Login = () => {

  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(LOGIN_URL, {username, password}).then((response) => {
        if(response){
          const accessToken = response?.data?.accessToken
          localStorage.setItem('user', accessToken)
        }
        setUserName('');
        setPassword('');
        toast.success('logged in successfully', {position:"top-right"});
        navigate('/student-dash')
        return response.data
        
      })

    } catch (error) {
      if(!error?.response){
        setErrMsg('No Server Response');
    }else if (error.response?.status === 400){
        setErrMsg('Missing Username or Password');
    }else if (error.response?.status === 401){
        setErrMsg('Unauthorized');
    }else {
        setErrMsg('Login Failed');
    }
    }
  }

  return (
    <>
    <Container>
    <div className='container'>
      <div className="header">
        <div className="text">
          Log In
        </div>
        <div className="underline"></div>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
      </div>
      <div className="inputs">
        <div className="input">
          
          <FaRegUser className='logo' />
          
        <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        fullWidth
        ref={userRef}
        onChange={(event) => setUserName(event.target.value)}
        value={username}
        />
        </div>
        <div className="input">
        
        <TbPasswordUser className='logo' />
          
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          fullWidth
          autoComplete="current-password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        </div>
      </div>
      <div className="login-link">
        New user?  <Link to={'/signup'} style={{ textDecoration: "none"}}><span>Sign up</span></Link>
      </div>
      <div className="submit-container">
        <CustomCTA
        backgroundColor="#134987"
        color="#fff"
        buttonText="Login"
        onclick={handleSubmit}
        />
      </div>
    </div>
    </Container>
    </>
  )
}

export default Login