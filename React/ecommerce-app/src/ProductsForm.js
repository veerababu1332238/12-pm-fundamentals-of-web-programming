import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useState,useEffect } from 'react';
function ProductsForm(){
    const{register, handleSubmit, formState:{errors}} = useForm();
    const ProductDetails = (data) =>{
            submitForm(data);
    };
  function submitForm(formData){
    var bodyformData= new FormData();
    bodyformData.append('name', formData.name);
    axios.post('http://localhost:3001/v1/products',bodyformData).then(response => {

    console.log('API Response:', response.data);
})
.catch(error => {

  console.error('API Error:', error);
});
  }

   
return(
    <div className="container">
        <div className="row">
            <div className="col-sm-6 mx-auto border my-4 p-4">
                <h1 className="text-center">ProductData</h1>
                <form onSubmit={handleSubmit(ProductDetails)} noValidate> 

                    <div className='mb-3'>
                        <label for="name">name</label>
                        <input type="text" class="form-control" id="name" {...register('name',{required:true})} />
                       
                       
                    </div>
                    <div className='mb-3'>
                        <label for="imageSrc">imageSrc</label>
                        <input type="file" class="form-control" id="imageSrc" {...register('imageSrc')} />
                        
                        
                    </div>
                    <div className='mb-3'>
                        <label for="price">price</label>
                        <input type="text" class="form-control" id="price" {...register('price',{required:true})} />
                        
                       
                    </div>
                    <div className='mb-3'>
                        <label for="category">categeory</label>
                        <input type="text" class="form-control" id="category" {...register('category',{required:true})} />
                       
                       
                    </div>
                    <div className='mb-3'>
                        <label for="inStock">inStock</label>
                        <input type="text" class="form-control" id="inStock" {...register('inStock',{required:true})} />
                        
                       
                    </div>
                    <div className='mb-3'>
                        <label for="quantity">quantity</label>
                        <input type="text" class="form-control" id="quantity" {...register('quantity',{required:true})} />
                      
                    </div>
                    <div className='mb-3'>
                        <label for="specifications">specifications</label>
                        <input type="text" class="form-control" id="specifications" {...register('specifications',{required:true})} />
                       
                       
                    </div>
                   
                    <div className="text-center mb-1">
                        <button className="btn btn-info" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
)
}
export default ProductsForm;