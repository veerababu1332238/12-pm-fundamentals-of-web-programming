function EmployeeAwardsList() {
    const allUserDataArray = JSON.parse(localStorage.getItem('allUserData')) || [];

 if (allUserDataArray.length === 0) {
   return <div>No data found for any user.</div>;
 }
    return (
        <div style={{marginTop:'10y%'}}>
     <h2 style={{textAlign:'center'}}>Awards list</h2>
     <table>
       <thead>
         <tr>
           <th>id</th> 
           <th>Name</th>
           <th>Award Name</th>
           <th>gift</th>
           <th>awarddate</th>
           
         </tr>
       </thead>
       <tbody>
         {allUserDataArray.map(({ userKey, formData,imageData }, index) => (
           <tr key={index}>
             
             <td>{formData.id}</td>
             <td>{formData.name}</td>
             <td>{formData.awardname}</td>
             <td>{formData.gift}</td>
             <td>{formData.awarddate}</td>
           </tr>
         ))}
       </tbody>
     </table>


   </div>
    )
}

export default EmployeeAwardsList;