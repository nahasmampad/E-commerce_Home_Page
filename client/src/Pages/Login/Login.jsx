import React, { useState } from "react";
import logo from "../../Icons/logo-6 1.png";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConPassword] = useState("");
  const [message, setMessage] = useState("");
  const error =()=>{
    setMessage("")
  }

  const signInUser = async () => {
    try {
      if (email === "" || password === "" || conpassword === "") {
        setTimeout(error, 5000)
        return setMessage("Please Complete the form");
      }
      if (password == conpassword) {
        setTimeout(error, 5000)
        return setMessage("Please Check Your Password");
      }

      const { data } = await axios.post(`http://localhost:8000/register`, {
        email,
        password,
      });
      if (data.siginin) {
        console.log(data);

        Cookies.set("user", JSON.stringify(data));
        navigate("/");
      } else {
        setTimeout(error, 5000)
        setMessage(data.message);
      }
    } catch (error) {}
  };

  const loginUser = async () => {
    if (email === "" || password === "") {
      setTimeout(error, 5000)
      return setMessage("Please Complete the form");
    }
    const { data } = await axios.post(`http://localhost:8000/login`, {
      email,
      password,
    });

    if (data.login) {
      console.log(data);

      Cookies.set("user", JSON.stringify(data));
      navigate("/");
    } else {
      setTimeout(error, 5000)
      setMessage(data.message);
    }
  };
  return (
    <div className="Login">
      {login ? (
        <div className="login_input">
          <img src={logo} alt="" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={loginUser}>Login</button>
          <span onClick={() => setLogin(false)}>Don't have an account</span>
          <span className="notifi_message">{message}</span>
        </div>
      ) : (
        <div className="login_input signin_input">
          <img src={logo} alt="" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={conpassword}
            onChange={(e) => setConPassword(e.target.value)}
          />
          <button onClick={signInUser}>Sign In</button>
          <span onClick={() => setLogin(true)}>You have an account</span>
          <span className="notifi_message">{message}</span>
        </div>
      )}
    </div>
  );
}

export default Login;
