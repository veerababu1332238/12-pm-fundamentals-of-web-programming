
import axios from 'axios';
import { useState,useEffect } from 'react';
function ProductsForm(){
    const [formData,setFormData] = useState({
        name:'',
        price:'',
        category:'',
        inStock:'',
        quantity:'',
        specifications:''
    })
    const [imgSrc,setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                    setImage(event.target.result);

            }
            reader.readAsDataURL(file);
        }
    }

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData((prevdata) => ({
            ...prevdata,
            [name]: value,
        }));
    };
   const  handleSubmit = (e) =>{
     e.preventDefault();

     const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('category', formData.category);
        formDataToSend.append('inStock', formData.inStock);
        formDataToSend.append('quantity', formData.quantity);
        formDataToSend.append('specifications', formData.specifications);
        formDataToSend.append('image', imgSrc); // Append the image file
        axios.post('http://localhost:3001/v1/products', formDataToSend)
        .then(response => {
            // Handle the response
            console.log(response.data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });

   }

    
  

   
return(
    <div className="container">
        <div className="row">
            <div className="col-sm-6 mx-auto border my-4 p-4">
                <h1 className="text-center">ProductData</h1>
                <form onSubmit={handleSubmit} noValidate> 

                    <div className='mb-3'>
                        <label for="name">name</label>
                        <input type="text" class="form-control" name="name" value={formData.name} onChange={handleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label for="imageSrc">imageSrc</label>
                        <input type="file" class="form-control" accept='image'name='imgSrc'  onChange={handleImageChange} />
                    </div>
                    <div className='mb-3'>
                        <label for="price">price</label>
                        <input type="text" class="form-control" id="price"  name="price" value={formData.price} onChange={handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label for="category">categeory</label>
                        <input type="text" class="form-control" id="category" name="category" value={formData.category} onChange={handleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label for="inStock">inStock</label>
                        <input type="text" class="form-control" id="inStock" name='inStock' value={formData.inStock} onChange={handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label for="quantity">quantity</label>
                        <input type="text" class="form-control" id="quantity" name='quantity' value={formData.quantity} onChange={handleChange}/>
                      
                    </div>
                    <div className='mb-3'>
                        <label for="specifications">specifications</label>
                        <input type="text" class="form-control" id="specifications" name='specifications' value={formData.specifications} onChange={handleChange}/>
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