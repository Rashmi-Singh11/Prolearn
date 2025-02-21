import React,{useState} from 'react'
import Layout from '../../components/Layout/layout'
import toast from 'react-hot-toast'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import "../../styles/AuthStyles.css"
const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
    const [rollnumber,setRollnumber] = useState("")
    
    const navigate = useNavigate()
    // form function
    const handleSubmit = async (e) => {
          e.preventDefault()
         try {
            const res = await axios.post("/api/v1/auth/register" , {name,email,password,phone,rollnumber}

        );
        if(res && res.data.success){
            toast.success('res.data.message')
            navigate('/login');
        }
        else{
            toast.error(res.data.message)
        }
         } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
         }
    };
  
  return (
    <Layout title={'Register-Prolearn Connect'}>
     <div className='form-container'>
      
        <form onSubmit={handleSubmit}>
        <h4 className='title'>REGISTER FORM</h4>
  <div className="mb-3">
   
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your name' required />
  
  </div>
  <div className="mb-3">

    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your email' required  />
  
  </div>
  <div className="mb-3">

    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter your password' required  />
  </div>
  <div className="mb-3">

    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter your Phone number' required  />
  </div>
  <div className="mb-3">

    <input type="text" value={rollnumber} onChange={(e)=>setRollnumber(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter student id' required  />
  
  </div>
  
  
  
  <button type="submit" className="btn btn-primary">REGISTER</button>
</form>

     </div>
    </Layout>
  )
}

export default Register
