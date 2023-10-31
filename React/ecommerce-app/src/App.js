import logo from './logo.svg';
import './App.css';
import{ Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from "./Home";
import Footer from './Footer';
import Cart from './Cart';
import EmployeeList from './Employees/EmployeeList';
import ProductDetails from './ProductDetails';
import ProductDescription from './ProductDescription';
import ProductSpecifications from './ProductSpecifications';
import ProductRatingsReviews from './ProductRatingsReviews';
import Login from './Login';
import Register from './Register';
import ProductsForm from './ProductsForm';




function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
       <Route path="/product-details/:productId"  element={<ProductDetails/>}>
           <Route path="product-description" element={<ProductDescription/>}></Route>
           <Route path="product-specifications" element={<ProductSpecifications/>}></Route>
           <Route path="product-ratings" element={<ProductRatingsReviews/>}></Route>
        </Route>
       <Route path="/employees"  element={<EmployeeList/>}></Route>
       <Route path="/cart"  element={<Cart/>}></Route>
       <Route path="/" element={<Home/>}></Route> 
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/product-data" element={<ProductsForm/>}></Route>
       <Route path="/register" element={<Register/>}></Route>
     </Routes>
     
    
    </div>
  );
}
export default App;
