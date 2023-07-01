import React from 'react'

function add() {
  let backstyle={
      backgroundColor:"green",
      //  marginTop:"40pt",
      width:"900pt",
      height:"300pt"
  };
  let submitbtn={
      marginTop:"2%",
      marginLeft:"36%",
      width:"200pt"
  };
  let body={
      backgroundColor:"green",
      height:"500pt"
  };
  let formstyle={
    marginTop:"100pt",
    backgroundColor:"yellow",
    height:"250pt"
  };
  return (
    <div className='body' style={body}>
    <div className='container' style={backstyle}>
      <h1 className='text-center'>ADD Driver Details Section</h1>
    <form style={formstyle}>
  <div className="form-group">
    <label for="exampleInputEmail1">Driver Name</label>
    <input type="text" className="form-control" id="drivername" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Driver ID Number</label>
    <input type="number" className="form-control" id="driverid" aria-describedby="emailHelp" placeholder="Driver ID Number"/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Driver Email</label>
    <input type="email" className="form-control" id="driveremail" aria-describedby="emailHelp" placeholder="Driver Email"/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Driver Phone Number</label>
    <input type="number" className="form-control" id="drivernumber" aria-describedby="emailHelp" placeholder="Driver Phone Number"/>
    
  </div>
  {/* <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-dark" style={submitbtn}>Submit</button>
</form>
</div>
</div>
  )
}

export default add

