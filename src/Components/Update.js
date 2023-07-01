import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function Update() {

  const navigate=useNavigate();
  const [details,setdetails]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res=>console.log(setdetails(res.data)))
    .catch(err=>console.log(err));
  },[])

  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-item-center'>
      <div className='w-80 bg-dark rounded p-4'>
        <button className='btn btn-success' onClick={()=>navigate("/add")}>Add +</button>
        <table className='table'>
          <thead>
            <tr>
              <th>Driver Name</th>
              <th>Driver ID Number</th>
              <th>Driver Email</th>
              <th>Driver Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              details.map((data,i)=>(
                <tr key={i}>
                  <td>{data.name}</td>
                  <td>{data.id_number}</td>
                  <td>{data.email}</td>
                  <td>{data.phone_no}</td>
                  <button className='btn btn-success' >Update</button>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Update
