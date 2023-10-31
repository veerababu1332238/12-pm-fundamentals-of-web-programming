function Employee(props){
    const{employee,deleteEmployee} = props.data;
    return(
        <div style={{boxShadow:'2px 2px 2px 1px rgba(0, 0, 0, 0.2)'}} className="p-4 m-3">
                
                <div className="d-flex justify-content-between align-items-start">
                <img src={employee.imageUrl} className="my-2" />
                <div>
                <button className="btn btn-primary me-2"><i class="fa-solid fa-pen"></i></button>
                <button className="btn btn-danger"><i class="fa-solid fa-trash" onClick={ () => deleteEmployee(employee.id)}></i></button>
                </div>
                 </div>
                <h5>FullName:<span className="text-primary">{employee.firstName} {employee.lastName}</span></h5>
                <h5>email: <span className="text-primary">{employee.email}</span></h5>
                <h5>contactNumber: <span className="text-primary">{employee.contactNumber}</span></h5>
                <h5>age:<span className="text-primary">{employee.age}</span></h5>
                <h5>dob:<span className="text-primary">{employee.dob}</span></h5>
                <h5>salary:<span className="text-primary">{employee.salary}</span></h5>
                <h5>address:<span className="text-primary">{employee.address}</span></h5>
            
        </div>
    )
}
export default Employee;