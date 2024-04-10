import logo from './logo.svg';
import './App.css';
import Layout from './Pages/Layout';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Home from './Pages/Home';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Login from './Pages/Login';
import Forget from './Pages/Forget';
import Cservice from './Pages/Cservice';
import Register from './Pages/Register';
import Createotp from './Pages/Createotp';
import Privacy from './Pages/Privacy';
import Products from './Pages/Products';
import Headphone from './Pages/Headphone';
import Earphone from './Pages/Earphone';
import Earbuds from './Pages/Earbuds';
import Accessories from './Pages/Accessories';
import Productpage1 from './Pages/Productpage1';
import Productpage2 from './Pages/Productpage2';

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path = "/" element = {<Layout/>} >
    <Route path = "about" element = {<About/>} />
    <Route path = "blogs" element = {<Blogs/>} />
    <Route index element = {<Home/>} />
    <Route path = "register" element = {<Register/>} />
    <Route path='login' element ={< Login/>}/>
    <Route path='forget'element={<Forget/>} />
    <Route path='cservice'element={<Cservice/>} />
    <Route path='createotp'element={<Createotp/>} />
    <Route path='privacy'element={<Privacy/>} />
    <Route path='products'element={<Products/>} />
    <Route path='headphone'element={<Headphone/>} />
    <Route path='earphone'element={<Earphone/>} />
    <Route path='earbuds'element={<Earbuds/>} />
    <Route path='accessories'element={<Accessories/>} />
    <Route path='productpage1' element={<Productpage1/>} />
    <Route path='productpage2' element={<Productpage2/>} />
    

  </Route>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
