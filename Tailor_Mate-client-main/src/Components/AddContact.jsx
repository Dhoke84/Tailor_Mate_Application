import React, { useState } from 'react'
import '../assets/css/form.css'
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
import {toast} from 'react-toastify'


const AddContact = () => {

    const [values, setValues] =useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        clothtype: '',
        charges: '',
        detailmessage: ''

    })



    const navigate = useNavigate()
    const handleInput = (event) =>{
        setValues({...values, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('https://tailor-mate-server-api.vercel.app/tailormsyt/add-contact', values, {
            headers: {
              Authorization: `Berear ${localStorage.getItem('token')}`
            }
          }).then((res)=>{
                if(res.data.success){
                    toast.success("Detail Added Successfully", {
                        position:"top-right",
                        autoClose:5000
                    })
                    navigate('/dashboard')
                }
           
            })
            .catch((err) =>{
            
                console.log(err);
             
            });
        
    };
  return (
    <div className='add-form-container'>
        <form className='add-form' onSubmit={handleSubmit}>
            <h2>Create details</h2>
            <div className='form-group'>
                
                <input type='text' name='name'  placeholder='Enter your name' className='form-control' onChange={handleInput}/>
                
            </div>

            <div className='form-group'>
               
                <input type='email' name='email'  placeholder='Enter your email' className='form-control' autoComplete='off' onChange={handleInput}/>
                
            </div>

            
            <div className='form-group'>
                
                <input type='text' name='phone'  placeholder='Enter your phone no.' className='form-control' onChange={handleInput} />
                
            </div>

            <div className='form-group'>
                
                <input type='text' name='address'  placeholder='Enter Address' className='form-control' onChange={handleInput} />
                
            </div>

            <div className='form-group'>
                
                <input type='text' name='clothtype'  placeholder='Enter Cloth pattern' className='form-control' onChange={handleInput} />
                
            </div>

            <div className='form-group'>
                
                <input type='text' name='charges'  placeholder='Enter Charges' className='form-control' onChange={handleInput} />
                
            </div>

            <div className='form-group-message'>
                
            <textarea name='detailmessage' placeholder='Enter your measurement details' className='form-control-message' style={{ width: '100%' }} rows='10' onChange={handleInput}></textarea>
                
            </div>
            <button className='form-btn'>Add</button>


        </form>
    
    </div>
  )
}

export default AddContact



// import React, { useState } from 'react'
// import '../assets/css/form.css'
// import { Link, useNavigate } from 'react-router-dom'
// import Validation from '../Components/Validation'
// import axios from 'axios';
// import {toast} from 'react-toastify'


// const AddContact = () => {

//     const [values, setValues] =useState({
//         name: '',
//         email: '',
//         phone: '',
//         address: '',
//         clothtype: '',
//         charges: '',
//         alldetails: ''
//     })



//     const navigate = useNavigate()
//     const handleInput = (event) =>{
//         setValues({...values, [event.target.name]: event.target.value})
//     }

//     const handleSubmit = (e) =>{
//         e.preventDefault()
//         const errs = Validation(values)
//         setErrors(errs)
//         if(errs.name === "" && errs.email === "" && errs.password === ""){
//             axios.post('http://127.0.0.1:3000/tailormsyt/register', values).then(res=>{
//                 if(res.data.success){
//                     toast.success("Account Created Successfully", {
//                         position:"top-right",
//                         autoClose:5000
//                     })
//                     navigate('/login')
//                 }
           
//             }).catch(err =>{
//              if(err.response.data.errors){
//                 setServerErrors(err.response.data.errors)
//              }else{
//                 console.log(err)
//              }
//             })
//         }
//     }
//   return (
//     <div className='add-form-container' >
//     <form className='add-form' onSubmit={handleSubmit}>
//         <h2>Create Measurement Details</h2>
//         <div className='form-group'>
//             <input type='text' name='name' placeholder='Enter your name' className='form-control' onChange={handleInput}/>
//         </div>

//         <div className='form-group'>
//             <input type='email' name='email' placeholder='Enter your email' className='form-control' autoComplete='off' onChange={handleInput}/>
//         </div>

//         <div className='form-group'>
//             <input type='text' name='phone' placeholder='Enter your phone no.' className='form-control' onChange={handleInput} />
//         </div>

//         <div className='form-group'>
//             <input type='text' name='address' placeholder='Enter your address' className='form-control' onChange={handleInput} />
//         </div>

//         <div className='form-group'>
//             <input type='text' name='clothtype' placeholder='Enter your cloth pattern' className='form-control' onChange={handleInput} />
//         </div>

//         <div className='form-group'>
//             <input type='text' name='charges' placeholder='Enter your charges' className='form-control' onChange={handleInput} />
//         </div>

//         <div className='form-group'>
//             <textarea name='alldetails' placeholder='Enter your measurement details' className='form-control' style={{ width: '100%' }} rows='10' onChange={handleInput}></textarea>
//         </div>

//         <button type="submit" className="btn btn-primary">Submit</button>
//     </form>
// </div>


//   )
// }

// export default AddContact
