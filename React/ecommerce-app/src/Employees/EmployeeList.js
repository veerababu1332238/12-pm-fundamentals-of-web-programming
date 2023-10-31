import { useState,useEffect } from "react";
import Employee from "./Employee";

function EmployeeList(){
    const[employees,setEmployees] = useState([]);
useEffect(() => {
    setEmployees([
        {
          "id": 1001,
          "imageUrl": "https://hub.dummyapis.com/Image?text=RB&height=120&width=120",
          "firstName": "Roger",
          "lastName": "Breitenberg",
          "email": "Roger.Breitenberg@dummyapis.com",
          "contactNumber": "4522498309",
          "age": 70,
          "dob": "09/07/1953",
          "salary": 1.0,
          "address": "Address1"
        },
        {
          "id": 1002,
          "imageUrl": "https://hub.dummyapis.com/Image?text=DC&height=120&width=120",
          "firstName": "Devon",
          "lastName": "Corkery",
          "email": "Devon.Corkery@dummyapis.com",
          "contactNumber": "4378199523",
          "age": 28,
          "dob": "17/07/1995",
          "salary": 2.0,
          "address": "Address2"
        },
        {
          "id": 1003,
          "imageUrl": "https://hub.dummyapis.com/Image?text=JW&height=120&width=120",
          "firstName": "Josephine",
          "lastName": "Wilderman",
          "email": "Josephine.Wilderman@dummyapis.com",
          "contactNumber": "4072794966",
          "age": 41,
          "dob": "19/01/1982",
          "salary": 3.0,
          "address": "Address3"
        },
        {
          "id": 1004,
          "imageUrl": "https://hub.dummyapis.com/Image?text=BM&height=120&width=120",
          "firstName": "Brisa",
          "lastName": "Murphy",
          "email": "Brisa.Murphy@dummyapis.com",
          "contactNumber": "4092098665",
          "age": 72,
          "dob": "11/08/1951",
          "salary": 4.0,
          "address": "Address4"
        },
        {
          "id": 1005,
          "imageUrl": "https://hub.dummyapis.com/Image?text=LF&height=120&width=120",
          "firstName": "Lorene",
          "lastName": "Fritsch",
          "email": "Lorene.Fritsch@dummyapis.com",
          "contactNumber": "4751091131",
          "age": 55,
          "dob": "22/12/1968",
          "salary": 5.0,
          "address": "Address5"
        },
        {
          "id": 1006,
          "imageUrl": "https://hub.dummyapis.com/Image?text=KH&height=120&width=120",
          "firstName": "Kyle",
          "lastName": "Hettinger",
          "email": "Kyle.Hettinger@dummyapis.com",
          "contactNumber": "4016398691",
          "age": 30,
          "dob": "14/04/1993",
          "salary": 6.0,
          "address": "Address6"
        },
        {
          "id": 1007,
          "imageUrl": "https://hub.dummyapis.com/Image?text=SH&height=120&width=120",
          "firstName": "Suzanne",
          "lastName": "Harber",
          "email": "Suzanne.Harber@dummyapis.com",
          "contactNumber": "4332892020",
          "age": 27,
          "dob": "02/08/1996",
          "salary": 7.0,
          "address": "Address7"
        },
        {
          "id": 1008,
          "imageUrl": "https://hub.dummyapis.com/Image?text=MH&height=120&width=120",
          "firstName": "Maryjane",
          "lastName": "Hilpert",
          "email": "Maryjane.Hilpert@dummyapis.com",
          "contactNumber": "4354598016",
          "age": 70,
          "dob": "16/03/1953",
          "salary": 8.0,
          "address": "Address8"
        },
        {
          "id": 1009,
          "imageUrl": "https://hub.dummyapis.com/Image?text=KH&height=120&width=120",
          "firstName": "Kariane",
          "lastName": "Harber",
          "email": "Kariane.Harber@dummyapis.com",
          "contactNumber": "4106799114",
          "age": 82,
          "dob": "10/04/1941",
          "salary": 9.0,
          "address": "Address9"
        },
        {
          "id": 1010,
          "imageUrl": "https://hub.dummyapis.com/Image?text=JL&height=120&width=120",
          "firstName": "Jamey",
          "lastName": "Lehner",
          "email": "Jamey.Lehner@dummyapis.com",
          "contactNumber": "4958991932",
          "age": 63,
          "dob": "18/10/1960",
          "salary": 10.0,
          "address": "Address10"
        }
      ]);
        },[])
        const deleteEmployee = (id) => {
          setEmployees(employees.filter(emp => emp.id !== id));
        }
        
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h1 className="text-center">EmployeeList</h1>
                        <div className="row">
                                {employees.map(employee => (
                                    <div className="col-sm-4">
                                    <Employee data={{employee,deleteEmployee}}/>
                                    </div>
                                ))}
                        
                        </div>
                </div>
            </div>
        </div>
    )
}
export default EmployeeList;