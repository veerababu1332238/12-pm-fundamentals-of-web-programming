import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

import { Routes, Route, parsePath ,useLocation} from 'react-router-dom';
import Login from './components/auth/Login';
import SideNavbar from './components/SideNavbar';
import Dashboard from './components/Dashboard';
import Employees from './components/employees/Employees';
import EmployeeList from './components/employees/EmployeesList';
import EmployeeCreate from './components/employees/EmployeesCreate';
import EmployeeAwardsList from './components/employees/EmployeesAwardsList';
import EmployeeNoticeList from './components/employees/EmployeesNoticeList';
import EmployeesImport from './components/employees/EmployeesImport';

function App() {
 
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if the current location is the login page
    setIsUserLoggedIn(location.pathname !== '/');
  }, [location.pathname]);
 
  return (
 
    


  <div className="App">
    {isUserLoggedIn && <SideNavbar/>}
    <div style={{width: isUserLoggedIn ? '80%' : '100%'}}>
        <Routes>
       
            <Route path="employee-list" element={<EmployeeList/>}></Route>
            <Route path="employee-create" element={<EmployeeCreate/>}></Route>
            <Route path="awards-list" element={<EmployeeAwardsList/>}></Route>
            <Route path="notice-list" element={<EmployeeNoticeList/>}></Route>
            <Route path="imports" element={<EmployeesImport/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/"  element={<Login/>}>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
