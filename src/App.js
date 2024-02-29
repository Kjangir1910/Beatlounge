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
    

  </Route>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
