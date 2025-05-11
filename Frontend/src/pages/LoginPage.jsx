import React, { useState } from "react";
import axios from "axios";
import {toast} from 'react-toastify';
import { useNavigate } from "react-router";

function LoginPage({tolink}) {
  const [signup, setSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //const URL = "http://localhost:8080";
  const URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try{
      const response = await axios.post(`${URL}/api/v2/auth/login`, { email, password }, {withCredentials: true});
      if(response.data.success){
        setEmail("");
        setPassword("");
        if(tolink){
          navigate(`/${tolink}`);
        }  
        toast.success(response.data.message);
      }else {
        toast.error(response.data.message)
      }
    } catch(err){
      console.log(err);
    }
  }

  async function handleSignup(e) {
    e.preventDefault();
    try{
      const response = await axios.post(`${URL}/api/v2/auth/signup`, { email, password, username }, {withCredentials: true});
      if(response.data.success){
        setEmail("");
        setPassword("");
        setUsername("");
        if(tolink){
          navigate(`/${tolink}`);
        }  
        toast.success(response.data.message)
      }else {
        toast.error("Fail to logout!")
      }
    } catch(err){
      console.log(err);
    }
  }

  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="flex flex-col items-center gap-4 sm:gap-5 w-full sm:w-2/5">
        <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl mb-4">
          <p className="prata-regular">{signup ? "Login" : "Sign Up"}</p>
          <p className="bg-black h-[2px] w-10"></p>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border p-2"
            type="text"
            placeholder="Email"
          />
          {!signup && (
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="border p-2"
              type="text"
              placeholder="Username"
            />
          )}

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border p-2"
            type="password"
            placeholder="Password"
          />

          {signup ? (
            <div className="flex items-center justify-between">
              <p className="cursor-pointer">Forgot Password?</p>
              <p onClick={() => setSignup(false)} className="cursor-pointer">
                Create Account
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-end">
              <p onClick={() => setSignup(true)} className="cursor-pointer">
                Login instead?
              </p>
            </div>
          )}
        </div>

        {signup ? (
          <button onClick={handleLogin} className="bg-black text-white p-2 px-10 cursor-pointer">Log In</button>
        ) : (
          <button onClick={handleSignup} className="bg-black text-white p-2 px-10 cursor-pointer">Sign Up</button>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
