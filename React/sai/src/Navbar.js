import {Link} from 'react-router-dom';
function Navbar(){
   return(
    <div className="container-fluid">
       <nav className="navbar navbar-expand-lg bg-dark  one">
        
                <ul className="navbar-nav mx-4">
                    <li className="nav-item h3">
                        <Link className="nav-link text-white  m-1" to="/"><img src="https://c8.alamy.com/comp/2H2330D/letter-s-logo-with-knife-icon-for-illustration-use-2H2330D.jpg" className="img-fluid" width="50px" height="50px"/></Link>
                    </li>
                </ul>
                <div class="collapse navbar-collapse flex-row-reverse">
                    <ul className="navbar-nav h3 px-2 "style={{marginRight:'100px'}}>
                        <li className="nav-item ">
                            <Link className="nav-link text-white  m-1" to="about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white  m-1" to="contact">Contact us</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link text-white  m-1" to="login">Login</Link>
                        </li>
                    </ul>
               </div>
        </nav>  
    </div>
   )
}
export default Navbar;