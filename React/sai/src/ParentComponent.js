import React, { useState, useEffect } from 'react';
import ChildComponent from './ChildComponent'; // Import the child component

function ParentComponent() {
   
      // Step 2: Define state variables for form data
      const [formData, setFormData] = useState({ name: '', email: '' });
      const [formArray, setFormArray] = useState([]);
    
      // Step 3: Event handlers to update the form data
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      // Step 4: Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add the form data to the array
        setFormArray([...formArray, formData]);
        setFormData({ name: '', email: '' });
      };
    
      // Step 5: Serialize and store the array in local storage
      useEffect(() => {
        localStorage.setItem('formDataArray', JSON.stringify(formArray));
      }, [formArray]);
    
      
    
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <button type="submit">Submit</button>
          </form>
    
          <ChildComponent formDataArray={formArray} /> 
        </div>
      );  
}

export default ParentComponent;
