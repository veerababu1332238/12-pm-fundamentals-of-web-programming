import {useForm} from 'react-hook-form';
function AddTutorial() {
    const{register, handleSubmit, formState:{errors}} = useForm();
    const addTutorial = (data) =>{
            console.log(data);
    };
   
return(
    <div className="container">
        <div className="row">
            <div className="col-sm-6 mx-auto border my-4 p-4">
                <h1 className="text-center">ADD Tutorial</h1>
                <form onSubmit={handleSubmit(addTutorial)} noValidate> 
                    <div className='mb-3'>
                        <label for="ittle">Title</label>
                        <input type="text" class="form-control" id="title" {...register('title',{required:true})} />
                    </div>
                    <div className='mb-3'>
                        <label for="description">Descrption</label>
                        <input type="text" class="form-control" id="description" {...register('description',{required:true})} />
                    </div>
                    <div className='mb-3'>
                        <label for="status">Status</label>
                        <input type="text" class="form-control" id="status" {...register('status',{required:true})} />
                       
                     </div>
                    <div className="text-center mb-1">
                    <button className="btn btn-info" type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
)
}

export default AddTutorial;