import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import EmployeeCreate from './EmployeeCreate';
import EmployeeList from './EmployeeList';

function App() {
  return (
      
           <div>
              <Routes>
              <Route path="/" element={<Login/>}></Route>
              <Route path="/home" element={<Home/>}></Route>
              <Route path="/employee-create" element={<EmployeeCreate/>}></Route>
              <Route path="/employee-list" element={<EmployeeList/>}></Route>
              </Routes>
            </div>
   
   
  
  );
}

export default App;
