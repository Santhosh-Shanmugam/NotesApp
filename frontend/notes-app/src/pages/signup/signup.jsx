import React,{useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {Link} from "react-router-dom"
import PasswordInput from "../../components/Input/PasswordInput"
import { validateEmail } from "../../utils/helper"

const signup = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(null);


  const handleSignUp = async(e) => {
    e.preventDefault();

    if(!name)
    {
        setError("Please enter the Name.");
        return;
    }
    if(!validateEmail(email))
      {
        setError("Please enter the valid Email.");
        return;
      }
      if(!password){
        setError("Please enter the Password.");
        return;
      }
      setError("");
      //sign api call
  } 

  return (
    <>
      <Navbar/> 
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit ={handleSignUp}>
            <h4 className="text-2xl mb-7">Sign-Up</h4>
            <input 
            type="text" 
            placeholder="Name" 
            className="w-full text-sm bg-transparent border border-gray-300 px-5 py-3 rounded mb-4 focus:outline-none
"
            value = {name}
            onChange={(e) => setName(e.target.value)}
            />

            <input 
            type="text" 
            placeholder="E-mail" 
            className="w-full text-sm bg-transparent border border-gray-300 px-5 py-3 rounded mb-4 focus:outline-none
"
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
            />
 
            <PasswordInput
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button type="submit" className="w-full text-sm bg-primary text-white p-2 rounded my-1">
              Create Account
            </button>

            
            <p className="text-sm text-center mt-4">
              Already Registered ? {" "}
              <Link to="/login" className="font-medium text-primary underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default signup