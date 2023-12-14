
import { Route,Routes } from 'react-router-dom';
import './App.css';
//import Contain from './components/Contain';
//import Footer from './components/Footer';
//import Header from './components/Header';
import {Login} from './components/Login';
import {Register} from './components/Register';
import Reset from './components/Reset';
import Dashboard from './components/Dashboard';


const App=() =>{
  return (
    <div className="text-white font-serif h-[100vh] flex justify-center items-center bg-cover bg-[url('/src/bg_image2.jpg')]">
      <Routes>
      <Route path ='/login' element = {<Login/>}/>
      <Route path ='/login/register' element = {<Register/>}/>
      <Route path ='/login/reset' element = {<Reset/>}/>
  </Routes>
  <Dashboard/>
    </div>
  );
  } 
export default App;

