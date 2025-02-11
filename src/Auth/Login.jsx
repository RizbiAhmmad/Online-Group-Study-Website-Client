import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Loading from "../Components/Loading";
import { ThemeContext } from "../provider/ThemeProvider";

const Login = () => {
  const { signIn, setUser, googleSignIn } = useContext(AuthContext);
  const { isDarkMode } = useContext(ThemeContext); // Get Dark Mode state

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  useEffect(() => {
    document.title = "Group Study | Login";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    signIn(email, password)
      .then((result) => {
        setUser(result.user);

        const user = { email };
        axios.post("https://online-group-study-server-umber.vercel.app/jwt", user, { withCredentials: true })
          .then((data) => console.log("JWT Response:", data.data));

        Swal.fire({
          title: "Login Successful!",
          text: "You have successfully logged in.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate(from, { replace: true });
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    googleSignIn()
      .then((result) => {
        setUser(result.user);

        Swal.fire({
          title: "Login Successful!",
          text: "You have successfully logged in with Google.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate(from, { replace: true });
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <Loading />; 
  }

  return (
    <div
      className={`flex justify-center items-center min-h-screen bg-cover bg-center ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/background-abstract-realistic-technology-particle_23-2148431264.jpg?semt=ais_hybrid')`,
      }}
    >
      <div
        className={`w-full max-w-md p-8 rounded-lg shadow-md ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } bg-opacity-90`}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-3 py-2 border rounded focus:outline-none ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100"
              }`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`w-full px-3 py-2 border rounded focus:outline-none ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100"
              }`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 rounded-lg transition duration-200 ${
              isDarkMode
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Login
          </button>
        </form>

        {/* Google Sign-In */}
        <div className="text-center mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
          >
            Login with Google
          </button>
        </div>

        {/* Register Link */}
        <div className="text-center mt-4">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
