
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Contain from './components/Contain';
import {Login} from './components/Login';
import {Register} from './components/Register';

const App=() =>{
  return (
    <div className='flex text-center justify-center'>
      <Routes>
      <Route path ='/login' element = {<Login/>}/>
      <Route path ='Login/register' element = {<Register/>}/>
      </Routes>
  {/*<Contain/>*/}

    
    </div>
  );
  } 
export default App;

