import Picture from './Picture.png'




  import React, { useState } from 'react';
  function Home(){
    document.body.style.backgroundColor = "white";


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
    <div>
      <h4>dashboard</h4>
      <h1>ITPS</h1>
      <p>techinfo</p>
      <img src={Picture}/>

    <h3>Dashboard</h3>
    <div className="dropdown">
      <h3 onClick={toggleDropdown}>Employee</h3>
      {isOpen && (
        <ul>
          <li >employee create</li>
          <li >employee list</li>
          <li >awards list</li>
        </ul>
      )}
    </div>
    <div className="dropdown">
    <h3 onClick={toggleDropdown1}>Attendence</h3>
    {isOpen1 && (
      <ul>
        <li >employee create</li>
        <li >employee list</li>
        <li >awards list</li>
      </ul>
    )}
  </div>
  <div className="dropdown">
    <h3 onClick={toggleDropdown2}>payroll</h3>
    {isOpen2 && (
      <ul>
        <li >employee create</li>
        <li >employee list</li>
        <li >awards list</li>
      </ul>
    )}
  </div>
  <div className="dropdown">
    <h3 onClick={toggleDropdown3}>Reports</h3>
    {isOpen3 && (
      <ul>
        <li >employee create</li>
        <li >employee list</li>
        <li >awards list</li>
      </ul>
    )}
  </div>
  <div className="dropdown">
    <h3 onClick={toggleDropdown4}>job</h3>
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




export default Home;