"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400 bg-pink-200">
        <h1 className="text-xl font-bold my-4">Login</h1>
        <form  onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button
            className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 rounded-lg"
            type="submit"
          >
            Login
          </button>
          {error && (
            <div className="bg-red-400 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <Link className="text-sm mt-2 text-right" href="/register">
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
