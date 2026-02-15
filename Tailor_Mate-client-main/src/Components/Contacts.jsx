import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { FaPenToSquare, FaRegTrashCan } from 'react-icons/fa6';
import "../assets/css/dashboard.css"
import CircleLoader from 'react-spinners/CircleLoader'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const customStyles = {
  headCells: {
    style: {
fontSize: 15 + "px",
fontWeight: "bold",
  },
},
cells: {
  styles:{
    fontSize: 13 + "px",
fontWeight: 700,
  },
},
};
const MySwal = withReactContent(Swal)
const Contacts = () => {
  const [contacts, setContacts] = useState([])
  const [loading , setLoading] = useState(false)

  const deleteRecord = (id) =>{
    
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://tailor-mate-server-api.vercel.app/tailormsyt/contact/${id}`, {
          // axios.delete(`http://localhost:3001/tailormsyt/contact/${id}`, {
          headers: {
            Authorization: `Berear ${localStorage.getItem('token')}`
          },
          })
          .then((res) =>{
            setContacts(res.data.contacts)
         
        MySwal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
           });
        })
        .catch((err) =>{
          MySwal.fire({
            title: "Error!",
            text: "Error Occured!!!",
            icon: "error",
             });
        });
      }
    });
  }

  const columns = [
    {
      name: 'Name',
      selector: (row) => row.name,
      wrap: true
  },
  {
      name: 'Email',
      selector: (row) => row.email,
      wrap: true
  },
  {
      name: 'Phone',
      selector: (row) => row.phone,
      wrap: true
  },
  {
      name: 'Address',
      selector: (row) => row.address,
      wrap: true
  },
  {
      name: 'Type',
      selector: (row) => row.clothtype,
      wrap: true
  },
  {
      name: 'Charges',
      selector: (row) => row.charges,
      wrap: true
  },
  {
      name: 'Measurement',
      selector: (row) => row.detailmessage,
      wrap: true,
      grow: 2
  },
    {
      name : 'Action',
      selector : (row) => <>
      <Link to={`/dashboard/edit-contact/${row._id}`}>
        <FaPenToSquare className='table-icon1'/>
        </Link>
      <FaRegTrashCan className='table-icon2' onClick={() =>{
        deleteRecord(row._id)}}/>
      </>
    }
  ]
  useEffect(() =>{
    setLoading(true)
    axios.get('https://tailor-mate-server-api.vercel.app/tailormsyt/contacts',  {
            headers: {
              Authorization: `Berear ${localStorage.getItem('token')}`
            }
          }).then((res)=>{
                if(res.data.success){
                   setContacts(res.data.contacts)
                   setLoading(false) 
                }
           
            })
            .catch((err) =>{
            
                console.log(err);
                setLoading(false) 
             
            });
        
    },[]);

  return (
 <>
 {
  loading ? (
    <div className='loader'>
  <CircleLoader 
  loading={loading}
  size={50}
  aria-lable="Loading Spinner"
  data-testid="loader"
  />
  </div>
 ) : (
  <div>
  <DataTable 
  columns={columns}
  data={contacts}
  customStyles={customStyles}
  pagination
  />
  {contacts.length === 0 ? <h1>Add a Data</h1> : <></>}
 
   </div>
 )}

 </>
  );
}

export default Contacts
