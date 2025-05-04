'use client';
import { authService } from '@/services/AuthService';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const Register: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await authService.register(name, email, password);
      router.push('/login');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="card w-96 bg-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center text-2xl text-black">Register</h2>
          {error && <div className="alert alert-error">{error}</div>}
          <form onSubmit={handleRegister}>
            <div className="form-control mb-4">
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p>
              Already have an account?{' '}
              <a href="/login" className="link link-primary">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
