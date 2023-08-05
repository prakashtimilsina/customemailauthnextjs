"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!name || !email || !password){
        setError("All fields are required.")
        return;
    }
    setError("")

    try {

      const resUserExits = await fetch('api/userExists', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email
        })
      })
      const { user } = await resUserExits.json();
      if(user){
        setError("User Already exits.")
        return;
      }

       const res =  await fetch('api/register',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password
            })
        })
        if(res.ok){
            const form = e.target;
            form.reset();
            router.push("/");
        } else{
            console.log("User Registration failed.");
        }
    } catch (error) {
        console.log('Error during registration: ', error)
    }

  };

  return (
    <div className="grid place-items-center h-screen bg-blue-200">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400 bg-yellow-200">
        <h1 className="text-xl font-bold my-4">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Full Name" />
          <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email" />
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" />
          <button
            className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 rounded-lg"
            type="submit"
          >
            Register
          </button>

          {error && (
            <div className="bg-red-400 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <Link className="text-sm mt-2 text-right" href="/">
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
