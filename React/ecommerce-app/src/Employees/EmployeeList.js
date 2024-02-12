import { useState, useEffect } from "react";
import Employee from "./Employee";
import axios from 'axios';

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then(response => {
                const { data } = response;
                console.log(data);
                
                    setEmployees(data.users);
                
            })
            .catch(error => console.log(error));
    }, []);

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(emp => emp.id !== id));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h1 className="text-center">EmployeeList</h1>
                    <div className="row">
                        {employees.map(employee => (
                            <div className="col-sm-4">
                                <Employee employee={employee} deleteEmployee={deleteEmployee} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmployeeList;
