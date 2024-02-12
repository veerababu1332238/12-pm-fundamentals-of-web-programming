import Picture from './Picture.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
function SideNavbar() {
    
     document.body.style.backgroundColor = "'#e8e3e7'";
     
      const [isOpen, setIsOpen] = useState(false);
      const [isOpen1, setIsOpen1] = useState(false);
      const [isOpen2, setIsOpen2] = useState(false);
      const [isOpen3, setIsOpen3] = useState(false);
      const [isOpen4, setIsOpen4] = useState(false);
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
      
       const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
      };
      const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
      };
      const toggleDropdown3 = () => {
        setIsOpen3(!isOpen3);
      };
      const toggleDropdown4 = () => {
        setIsOpen4(!isOpen4);
      };
    
      return (
        <div  className='mx-2 my-2'>
      
          <h1>ITPS</h1>
          <p>techinfo</p>
          <img src={Picture} style={{borderRadius:'50%'}}/>
    
        <p><Link to='/dashboard' style={{textDecoration:'none', color:'black'}}><i class="fa fa-desktop" aria-hidden="true"></i>Dashboard</Link></p>
        <div className="dropdown">
          <p onClick={toggleDropdown}><i class="fa fa-user" aria-hidden="true"></i>Employee  { isOpen===false?  <i class="fa fa-plus" aria-hidden="true"></i> :<i class="fa fa-minus" aria-hidden="true"></i> }</p>
          {isOpen && 
            <ul>
              <li ><Link to="/employee-create" style={{textDecoration:'none',color:'black'}}>employee create</Link></li>
              <li ><Link to="/employee-list" style={{textDecoration:'none',color:'black'}}>employee list</Link></li>
              <li ><Link to="/awards-list" style={{textDecoration:'none' ,color:'black'}}>awards list</Link></li>
            </ul>
          }
        </div>
        <div className="dropdown">
        <p onClick={toggleDropdown1}><i class="fa fa-book" aria-hidden="true"></i>
    Attendence  { isOpen1===false?  <i class="fa fa-plus" aria-hidden="true"></i> :<i class="fa fa-minus" aria-hidden="true"></i> }</p>
        {isOpen1 && (
          <ul>
            <li ></li>attendece import
            <li >manual punching</li>
            <li >leave application</li>
          </ul>
        )}
      </div>
      <div className="dropdown">
        <p onClick={toggleDropdown2}><i class="fa fa-inr" aria-hidden="true"></i>payroll { isOpen2===false?  <i class="fa fa-plus" aria-hidden="true"></i> :<i class="fa fa-minus" aria-hidden="true"></i> }</p>
        {isOpen2 && (
          <ul>
            <li >pay slip</li>
            <li >salary setup</li>
            <li >salary process</li>
          </ul>
        )}
      </div>
      <div className="dropdown">
        <p onClick={toggleDropdown3}><i class="fa fa-file" aria-hidden="true"></i>Reports  { isOpen3===false?  <i class="fa fa-plus" aria-hidden="true"></i> :<i class="fa fa-minus" aria-hidden="true"></i> }</p>
        {isOpen3 && (
          <ul>
            <li >monthly salary </li>
            <li >yearly salary</li>
            <li >salary detuction</li>
          </ul>
        )}
      </div>
      <div className="dropdown">
        <p onClick={toggleDropdown4}><i class="fa fa-certificate" aria-hidden="true"></i>job  { isOpen4===false?  <i class="fa fa-plus" aria-hidden="true"></i> :<i class="fa fa-minus" aria-hidden="true"></i> }</p>
        {isOpen4 && (
          <ul>
            <li >employee create</li>
            <li >employee list</li>
            <li >awards list</li>
          </ul>
        )}
      </div>
      </div>
        
      );
    }
export default SideNavbar;