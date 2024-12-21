import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
  const { signIn, setUser, googleSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  useEffect(() => {
    document.title = "Title | Login";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    setLoading(true);
    signIn(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm mb-4">
              <p>{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Google Login Button */}
        <div className="text-center mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
            disabled={loading}
          >
            {loading ? "Logging in with Google..." : "Login with Google"}
          </button>
        </div>

        {/* Registration Prompt */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
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
