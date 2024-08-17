import React, { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        }catch (error){
            setError('Failed to log in');
        }  
    };
return (
    <div className="flex justify-center items-center">
    <form onSubmit={handleSubmit} className="rounded-md bg-sky-500">
        {error && <p className="tetx-red-500">{error}</p>}
        <input
        type="email" value={email} onChange={(e) => 
            setEmail(e.target.value)} placeholder="Email"
            className="border border-gray-400 rounded-md"/>
        <input
        type="password" value={password} 
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password" className="border border-gray-400"/>  

        <button type="submit" className="text-white rounded-md bg-sky-500">
            Login
        </button>
    </form>
    </div>
);

};

export default Login;