
import {Routes , Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/register'
import Login from './pages/Auth/Login';


import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/Routes/Private';
import Password from './pages/Auth/Password';
import Adminroute from './components/Routes/Adminroute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';


function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    {/* if(role===0){
    <Route path='/dashboard' element={<PrivateRoute/>}>
     <Route path="user" element={<Dashboard/>}/> 
    </Route>
}
else{
   <Route path='/dashboard' element={<Adminroute/>}>
    <Route path="admin" element={<AdminDashboard/>}>
    <Route path="create-category" element={<CreateCategory/>}/>
    <Route path="create-product" element={<CreateProduct/>}/>
    <Route path="users" element={<Users/>}/>
    </Route> */}
   
   <Route path='/dashbord' element={<Dashboard/>}/>
     
   
    <Route path='/register' element={<Register/>}/>
    <Route path='/forgot-password' element={<Password/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/policy' element={<Policy/>}/>
    <Route path='*' element={<Pagenotfound/>}/>
   </Routes>
   
    
  
    </>
  );
}

export default App;
