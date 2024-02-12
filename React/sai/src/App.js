import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Login from './Login';
import ParentComponent from './ParentComponent';
import ChildComponent from './ChildComponent';
import MappingFunction from './Mapfunction';
import Psycho from './Psychos';


function App() {
  return (
    <div className="App">

     <Navbar/>
     <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='/about'element={<About/>}></Route>
      <Route path='/contact'element={<Contact/>}></Route>
      <Route path='/login'element={<Login/>}></Route>
      <Route path='/parent'element={<ParentComponent/>}></Route>
      <Route path='/child'element={<ChildComponent/>}></Route>
      <Route path='/actress'element={<MappingFunction/>}></Route>
      <Route path='/psycho'element={<Psycho/>}></Route>
     </Routes>
     {Location.pathname != '/login' && <Footer/>}
     
      
    </div>
  );
}

export default App;
