import {useForm} from 'react-hook-form';
import { useState,useEffect } from 'react';

function Login(){
    const{register, handleSubmit, formState:{errors}} = useForm();
    const loginUser = (data) =>{
            console.log(data);
    };
    const [passwordType, setPasswordType] = useState("password");
   
    const togglePassword =()=>{
        if(passwordType==="password")
        {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
      }
      

return(
    <div className="container-fluid bg-light">
        <div className="row">
            <div className="col-sm-6 mx-auto border mt-5 p-5">
                <h1 className="text-center">Login</h1>
                <form onSubmit={handleSubmit(loginUser)} noValidate> 
                    
                    <div className="mb-3">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" {...register('email',{required:true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} />
                        {errors.email?.type==='required' && <p className='text-danger'>Email is Required</p>}
                        {errors.email?.type==='pattern' && <p className='text-danger'>Email format is incorrect</p>}
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type={passwordType} class="form-control" id="password"  {...register('password',{required:true,pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/})}/>
                        {errors.password?.type==='required' && <p className='text-danger'>Password is Required</p>}
                        {errors.password?.type==='pattern' && <p className='text-danger'>Password format is incorrect</p>}
                        <div className="input-group-btn m-1">
                     <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <i className="fa-solid fa-eye"></i> :<i class="fa-solid fa-eye-slash"></i> }
                     </button>
                    </div>
                    </div>
                    <div className="text-center mb-1">
                    <button className="btn btn-info" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
)
}
export default Login;