'use client'
import { authService } from "@/services/AuthService";
import { setAuth } from "@/store/slices/authSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      const response = await authService.login(email, password);
      dispatch(setAuth({user: response.user, token: response.token}));
      router.push('/');
    }
    catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="card w-96 bg-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center text-2xl text-black">Login</h2>
          {error && <div className="alert alert-error">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="form-control mb-4">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p>
              Don't have an account?{" "}
              <a href="/register" className="link link-primary">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
