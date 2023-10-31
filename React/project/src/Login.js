import {useForm} from 'react-hook-form';
import Picture2 from './Picture2.png';
import { useNavigate } from 'react-router-dom';


function Login(){
    document.body.style.background = '#34ebc0';
    const navigate = useNavigate();
    const{register, handleSubmit, formState:{errors}} = useForm();
    const loginUser = (data) =>{
            console.log(data);
            navigate('/home');
    };
return(
    <div className="container-fluid bg " style={{overflow:'hidden'}}>
        <div className="row">
             <div className='col-sm-6' >

             <img src={Picture2} height={'400px'} width={'500px'}style={{  boxShadow:'10px 2px 2px 1px rgb(52, 235, 155)'}} className='two'></img>
             </div>
            <div className="col-sm-6 one" style={{  boxShadow:'10px 2px 2px 1px rgba(0, 0, 0, 0.2)'}}>
                
                <form onSubmit={handleSubmit(loginUser)} noValidate> 
                    
                    <div className="mb-1 m-auto">
                        <h1 className='text-center mb-0'> ITPS</h1>
                        <p className='text-center'>T e c h i n f o</p>
                    <p className="text-center">Login</p>
                        <label for="email">Email address</label>
                        <input type="email" class="form-control rounded-0" id="email" {...register('email',{required:true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} />
                        {errors.email?.type==='required' && <p className='text-danger'>Email is Required</p>}
                        {errors.email?.type==='pattern' && <p className='text-danger'>Email format is incorrect</p>}
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="password"  {...register('password',{required:true,pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/})}/>
                        {errors.password?.type==='required' && <p className='text-danger'>Password is Required</p>}
                        {errors.password?.type==='pattern' && <p className='text-danger'>Password format is incorrect</p>}

                 
                    </div>
                    <div className="text-center my-2">
                    <button className="btn btn-success" type="submit" >Login</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
)
}
export default Login;