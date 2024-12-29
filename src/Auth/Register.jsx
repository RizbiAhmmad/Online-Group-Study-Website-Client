import React, { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

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

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo") || "https://default-photo-url.com";
    const password = form.get("password");

    if (name.length < 2) {
      setError({ name: "Name must be more than 2 characters" });
      return;
    }

    if (!validatePassword(password)) {
      setError({
        password:
          "Password must have at least 6 characters, one uppercase letter, and one lowercase letter",
      });
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;        

        return updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });

          // Show SweetAlert after successful registration
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
      .catch((err) => setError({ register: err.message }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
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
        </form>
      </div>
    </div>
  );
};

export default Register;
