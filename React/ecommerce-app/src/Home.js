
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home(){
   const [products,setproducts]=useState([]);
       
  
const[searchQuery,setSearchQuery] = useState('');
const[filterProducts,setFilteredProducts] = useState(products);
const searchProducts = (value) =>{
  setSearchQuery(value);
  console.log(searchQuery);
  setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase())));
};
useEffect(() =>{
  axios.get('http://localhost:3001/v1/products').then(response => {
    const { data } = response;
    setproducts(data.data);
    setFilteredProducts(data.data.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase())));
  })
})



    return(
        <div className="container">
                <div className="row my-4">
                    <div className="col-sm-6 mx-auto">
                        <div>
                         <input type="text" value={searchQuery} onChange={(event) => searchProducts(event.target.value)} className="form-control" id="searchQuery" placeholder="search products here"/>
                        </div>
                    </div>
            </div>
           {filterProducts.map(product => (
             <div className="row border-bottom" key={product.id}>
             <div className="col-sm-3">
                <img src={product.imgSrc} alt="product" className="img-fluid my-2"/>
             </div>
             <div className="col-sm-6">
                 <h3><Link to={`/product-details/${product.id}/product-description?name=${product.name}&price=${product.price}`}>{product.name}</Link></h3>
                 <p><strong>{product.rating}</strong></p>
               <ul>
        
               {product.specifications.map(spec =>(
                <li key={spec}>{spec}</li>
               ))}

                
               </ul>
                  

             </div>
             <div className="col-sm-3">
                 <h1>{product.price}</h1>
                 <button className="btn btn-primary">Add to cart</button>

             </div>
         </div>
           ))}
        </div>
    )
}
export default Home;