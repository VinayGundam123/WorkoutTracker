import { useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";

import "./SignUp.css";

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign Up & Sign In
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState("");
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!email || !password || (isSignUp && !name)) {
      alert("Please fill in all fields.");
      return;
    }

    if (isSignUp) {
      // Simulated sign-up logic (Replace with actual API call)
      const userData = {  name, email, password };
      try{
        const response=await axios.post("http://localhost:5000/signUp", userData);
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log("User signed up:", { name, email, password });   
        navigate("/home");
      }catch(err){
        console.error("Error signing Up:", err);
        setError(err.response?.data?.message || "Something went wrong. Try again.");
      }
    } else {
      const userData = {email, password };
      try{
        const response=await axios.post("http://localhost:5000/login", userData);
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log("User signed in:", { email, password });
        navigate("/home");
      }catch(err){
        console.error("Error signing In:", err);
        setError(err.response?.data?.message || "Something went wrong. Try again.");
      }
    }
  };

  return (
    <div className="form-container">
      <h1>{isSignUp ? "Create an Account!" : "Welcome Back!"}</h1>
      <form className="auth-form" onSubmit={handleAuth}>
      {error && <p className="error">{error}</p>} 
        {isSignUp && (
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={isSignUp}
            />
          </label>
        )}

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>

        <p onClick={() => setIsSignUp(!isSignUp)} className="toggle-text">
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </p>
      </form>
    </div>
  );
};

export default SignUp;
