import React from 'react'
import add from "../images/add.png";
import update from "../images/update.png";
import deleteimg from "../images/delete.png";
import show from "../images/show.png";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate();

 

  let cardstyle1 = {
    width: "18rem",
    marginLeft: "20pt",
    height: "270pt",
    marginTop: "6%",
  };
  let cardstyle2 = {
    width: "18rem",
    marginTop: "6%",
    height: "270pt",
    marginLeft: "50pt",
  };
  let cardstyle3 = {
    width: "18rem",
    marginLeft: "70pt",
    height: "270pt",
    marginTop: "6%",
  };
  let cardstyle4 = {
    width: "18rem",
    marginLeft: "60pt",
    height: "270pt",
    marginTop: "6%",
  };

  let imageicon = {
    width: "210pt",
    height: "120pt",
  };
  let backimagestyle={
      /* background-image: url(./images/cabcar.jpg); */
      backgroundColor: "rgb(39, 39, 39)",
      display: "flex",
      height: "450pt"
  
  };
  return (
    <>
   
    <div className="back-image" style={backimagestyle}>
      <div className="card " style={cardstyle1}>
        <img
          className="card-img-top"
          src={add}
          alt="Card image cap"
          style={imageicon}
        />
        <div className="card-body">
          <h5 className="card-title">Add Details</h5>
          <p className="card-text">
            In this section you can add the details of the drivers and Click Below for Adding Details.
          </p>
          <button type="button" class="btn btn-primary " onClick={()=> navigate('/add')}>
            ADD
          </button>
        </div>
        {/* </div> */}
      </div>

      <div className="card" style={cardstyle2}>
        <img
          className="card-img-top"
          src={update}
          alt="Card image cap"
          style={imageicon}
        />
        <div className="card-body">
          <h5 className="card-title">Update Details</h5>
          <p className="card-text">
          In this section you can update the details of the drivers and Click Below for Update Details.
          </p>
          <button type="button" class="btn btn-primary " onClick={()=> navigate('/update')}>
            {" "}
            UPDATE
          </button>
        </div>
        {/* </div> */}
      </div>

      <div className="card" style={cardstyle3}>
        <img
          className="card-img-top"
          src={deleteimg}
          alt="Card image cap"
          style={imageicon}
        />
        <div className="card-body">
          <h5 className="card-title">Delete Details</h5>
          <p className="card-text">
          In this section you can delete the details of the drivers and Click Below for delete Details.

          </p>
          <button type="button" class="btn btn-primary " onClick={()=> navigate('/delete')}>
            {" "}
            DELETE
          </button>
        </div>
      </div>

      <div className="card" style={cardstyle4}>
        <img
          className="card-img-top"
          src={show}
          alt="Card image cap"
          style={imageicon}
        />
        <div className="card-body">
          <h5 className="card-title">Show Details</h5>
          <p className="card-text"> 
          In this section you can see all the details of the drivers and Click Below to see Details.

          </p>
          <button type="button" class="btn btn-primary " onClick={()=> navigate('/showdetails')}>
            {" "}
            SHOW
          </button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home
