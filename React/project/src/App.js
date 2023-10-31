import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
  return (
      
           <div>
              <Routes>
              <Route path="/" element={<Login/>}></Route>
              <Route path="/home" element={<Home/>}></Route>
              </Routes>
            </div>
   
   
  
  );
}

export default App;
