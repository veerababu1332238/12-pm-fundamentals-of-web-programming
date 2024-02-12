import { useState } from 'react';
import {useForm} from 'react-hook-form';
import {  useNavigate } from 'react-router-dom';
function EmployeeCreate(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id : '',
        name: '',
        email: '',
        gender:'',
        designation:'',
        mobile:'',
        department: ''

      });
      const [imageData, setImageData] = useState(null);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const handleImageUpload = (e) => {
        const file = e.target.files[0];
    
        if (file) {
          // Convert the uploaded image to a Base64 string
          const reader = new FileReader();
          reader.onload = (event) => {
            setImageData(event.target.result);
          };
          reader.readAsDataURL(file);
        }
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // Retrieve existing data for all users or initialize an empty array
    const allUserDataArray = JSON.parse(localStorage.getItem('allUserData')) || [];

    // Get a unique user key (not secure, replace with authentication in production)
    const userKey = Math.random().toString(36).substring(7);

    // Push the current form data into the array with the user key
    allUserDataArray.push({ userKey, formData,imageData });

    // Store the updated array in local storage
    localStorage.setItem('allUserData', JSON.stringify(allUserDataArray));
    navigate('/employee-list');
  };

      
return(
    <div className="container-fluid">
        <h1 className="my-5" style={{textAlign:'center'}}>Create employee</h1>
         <form onSubmit={handleSubmit}>
        <div className="row my-5">

            <div className="col-sm-6"style={{textAlign:'right'}} >
            <input
        type="text"
        name="id"
        placeholder="id"
        value={formData.id}
        onChange={handleChange}
      /><br></br><br></br>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      /><br></br><br></br>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      /><br></br><br></br>
       <input
        type="text"
        name="gender"
        placeholder="gender"
        value={formData.gender}
        onChange={handleChange}
      /><br></br><br></br>
      </div>
      <div className="col-sm-6">
      <input
        type="text"
        name="designation"
        placeholder="designation"
        value={formData.designation}
        onChange={handleChange}
      /><br></br><br></br>
      <input
        type="text"
        name="mobile"
        placeholder="mobile"
        value={formData.mobile}
        onChange={handleChange}
      /><br></br><br></br>
      <input
        type="text"
        name="department"
        placeholder="department"
        value={formData.department}
        onChange={handleChange}
      /><br></br><br></br>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      {imageData && <img src={imageData} alt="Uploaded" />}
       <button type="submit">Submit</button>
      </div>

     
      </div>
    </form>
                
           
     
    

    </div>
)
}
export default EmployeeCreate;