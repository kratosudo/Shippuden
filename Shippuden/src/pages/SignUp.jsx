import React, { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import  { useNavigate } from "react-router-dom"

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            setError("Failed to create an account");
        }
    };
    return (
        <form onSubmit={handleSubmit} className="rounded">

            {error && <P className="text-red-600">{error}</P>}

            <input type="email" value={email} placeholder="Email"
            onChange={e.target.value}
            className="rounded  border-gray-500 p-2 "
            />
            <input type="password" value={confirmPassword} 
            onChange={e.target.value}
            placeholder="password" className="border-gray-500 rounded border p-2"
            />
            <button type="submit" className="p-2 text-white rounded bg-sky-500">
                Sign Up
            </button>

        </form>
    );
};

export default SignUp;
 