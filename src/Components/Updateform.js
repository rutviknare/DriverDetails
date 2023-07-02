import axios from "axios";
import React, { useState } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import Swal from 'sweetalert2'


function Updateform() {
  let backstyle = {
    backgroundColor: "rgb(18, 204, 16)",
    //  marginTop:"40pt",
    width: "900pt",
    height: "300pt",
  };
  let submitbtn = {
    marginTop: "2%",
    marginLeft: "36%",
    width: "200pt",
  };
  let body = {
    backgroundColor: "rgb(18, 204, 16)",
    height: "500pt",
  };
  let formstyle = {
    marginTop: "100pt",
    backgroundColor: "yellow",
    height: "250pt",
  };
  const [name, setName] = useState('');
  //const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const {id} =useParams();
  const navigate=useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    axios.put('http://localhost:8081/update/updateform/'+id,{name,email,phone})
    .then(res=>{
    //   console.log(res);
    Swal.fire(
        'Successfully Updated!',
        'You clicked the button!',
        'success'
      )
      navigate('/update');
    }).catch(err=>console.log(err));

  }
  return (
    <div className="body" style={body}>
      <div className="container" style={backstyle}>
        <h1 className="text-center">Update Driver Details Section</h1>
        <form style={formstyle} onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Driver Name</label>
            <input
              type="text"
              className="form-control"
              id="drivername"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={e=>setName(e.target.value)}
            />
          </div>
          {/* <div className="form-group">
            <label for="exampleInputEmail1">Driver ID Number</label>
            <input
              type="number"
              className="form-control"
              id="driverid"
              aria-describedby="emailHelp"
              placeholder="Driver ID Number"
              onChange={e=>setId(e.target.value)}
            />
          </div> */}
          <div className="form-group">
            <label for="exampleInputEmail1">Driver Email</label>
            <input
              type="email"
              className="form-control"
              id="driveremail"
              aria-describedby="emailHelp"
              placeholder="Driver Email"
              onChange={e=>setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Driver Phone Number</label>
            <input
              type="number"
              className="form-control"
              id="drivernumber"
              aria-describedby="emailHelp"
              placeholder="Driver Phone Number"
              onChange={e=>setPhone(e.target.value)}
            />
          </div>
          {/* <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
          <button className="btn btn-dark" style={submitbtn}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Updateform;
