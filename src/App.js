import './App.css';
import Login from './components/Login';
import Register, { RegisterWithEmail } from './components/Register';

function App() {
  return (
    <>
    <Login/>
    <Register/>
    <RegisterWithEmail/>
    </>
  );
  } 

export default App;
