import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate=useNavigate()

  const handleLogout=()=>{
   localStorage.clear()
      navigate('/login');
    }
    const checkLogin=()=>{
      const user = JSON.parse( localStorage.getItem('user'))
      console.log(user);
      if(!user){
        navigate('/login');
      }
    }
  
  useEffect(()=>{
    checkLogin();
  },[]);
  return (
    <div>
      <h1>Login UserId is{}</h1>
      <button onClick={handleLogout}>Logout</button>

      <button onClick={checkLogin}>checkLogin</button>
    </div>
  )
  }

export default Dashboard;
