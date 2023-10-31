import{Link,useNavigate} from 'react-router-dom';
import { useState } from 'react';

function Navbar(){
  const[isUserDetailsCorrect,setUserDetailsCorrect] = useState(true);
  const navigate = useNavigate();
  const loginUser = () => {
    if(isUserDetailsCorrect){
        navigate('/login');
    }
  }


    return(
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" ><img src="https://lms.digital-lync.com/assets/logo.ab024049.png" className="img-fluid" width="231"height="312"></img></a>
   
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active bg-primary px-3 mx-1" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link bg-primary px-3 mx-1" to="/product-details">ProducDetails</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link bg-primary px-3 mx-1" to="/employees">Employees</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link bg-primary px-3 mx-1" to="/cart">Cart</Link>
        </li>
        <li className="nav-item">
          <p className="nav-link bg-primary px-3 mx-1" onClick={loginUser}>Login</p>
        </li>
        <li className="nav-item">
          <Link className="nav-link bg-primary px-3 mx-1" to="/product-data">ProductData</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}
export default Navbar;