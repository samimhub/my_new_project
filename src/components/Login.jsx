import {useState} from 'react';
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


export const Login=() => {
  const name ='Login';
  const [email,setEmail] =useState('');
  const [pass,setPass] =useState('');
  return (
    <div >
    <div className='bg-slate-800 border-slate-500 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
     <h1 className='text-4xl text-white font-bold text-center mb-6'>{name}</h1>
      <section>
          <div className="relative my-4">
          <label htmlFor="Username" className=''>Email</label>
          <input value={email} onChange={(e) =>setEmail(e.target.value)}type="email" 
          className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" autoComplete='off'/>
          <span className='absolute top-4 right-4'><FaRegUser/></span>
          </div>
          <div className="relative my-4">
          <label htmlFor="Password" className=''>Password</label>
          <input value={pass} onChange={(e) =>setPass(e.target.value)} type="password"
          className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"/>
          <span className='absolute top-4 right-4'><RiLockPasswordFill/></span>
          </div>
          <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" />
            <label htmlFor="" name="" id="">Remember me</label>
              <span>Forget the Password?</span>
              </div>
          </div>
          <button type="submit">Login</button>
          
        </section>
        <div className="register-link">
        <span>Don't have an account?</span><Link to='Register'>Register Here</Link>
        </div>
        </div>
    </div>
  )
};

