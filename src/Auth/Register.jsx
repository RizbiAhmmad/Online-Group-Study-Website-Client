import React, { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../Components/Loading";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    document.title = "Title | Register";
  }, []);

  const validatePassword = (password) => {
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const length = password.length >= 6;
    return uppercase && lowercase && length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({});
    setLoading(true); // Start loading

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo") || "https://default-photo-url.com";
    const password = form.get("password");

    if (name.length < 2) {
      setError({ name: "Name must be more than 2 characters" });
      setLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setError({
        password:
          "Password must have at least 6 characters, one uppercase letter, and one lowercase letter",
      });
      setLoading(false);
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        return updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });

          Swal.fire({
            title: "Registration Successful!",
            text: "Your account has been created successfully.",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            navigate("/");
          });
        });
      })
      .catch((err) => setError({ register: err.message }))
      .finally(() => setLoading(false)); // Stop loading
  };

  if (loading) {
    return <Loading />; 
  }

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/background-abstract-realistic-technology-particle_23-2148431264.jpg?semt=ais_hybrid')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
              required
            />
          </div>

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
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="photo" className="block text-sm font-medium mb-2">
              Photo URL
            </label>
            <input
              type="url"
              name="photo"
              id="photo"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter photo URL"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter your password"
                required
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setPasswordVisible((prev) => !prev)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          {error.password && (
            <div className="text-red-500 text-sm mb-4">
              <p>{error.password}</p>
            </div>
          )}

          {error.name && (
            <div className="text-red-500 text-sm mb-4">
              <p>{error.name}</p>
            </div>
          )}

          {error.register && (
            <div className="text-red-500 text-sm mb-4">
              <p>{error.register}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
          <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
