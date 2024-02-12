import { useEffect, useState } from  'react';

function EmployeeList(){

 // Retrieve all user data from the centralized array
 const allUserDataArray = JSON.parse(localStorage.getItem('allUserData')) || [];

 if (allUserDataArray.length === 0) {
   return <div>No data found for any user.</div>;
 }

  const handleClearLocalStorage = () => {
    localStorage.clear();
    alert('Local storage cleared.');
  };

 return (
   <div>
     <h2 style={{textAlign:'center'}}>Employee list</h2>
     <table>
       <thead>
         <tr>
           <th>id</th>
           <th>Name</th>
           <th>Email</th>
           <th>gender</th>
           <th>designation</th>
           <th>mobile</th>
           <th>department</th>
           <th>profile</th>
         </tr>
       </thead>
       <tbody>
         {allUserDataArray.map(({ userKey, formData,imageData }, index) => (
           <tr key={index}>
             
             <td>{formData.id}</td>
             <td>{formData.name}</td>
             <td>{formData.email}</td>
             <td>{formData.gender}</td>
             <td>{formData.designation}</td>
             <td>{formData.mobile}</td>
             <td>{formData.department}</td>
             <td>
                    {imageData && (
                      <img src={imageData} alt="Stored" style={{ maxWidth: '100px' }} />
                    )}
                  </td>
           </tr>
         ))}
       </tbody>
     </table>
     <button onClick={handleClearLocalStorage}>Clear Local Storage</button>

   </div>
 );
  
}
export default EmployeeList;