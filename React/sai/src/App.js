import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Login from './Login';


function App() {
  return (
    <div className="App">

     <Navbar/>
     <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='/about'element={<About/>}></Route>
      <Route path='/contact'element={<Contact/>}></Route>
      <Route path='/login'element={<Login/>}></Route>
     </Routes>
     {Location.pathname != '/login' && <Footer/>}
     
      
    </div>
  );
}

export default App;
