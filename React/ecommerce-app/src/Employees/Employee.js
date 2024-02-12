function Employee(props) {
    const {employee,deleteEmployee} = props
    return (
        <div style={{ boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)' }} className="p-4 m-3">
            <div className="d-flex justify-content-between align-items-start">
                <img src={employee.image} className="my-2" alt="Employee" />
                <div>
                    <button className="btn btn-primary me-2"><i className="fa-solid fa-pen"></i></button>
                    <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
            <h5>FullName:<span className="text-primary">{employee.firstName} {employee.lastName}</span></h5>
            <h5>Email: <span className="text-primary">{employee.email}</span></h5>
            
            <h5>Age:<span className="text-primary">{employee.age}</span></h5>
            
            
           
        </div>
    );
}

export default Employee;
