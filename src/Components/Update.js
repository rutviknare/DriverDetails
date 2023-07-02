import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
function Update() {

  const navigate=useNavigate();
  const [details,setdetails]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res=>console.log(setdetails(res.data)))
    .catch(err=>console.log(err));
  },[])
  let backstyle = {
    backgroundColor: "green",
    //  marginTop:"40pt",
    width: "100%",
    height: "450pt",
  };
  return (
    <div className='d-flex justify-content-center align-item-center' style={backstyle}>
      
      <div className='w-80 bg-dark rounded p-5'>
        {/* <button className='btn btn-success' onClick={()=>navigate("/add")}>Add +</button> */}
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
                  <button onClick={()=>navigate(`/update/updateform/${data.id_number}`)} className='btn btn-danger' >Update</button>
                  {/* <Link  to={`/update/updateform/${data.id_number}`} className='btn btn-success' >Update</Link> */}
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
