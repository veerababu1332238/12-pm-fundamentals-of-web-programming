import { useEffect, useState } from  'react';
import axios from 'axios'
function Contact(){

   const[emp,setEmployee] = useState([]);
   
   useEffect(() => {
      axios.get('http://localhost:8080/api/v1/employees').then(response => {
        
         const{ data } = response;
         setEmployee(data);
         console.log(data);
        
         
      }).catch(error => {
         console.log(error);

      })
   })
   
   return (
      <div >
      <h1 className='text-center'>List of Employees</h1>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>name</th>
            <th>job</th>
            <th>salary</th>
            <th>address</th>
            <th>location</th>
            <th>contact</th>

          </tr>   
        </thead>   
        <tbody>
          {
          emp.map( (empd,key) =>
          <tr key={key}>
              <td className='table-data'>{empd.id }</td>
              <td className='table-data'>{ empd.empName}</td>
              <td className='table-data'>{ empd.empJob}</td>
              <td className='table-data'>{ empd.empSalary}</td>
              <td className='table-data'>{ empd.empAddress}</td>
              <td className='table-data'>{ empd.empLocation}</td>
              <td className='table-data'>{ empd.empContact}</td>
          </tr>
          )
        }
        </tbody>
      </table>
    </div>

   
   )
}
export default Contact;