import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Profile.css"

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginData.email === "" || loginData.password === "") {
      toast.warning("Please fill all fields");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("moviehub-user"));

    if (!storedUser) {
      toast.error("No account found. Please register first.");
      return;
    }

    if (
      loginData.email === storedUser.email &&
      loginData.password === storedUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loggedInUser", storedUser.name);

      toast.success("Login Successful!");

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={loginData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={loginData.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;