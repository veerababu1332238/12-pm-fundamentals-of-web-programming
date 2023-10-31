import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useState,useEffect } from 'react';
function Register(){
    const{register, handleSubmit, formState:{errors},watch} = useForm();
    const userRegistration = (data) =>{
            console.log(data);
    };
   
    const password = watch('password');
    const[pro,setpro] = useState([])
    useEffect (() => {
        axios.get('https://dummyjson.com/products').then(function(response) {
          setpro(response);
        }).catch(function(error){
            console.log(error);
        })
    })
return(
    <div className="container">
        <div className="row">
            <div className="col-sm-6 mx-auto border my-4 p-4">
                <h1 className="text-center">Register</h1>
                <form onSubmit={handleSubmit(userRegistration)} noValidate> 
                    <div className='mb-3'>
                        <label for="firstname">First Name</label>
                        <input type="text" class="form-control" id="firstname" {...register('firstname',{required:true, pattern: /^[a-zA-Z ]{3,40}$/})} />
                        {errors.firstname?.type==='required' && <p className='text-danger'>first is Required</p>}
                        {errors.firstname?.type==='pattern' && <p className='text-danger'>name format is incorrect</p>}
                    </div>
                    <div className='mb-3'>
                        <label for="lastname">Last Name</label>
                        <input type="text" class="form-control" id="lastname" {...register('lastname',{required:true, pattern: /^[a-zA-Z ]{3,40}$/})} />
                        {errors.lastname?.type==='required' && <p className='text-danger'>first is Required</p>}
                        {errors.lastname?.type==='pattern' && <p className='text-danger'>name format is incorrect</p>}
                    </div>
                    <div className='mb-3'>
                        <label for="mobile">Mobile Number</label>
                        <input type="text" class="form-control" id="mobile" {...register('mobile',{required:true, pattern: /^[0-9]{10,10}$/})} />
                        {errors.mobile?.type==='required' && <p className='text-danger'>mobile is Required</p>}
                        {errors.mobile?.type==='pattern' && <p className='text-danger'>mobile number must be 10 digits</p>}

                        </div>
                    <div className="mb-3">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" {...register('email',{required:true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} />
                        {errors.email?.type==='required' && <p className='text-danger'>Email is Required</p>}
                        {errors.email?.type==='pattern' && <p className='text-danger'>Email format is incorrect</p>}
                    </div>
                    <div className="mb-3">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" {...register('password',{required:true,pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/})}/>
                        {errors.password?.type==='required' && <p className='text-danger'>Password is Required</p>}
                        {errors.password?.type==='pattern' && <p className='text-danger'>Password format is incorrect</p>}
                        
                    </div>
                    <div className="mb-3">
                        <label for="confirmpassword">confirmpassword</label>
                        <input type="password" class="form-control" id="confirmpassword" {...register('confirmpassword',{required:true,validate: (value) => value === password})}/>
                        {errors.confirmpassword?.type==='required' && <p className='text-danger'>Password is Required</p>}
                        {errors.confirmpassword?.type==='validate' && <p className='text-danger'>Password doesn't match</p>}
                        
                    </div>
                    <div className="text-center mb-1">
                    <button className="btn btn-info" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    

    </div>
)
}
export default Register;